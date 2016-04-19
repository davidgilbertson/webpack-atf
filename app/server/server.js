import express from 'express';
import React from 'react';
import ReactDom from 'react-dom';
import ReactDomServer from 'react-dom/server';

const app = express();
app.use(express.static('public'));

import App from '../components/App/App.jsx';

app.get('/', (req, res) => {
    console.log('  --  >  server.js:11 > *');
    const appHtml = ReactDomServer.renderToString(<App />);
    
    const html =
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Play Webpack</title>
    <link rel="stylesheet" href="main.css" />
</head>
<body>
    <div id="app"></div>
    
    <script src="bundle.js"></script>
</body>
</html>`;

    res.send(html)
});

app.listen(8080, () => {
    console.log('listening on 8080');
});
