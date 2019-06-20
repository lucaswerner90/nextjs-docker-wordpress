const withTypescript = require('@zeit/next-typescript');
module.exports = withTypescript({
    env: {
        GA_KEY: '',
        HOTJAR_KEY: ''
    },
    publicRuntimeConfig: {
        API: process.env.API_URL || 'http://localhost:8000'
    }
});
