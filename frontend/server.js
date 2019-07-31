const express = require('express');
const next = require('next');
const compression = require('compression');
const session = require('express-session');

// Setup ENV variables
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'prod' && process.env.NODE_ENV !== 'production';


// Run the application
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {

    const server = express();

    server.use(express.static(__dirname + '/static'));
    server.use(express.json());
    server.use(compression());
    server.use(session({
        secret: process.env.SESSION_SECRET || 'you should include this string in an .env file so its secure',
        resave: false,
        saveUninitialized: false
    }));

    const { setupPassport, checkIsAuthenticated, checkIsNotAuthenticated } = require('./server/auth');
    setupPassport(server);

    server.get('/login', checkIsNotAuthenticated, (req, res) => {
        const actualPage = '/login';
        app.render(req, res, actualPage);
    });

    server.get('/profile', checkIsAuthenticated, (req, res) => {
        const actualPage = '/profile';
        app.render(req, res, actualPage);
    });

    server.get('/post/:slug', (req, res) => {
        const actualPage = '/post';
        const queryParams = { slug: req.params.slug };
        app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });


    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`NextJS is ready on port ${PORT}!`);
    });

}).catch((error) => {
    console.error(error.stack);
});