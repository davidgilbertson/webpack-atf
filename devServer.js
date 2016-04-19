const path = require('path');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = {
    entry: {
        app: ['../app/client.js']
    },
    output: {
        path: path.resolve(__dirname, '../build'),
        publicPath: '/assets/',
        filename: 'webpackBundle.js'
    },
    module: {
        loaders: [
            {
                test: '/\.jsx?$/',
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                },
            },
        ],
    }
};

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
    contentBase: '/build',
    quiet: false,
    noInfo: false,
    filename: 'bundle.js',
    publicPath: '/assets/',
});

server.listen(8080, 'localhost', (err) => {
    console.log('  --  >  devServer.js:23 > SERVER RUNNING ON 8080');
    err && console.log('  --  >  devServer.js:24 >  > err:', err);
});
