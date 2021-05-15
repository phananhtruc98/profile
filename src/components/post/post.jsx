import React, { Component } from "react";
import "../../_custom.scss";
class Post extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var { post } = this.props;
        return (
            <div className="post">
                <div className="post-img">
                    <img className="center" src="https://cdn.dribbble.com/users/210795/screenshots/15645286/media/e3835fda663d55616fa88f3c64f77135.jpg"></img>
                </div>
                <div className="post-content">
                    <span className="post-tag">{post.category}</span><br />
                    <div className="post-title">{post.title}</div>
                    <span className="post-author">{post.author}</span>
                    <span className="post-date">{post.publishedDate}</span>
                </div>
            </div>
        );
    }
}

export default Post;
