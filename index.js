require('babel-register');

require('./setupGlobals.js');

// global.requireAboveTheFoldCss = (path) => {
//     return require(path);
// };

require('./app/server/server');
