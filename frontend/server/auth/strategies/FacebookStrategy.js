const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const bcrypt = require('bcrypt');
const wp = require('../../wordpress');

const login = (req, res, next) => {
    passport.authenticate('facebook', (err, user, info) => {
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

const strategy = new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID || '349851075967056',
    clientSecret: process.env.FACEBOOK_APP_SECRET || 'a5ac116b29d27303bc48c62f5889b3e1',
    callbackURL: "/auth/facebook/callback"
}, async (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
});


module.exports = {
    strategy,
    login
};