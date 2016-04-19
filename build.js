require('babel-register')({
    presets: ['es2015'],
});

require('./setupGlobals.js');

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

global.defineAboveTheFoldCss = (path) => {
    console.log('  --  >  build.js:9 > defineAboveTheFoldCss > path:', path);
    require(path);
};
global.defineBelowTheFoldCss = (path) => {
    console.log('  --  >  build.js:12 > defineBelowTheFoldCss > path:', path);
    require(path);
};

process.env.WEBPACK = true;

const config = {
    entry: [
        'babel-polyfill',
        './app/client.js',
    ],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
            },
            {
                test: /\.scss$/,
                // loader: ExtractTextPlugin.extract(['style', 'css', 'sass']),
                loader: ExtractTextPlugin.extract('style', 'css!sass'),
                // loaders: ['style', 'css', 'sass'],
            },
        ],
    },
    bail: true,
    plugins: [
        new ExtractTextPlugin('../public/main.css'),
    ]
};

webpack(config, (err) => {
    err && console.log('  --  >  build.js:26 >  > err:', err);
    console.log('DONE');
});
