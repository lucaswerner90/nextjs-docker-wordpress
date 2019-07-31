const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const wp = require('../../wordpress');

const login = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).send(info);
        }

        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            return res.status(200).send(user);
        });
    })(req, res, next);
};

const strategy = new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, async (username, password, done) => {
    const user = await wp.artista().email(username);
    if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
    }
    const equalPassword = await bcrypt.compare(password, user.password);
    if (!equalPassword) {
        return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
});


module.exports = {
    strategy,
    login
};