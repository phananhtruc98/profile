import React, { Component } from "react";
import "../../_custom.scss";
class ContactItem extends React.Component {
    constructor(props) {
        super(props);

        this.attr = "";
    }
    render() {
        switch (this.props.type) {
            case "Phone":
                this.attr = `tel: ${this.props.data}`;
                break;
            case "Mail":
                this.attr = `https://mail.google.com/mail/?view=cm&fs=1&to=${this.props.data}`;
                break;
            case "Link":
                this.attr = `${this.props.data}`;
                break;
            default:
                this.attr = "#";
                break;
        }
        return (
            <div className="fs-5 mt-1">
                <img src={this.props.iconUrl} alt="" />
                &nbsp; <a href={this.attr} target="_blank" className="text-reset text-decoration-none contact-item">{this.props.data}</a>
            </div>
        );
    }
}

export default ContactItem;
