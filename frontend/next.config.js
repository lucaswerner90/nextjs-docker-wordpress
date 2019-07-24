const API = process.env.API_URL || 'http://localhost:8000';

// Wordpress API Configuration
const WPAPI = require('wpapi');
const wp = new WPAPI({
    endpoint: `${API}/wp-json`,
    username: process.env.WP_USERNAME || 'test',
    password: process.env.WP_PASSWORD || 'test',
    auth:true
});

module.exports = {
    env: {
        GA_KEY: '',
        HOTJAR_KEY: ''
    },
    publicRuntimeConfig: {
        API,
        wp
    }
};
