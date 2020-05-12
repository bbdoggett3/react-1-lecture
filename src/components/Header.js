import React, {Component} from 'react';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Voltron'
        }
    }


    render() {
        console.log(this.state);
        return (
            //This portion is known as JSX but it is like HTML
            <header>
                <span>This is {this.state.name}'s' header</span>
            </header>
        )
    };
};

export default Header;