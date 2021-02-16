import React, { Component } from "react";
import "../../_custom.scss";
import MenuIcon from "../../assets/images/icon/menu.svg";
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
            <div className="header pb-2">
                <div className="row menu d-none d-lg-flex">
                    <div className="col-lg-1 offset-lg-6"><a href="#" className="menu-item text-reset text-decoration-none">home</a></div>
                    <div className="col-lg-1 offset-lg-1 ml-4"><a href="#" className="menu-item text-reset text-decoration-none">profile</a></div>
                    <div className="col-lg-1 offset-lg-1 ml-4"><a href="#" className="menu-item text-reset text-decoration-none">projects</a></div>
                    <div className="col-lg-1 offset-lg-1 ml-4"><a href="#" className="menu-item text-reset text-decoration-none">contact</a></div>
                </div>
                <div className="d-lg-none">
                    <div className="row text-right">
                        <a href="#" className="icon" onClick={this.handleClick}>
                            <img src={MenuIcon} />
                        </a>
                    </div>
                    <div className="row menu menu-mobile-items" style={{ display: this.state.isShow ? "flex" : "none" }}>
                        <div className="col-sm-12 text-center"><a href="#" className="menu-item text-reset text-decoration-none">home</a></div>
                        <div className="col-sm-12 text-center"><a href="#" className="menu-item text-reset text-decoration-none">profile</a></div>
                        <div className="col-sm-12 text-center"><a href="#" className="menu-item text-reset text-decoration-none">projects</a></div>
                        <div className="col-sm-12 text-center"><a href="#" className="menu-item text-reset text-decoration-none">contact</a></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
