import React, { Component } from "react";
import "../../_custom.scss";
class Post extends Component {
    render() {
        return (
            <div className="post">
                <div className="post-img">
                    <img className="center" src="https://cdn.dribbble.com/users/210795/screenshots/15645286/media/e3835fda663d55616fa88f3c64f77135.jpg"></img>
                </div>
                <div className="post-content">
                    <span className="post-tag">Email Marketing</span><br />
                    <div className="post-title">Learn from These 6 Travel Agency Popup Examples to Boots Leads by 162 Percent</div>
                    <span className="post-author">Emil kristensen</span>
                    <span className="post-date">March 9, 2021</span>
                </div>
            </div>
        );
    }
}

export default Post;
