// Global functions for PassportJS
function checkIsAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    }
    res.redirect('/login');
}
function checkIsNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    next();
}


module.exports = {
    checkIsAuthenticated,
    checkIsNotAuthenticated
}