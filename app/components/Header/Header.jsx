import React from 'react';
const {Component} = React;
// import {css} from '../../utils';

console.log('  --  >  Header.jsx:5 >  > process.env.WEBPACK:', process.env.WEBPACK);
process.env.WEBPACK && require('./Header.scss');

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                <h1 className="header__title">Header right here</h1>
            </header>
        )
    }
}

export default Header;
