import React, { Component } from "react";
import "../../_custom.scss";
class ContactItem extends React.Component {
    render() {
        return (
            <div className="fs-5 mt-1">
                <img src={this.props.iconUrl} alt="" />
                &nbsp; {this.props.data}
            </div>
        );
    }
}

export default ContactItem;
