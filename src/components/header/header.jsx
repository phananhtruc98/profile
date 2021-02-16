import React, { Component } from "react";
import "../../_custom.scss";

class Header extends Component {
    render() {
        return (
            <div className="header pb-2">
                <div className="row menu">
                    <div className="col-md-1 offset-md-6"><a className="menu-item text-reset text-decoration-none" href="#">home</a></div>
                    <div className="col-md-1 offset-md-1 ml-5"><a href="#" className="menu-item text-reset text-decoration-none">profile</a></div>
                    <div className="col-md-1 offset-md-1 ml-5"><a href="#" className="menu-item text-reset text-decoration-none">projects</a></div>
                    <div className="col-md-1 offset-md-1 ml-5"><a href="#" className="menu-item text-reset text-decoration-none">contact</a></div>
                </div>
            </div>
        );
    }
}

export default Header;
