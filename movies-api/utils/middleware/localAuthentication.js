const passport = require("passport");
const LocalStrategy = require("passport-loca").Strategy;
const UsersService = require("./users.js");
const usersService = new UsersService();

passport.use( new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  })
);