const withTypescript = require('@zeit/next-typescript');
module.exports = withTypescript({
    publicRuntimeConfig: {
        API: process.env.API_URL || 'http://localhost:8000'
    }
});
