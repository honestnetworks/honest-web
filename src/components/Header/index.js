import React, { Component } from 'react';
import SideNav from './SideNav';

class Header extends Component {

    render() {
        return (
            <header>
                <SideNav/>
            </header>
        );
    }
}

export default Header;