
// ************************************************************************************************
// ************************************************************************************************
// ************************************************************************************************
// ************************************************************************************************
// 
// 
// 
// 
// 
// 
// 
//                      Read process.env variables
// 
// 
// 
// 
// 
// 
// 
//
const NODE_ENV = process.env.NODE_ENV || 'dev';
const API = process.env.API_URL || 'http://api.example.com:5000';
console.log('NODE_ENV: ', NODE_ENV);
console.log('API: ', API);

// ************************************************************************************************
// ************************************************************************************************
// ************************************************************************************************
// ************************************************************************************************
// 
// 
// 
// 
// 
// 
// 
// 
//                  MODULE EXPORTS
// 
// 
// 
// 
// 
// 
// 
// 
module.exports = {
    env: {
        GA_KEY: '',
        HOTJAR_KEY: ''
    },
    publicRuntimeConfig: {
        API
    }
};
// ************************************************************************************************
// ************************************************************************************************
// ************************************************************************************************
// ************************************************************************************************
