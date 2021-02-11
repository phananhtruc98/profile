import React, { Component } from "react";
import "../../_custom.scss";
class ContactItem extends React.Component {
    render() {
        return (
            <div className="fs-5 m-2 mt-3 mb-3">
                <img src={this.props.iconUrl} alt="" />
                &nbsp; {this.props.data}
            </div>
        );
    }
}

export default ContactItem;
