const express = require('express');

const PORT = process.env.PORT || 9000;
const dev = process.env.NODE_ENV == 'dev' || process.env.NODE_ENV == 'development';

// Wordpress API Configuration
// const wp = require('./next.config').publicRuntimeConfig.wp;

const server = express();
server.use(express.json());



server.get('/', (req, res) => {
    return res.send('API Works');
});



server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`API is working on PORT: ${PORT} in: ${dev ? 'DEV' : 'PRODUCTION'} mode ... `);
});
