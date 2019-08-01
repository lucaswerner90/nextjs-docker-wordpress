// Global functions for PassportJS
function checkIsAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        req.session.returnTo = req.originalUrl;
        res.redirect('/login');
    }
}
function checkIsNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    } else {
        next();
    }
}


module.exports = {
    checkIsAuthenticated,
    checkIsNotAuthenticated
}