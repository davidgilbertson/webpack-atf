import React from 'react';
const {Component} = React;
import Header from '../Header/Header.jsx';

process.env.WEBPACK && require('./App.scss');

class App extends Component {
    constructor(props) {
        super(props);
        console.log('App.jsx loading');
    }

    render() {
        return (
            <div>
                <Header />
                <h1 className="app__title">The home page header</h1>
            </div>
        )
    }
}

export default App;
