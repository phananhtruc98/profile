import React, { Component } from "react";
import "../../_custom.scss";
import Post from "../../components/post/post";
import Newsletter from "../../components/newsletter/newsletter";
class Blogs extends Component {
    constructor(props) {
        super(props);
        var myfile = require('../../assets/files/posts.txt');
        var data = JSON.parse(myfile?.default)?.data;
        this.topPost = data.pop();
        this.posts = data;
    }

    render() {
        return (
            <div className="m-md-5 p-md-5">
                <div className="row tagline">
                    <div className="col-12 text-center">
                        I love to share knowledge
                    </div>
                    <div className="col-12 text-center">
                        Knowledge sharing can lead to wonderful opportunities
                    </div>
                </div>
                {this.topPost != null &&
                    <div className="row top-post">
                        <div className="col-md-6 top-post-img">
                            <img className="center" src="https://cdn.dribbble.com/users/210795/screenshots/15645286/media/e3835fda663d55616fa88f3c64f77135.jpg"></img>
                        </div>
                        <div className="col-md-6 top-post-content">
                            <span className="top-post-tag">{this.topPost.data.category}</span><br />
                            <div className="top-post-title">{this.topPost.data.title}</div>
                            <div className="top-post-excerpts">{this.topPost.data.subtitle}</div>
                            <span className="top-post-author">{this.topPost.data.author}</span>
                            <span className="top-post-date">{this.topPost.data.publishedDate}</span>
                        </div>
                    </div>
                }
                <hr />
                <div className="row category">
                    <span className="col-md-2 col-xs-12 item active">All categories</span>
                    <span className="col-md-2 col-xs-12 item">Development</span>
                    <span className="col-md-2 col-xs-12 item">Refactoring</span>
                    <span className="col-md-2 col-xs-12 item">Algorithm</span>
                    <span className="col-md-2 col-xs-12 item">Health</span>
                    <span className="col-md-2 col-xs-12 item">Experiences</span>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-8 col-xs-12">
                        <div className="post-grid row mb-3">
                            {this.posts?.map((post) => (
                                <div className="col-md-6 col-xs-12"><Post key={post.id} id={post.id} post={post.data} /></div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <Newsletter />
                    </div>
                </div>
            </div >
        );
    }
}

export default Blogs;
