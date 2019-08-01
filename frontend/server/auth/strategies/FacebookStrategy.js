const FacebookStrategy = require('passport-facebook').Strategy;
const { checkIsNotAuthenticated } = require('../common');

// This function receives the accessToken and the profile of the user
// So if the user is not registered in the DB, we create this user,
// if not, we just return the user's profile FROM THE DATABASE
const processUserProfile = async (accessToken, refreshToken, profile, done) => {


    //
    // 
    // This is the info that we receive from facebook so far, we can add/remove fields
    // https://developers.facebook.com/docs/graph-api/reference/v2.5/user
    // 
    // 


    const { emails = [], id = '', displayName = '', photos = [], gender = '' } = profile;
    const newUser = {
        id,
        gender,
        name: displayName,
        email: emails.length > 0 ? emails[0].value : '',
        profilePhoto: photos.length > 0 ? photos[0] : '',
    }
    return done(null, newUser);
};


const strategy = new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID || '349851075967056',
    clientSecret: process.env.FACEBOOK_APP_SECRET || 'a5ac116b29d27303bc48c62f5889b3e1',
    callbackURL: "/auth/facebook/callback",
    profileFields: [
        'id',
        'displayName',
        'photos',
        'email',
        'age_range',
        'address'
    ]
}, processUserProfile);


const setup = (passport, server) => {


    passport.use(strategy);


    server.get('/auth/facebook', checkIsNotAuthenticated, passport.authenticate('facebook', {
        scope: ['email']
    }));
    server.get('/auth/facebook/callback', (req, res, next) => {
        passport.authenticate('facebook', (err, user, info) => {
            if (err) { return next(err); }
            if (!user) { return res.redirect('/login') }
            req.logIn(user, (err) => {
                if (err) {
                    return next(err);
                }
                if (req.session.returnTo) {
                    const returnURL = req.session.returnTo;
                    delete req.session.returnTo;
                    return res.redirect(returnURL);
                }
                return res.redirect('/');

            });
        })(req, res, next)
    });
}

module.exports = {
    setup
};