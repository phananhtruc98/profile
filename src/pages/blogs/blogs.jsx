import React, { Component } from "react";
import "../../_custom.scss";
import Post from "../../components/post/post";
class Blogs extends Component {
    render() {
        return (
            <div>
                <span className="fs-5">Welcome to my blog</span>
                <div className="row">
                    <div className="col-md-8 col-xs-12">
                        <div className="post-grid">
                            <Post />
                            <Post />
                            <Post />
                        </div>
                    </div>
                    <div className="col-md-3 col-xs-12">Newsletter</div>
                </div>
            </div>
        );
    }
}

export default Blogs;
