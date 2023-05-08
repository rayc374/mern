const cookieSession = require('cookie-session');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const authRoute = require('./routes/auth');
//const courseRoute = require('./routes').course;
const passport = require('passport');
const passportSetup = require('./passport');
const cors = require('cors');
//const session = require('express-session');
const flash = require('connect-flash');
// 連結MongoDB
mongoose
  // mongodb://127.0.0.1:27017/mernDB
  .connect('mongodb://127.0.0.1:27017/GoogleDB')
  .then(() => {
    console.log('連結到mongodb...');
  })
  .catch((e) => {
    console.log(e);
  });

// middlewares
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());
//設定Routes
// app.use('/api/user', authRoute);

// course route應該被jwt保護
// 如果request header內部沒有jwt，則request就會被視為是unauthorized

// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());
// app.use((req, res, next) => {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   res.locals.error = req.flash('error');
//   next();
// });
//-------------------------------------------------------
app.use(
  cookieSession({ name: 'session', keys: ['Demo'], maxAge: 24 * 60 * 60 * 100 })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);

app.use('/auth', authRoute);

app.listen(8080, () => {
  console.log('後端伺服器聆聽在port 8080...');
});
