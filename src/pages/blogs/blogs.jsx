import React, { Component } from "react";
import "../../_custom.scss";
import Post from "../../components/post/post";
import Newsletter from "../../components/newsletter/newsletter";
class Blogs extends Component {
    render() {
        return (
            <div>
                <div className="row tagline">
                    <div className="col-12 text-center">
                        I love to share knowledge
                    </div>
                    <div className="col-12 text-center">
                        Knowledge sharing can lead to wonderful opportunities
                    </div>
                </div>
                <div className="row top-post">
                    <div className="col-md-6 top-post-img">
                        <img className="center" src="https://cdn.dribbble.com/users/210795/screenshots/15645286/media/e3835fda663d55616fa88f3c64f77135.jpg"></img>
                    </div>
                    <div className="col-md-6 top-post-content">
                        <span className="top-post-tag">Email Marketing</span><br />
                        <div className="top-post-title">Learn from These 6 Travel Agency Popup Examples to Boots Leads by 162 Percent</div>
                        <div className="top-post-excerpts">
                            Learn from These 6 Travel Agency Popup Examples to Boots Leads by 162 Percent Learn from These 6 Travel Agency Popup Examples to Boots Leads by 162 Learn from These 6 Travel Agency Popup Examples to Boots Leads by 162 PercentLearn from These 6 Travel Agency Popup Examples to Boots Leads by 162 Percent</div>
                        <span className="top-post-author">Emil kristensen</span>
                        <span className="top-post-date">March 9, 2021</span>
                    </div>
                </div>
                <hr />
                <div className="row category">
                    <span className="col-md-2 col-xs-12 item">All categories</span>
                    <span className="col-md-2 col-xs-12 item">Development</span>
                    <span className="col-md-2 col-xs-12 item">Healthy lifestyle</span>
                    <span className="col-md-2 col-xs-12 item">Experiences</span>
                    <span className="col-md-2 col-xs-12 item">Healthy lifestyle</span>
                    <span className="col-md-2 col-xs-12 item">Experiences</span>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-8 col-xs-12">
                        <div className="post-grid row">
                            <div className="col-md-6 col-xs-12"><Post /></div>
                            <div className="col-md-6 col-xs-12"><Post /></div>
                            <div className="col-md-6 col-xs-12"><Post /></div>
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
