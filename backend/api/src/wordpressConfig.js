const WPAPI = require('wpapi');

const WP_CUSTOM_ROUTES_CONFIG = require(process.env.WP_CUSTOM_ROUTES_CONFIG || '../config/wordpress');
const WORDPRESS_URL = 'wordpress';
const wp = new WPAPI({
    endpoint: `${WORDPRESS_URL}/wp-json`,
    username: process.env.WP_USERNAME || 'test',
    password: process.env.WP_PASSWORD || 'test',
    auth: true
});
// Define the custom routes automatically based on config/WPCustomRoutes
const customRoutes = Object.keys(WP_CUSTOM_ROUTES_CONFIG);
for (let i = 0; i < customRoutes.length; i++) {
    const route = customRoutes[i];
    const info = WP_CUSTOM_ROUTES_CONFIG[route];
    wp[route] = wp.registerRoute("wp/v2", info.path, { params: info.params || [] });
}


module.exports = wp;