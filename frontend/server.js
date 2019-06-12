const express = require('express');
const next = require('next');
const compression = require('compression');

console.log(`NextJS server file NODE_ENV = ${process.env.NODE_ENV}`);
const PORT = process.env.PORT || 3000;
console.log(`NextJS PORT = ${PORT}`);
const dev = process.env.NODE_ENV !== 'prod' && process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare().then(() => {
    const server = express();
    server.use(compression());
    server.use(express.static(__dirname + '/static'));
    
    server.get('*', (req, res) => {
        return handle(req, res);
    });


    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`NextJS is ready on port ${PORT}!`);
    })

}).catch((error) => {
    console.error(error.stack);
});