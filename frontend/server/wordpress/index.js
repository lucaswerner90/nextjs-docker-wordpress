const WPAPI = require('wpapi');

const wp = new WPAPI({
    endpoint: `${process.env.WP_URL || 'http://admin.example.com:5000'}/wp-json`,
    username: process.env.WP_USERNAME || 'test',
    password: process.env.WP_PASSWORD || 'test',
    auth: true
});
wp.artista = wp.registerRoute("wp/v2", '/artista', { params: ['email'] });


module.exports = wp;