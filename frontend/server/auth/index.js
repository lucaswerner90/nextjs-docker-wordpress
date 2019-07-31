const passport = require('passport');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const LocalStrategy = require('./strategies/LocalStrategy');
const FacebookStrategy = require('./strategies/FacebookStrategy');

// Global functions for PassportJS
function checkIsAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    }
    res.redirect('/login');
}
function checkIsNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect(req.url);
    }
    next();
}
const logOut = (req, res, next) => {
    req.logOut();
    res.status(200).send('Logged out');
};


const registerUser = async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
        email,
        id: uuid.v4(),
        password: hashedPassword
    };
    if (!global.users) {
        global.users = [];
    }
    global.users.push(user);
    res.status(200).send(user);
}


function setupPassport(server) {
    // Setup config
    server.use(passport.initialize());
    server.use(passport.session());


    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        done(null, {id});
    });

    // Add Passport Strategies
    passport.use(LocalStrategy.strategy);
    passport.use(FacebookStrategy.strategy);

    // Local Strategy
    server.post('/register', checkIsNotAuthenticated, registerUser);
    server.post('/login', checkIsNotAuthenticated, LocalStrategy.login);
    server.post('/logout', checkIsAuthenticated, logOut);


    server.get('/auth/facebook', FacebookStrategy.login);
    server.get('/auth/facebook/callback', passport.authenticate('facebook'));

}

module.exports = {
    setupPassport,
    checkIsAuthenticated,
    checkIsNotAuthenticated
}