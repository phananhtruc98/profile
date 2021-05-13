import React, { Component } from "react";
import "../../_custom.scss";
import 'bootstrap/dist//js/bootstrap.js';
import { Link } from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isShow: false };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(preState => ({
            isShow: !preState.isShow
        }));
    }
    render() {
        return (
            <div className="header text-end">
                <Link to="/">Home </Link>
                <Link to="/blogs">Blogs </Link>
            </div>
        );
    }
}

export default Header;
