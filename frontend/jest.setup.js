const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

const { setConfig } = require('next/config');
const { publicRuntimeConfig } = require('./next.config');

// Make sure you can use "publicRuntimeConfig" within tests.
setConfig({ publicRuntimeConfig });
Enzyme.configure({ adapter: new Adapter() });