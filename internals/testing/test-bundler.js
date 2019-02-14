require('@babel/polyfill');
require('es6-promise').polyfill();
require('@yeutech-lab/test-polyfill').polyfill();
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });
