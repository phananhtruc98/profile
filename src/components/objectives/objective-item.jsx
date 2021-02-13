import React, { Component } from "react";
import "../../_custom.scss";
class ObjectiveItem extends Component {
    render() {
        return <li className="fs-5">{this.props.data}</li>;
    }
}

export default ObjectiveItem;
