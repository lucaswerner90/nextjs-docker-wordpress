const passport = require('passport');
const FacebookStrategy = require('./strategies/FacebookStrategy');

const { checkIsAuthenticated, checkIsNotAuthenticated } = require('./common');

const logOut = (req, res, next) => {
    req.logOut();
    res.status(200).send('Logged out');
};

function setupPassport(server) {
    // Setup config
    server.use(passport.initialize());
    server.use(passport.session());


    passport.serializeUser((user, done) => {
        // This is the info that we save inside the session
        // the idea is that we use the user email as ID so we can then
        // read that email and get the whole user object back using passport.deserializeUser()
        done(null, user);
    });

    passport.deserializeUser((obj, done) => {
        // Here we need to look for the specific user and return the whole object
        // in this case we're using the email address as the ID
        done(null, obj);
    });

    // Facebook Strategy
    FacebookStrategy.setup(passport, server);

    server.get('/logout', logOut);

}

module.exports = {
    setupPassport,
    checkIsAuthenticated,
    checkIsNotAuthenticated
}