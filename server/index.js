const cookieSession = require('cookie-session');
const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const formDataRoutes = require('./routes/formDataRoutes');
const dotenv = require('dotenv');
dotenv.config();
const passport = require('passport');
const bodyParser = require('body-parser');
const passportSetup = require('./passport');
const cors = require('cors');
// 連結MongoDB
mongoose
  // mongodb://127.0.0.1:27017/mernDB
  .connect('mongodb://127.0.0.1:27017/mernDB', {
    useNewUrlParser: true, //使用新URL解析器
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('已連結到Mongodb...');
  })
  .catch((e) => {
    console.log('連接MongoDB 失敗', e);
  });
// middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use('/api/form', formDataRoutes);
//-----------------------------------------------------------------------------

app.post('/api/form/submit-form', (req, res) => {
  const formData1 = new formData1(req.body);
  formData1.save((err) => {
    if (err) {
      console.error('發生錯誤', err);
      res.status(500).json({ error: '儲存數據時發生錯誤' });
    } else {
      res.status(200).json({ message: '數據已保存到資料庫' });
    }
  });
});

app.use(
  cookieSession({ name: 'session', keys: ['Demo'], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    AccessControlAllowOrigin: '*',
  })
);

app.use('/auth', authRoute);
app.listen(port, () => {
  console.log(`伺服器已啟動，正在監聽 ${port}...`);
});
