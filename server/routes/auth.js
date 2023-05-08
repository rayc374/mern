const router = require('express').Router();
const registerValidation = require('../validation').registerValidation;
const loginValidation = require('../validation').loginValidation;
const User = require('../models').user;
const jwt = require('jsonwebtoken');
const passport = require('passport');
router.use((req, res, next) => {
  console.log('正在接收一個跟auth有關的請求');
  next();
});
const CLIENT_URL = 'http://localhost:3000';
router.get('/login/success', (req, res) => {
  if (req.user) {
    res.alert('登入成功。您現在將被重新導向到個人資料頁面。');
    res.status(200).json({
      success: true,
      message: 'successfull',
      user: req.user,
      // cookies:req.cookies
    });
  }
});
router.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'failure',
  });
});
router.get('/logout', (req, res) => {
  req.logout();

  res.redirect(CLIENT_URL);
});

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account',
  })
);
router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/login/failed',
  })
);
router.get('/testAPI', (req, res) => {
  return res.send('成功連結auth route...');
});

// Google登入
router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/auth/login',
    failureFlash: '登入失敗。帳號或密碼不正確。',
  }),
  (req, res) => {
    return res.redirect('/profile');
  }
);
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  console.log('進入redirect區域');
  return res.redirect('/profile');
});

router.post('/register', async (req, res) => {
  //確認數據是否符合規範
  let { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // 確認信箱是否被註冊過
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send('此信箱已經被註冊過了。。。');

  // 製作新用戶
  let { email, username, password, role } = req.body;
  let newUser = new User({ email, username, password, role });
  try {
    let savedUser = await newUser.save();
    return res.send({
      msg: '使用者成功儲存。',
      savedUser,
    });
  } catch (e) {
    return res.status(500).send('無法儲存使用者。。。');
  }
});

router.post('/login', async (req, res) => {
  //確認數據是否符合規範
  let { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // 確認信箱是否被註冊過
  const foundUser = await User.findOne({ email: req.body.email });
  if (!foundUser) {
    return res.status(401).send('無法找到使用者。請確認信箱是否正確。');
  }

  foundUser.comparePassword(req.body.password, (err, isMatch) => {
    if (err) return res.status(500).send(err);

    if (isMatch) {
      // 製作json web token
      const tokenObject = { _id: foundUser._id, email: foundUser.email };
      const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
      return res.send({
        message: '成功登入',
        token: 'JWT ' + token,
        user: foundUser,
      });
    } else {
      return res.status(401).send('密碼錯誤');
    }
  });
});

module.exports = router;
