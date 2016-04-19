import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App/App.jsx';
console.log('client.js 2 loaded');

window.defineAboveTheFoldCss = () => {};
window.defineBelowTheFoldCss = () => {};

ReactDom.render(
    <App/>,
    document.getElementById('app')
);

// export default {};
