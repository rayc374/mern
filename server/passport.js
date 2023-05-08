const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const GOOGLE_CLIENT_ID =
  '587427436213-n6aidr8b7or2mlt1ujh502hdsek5vahs.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
