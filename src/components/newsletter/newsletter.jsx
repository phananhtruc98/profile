import React, { Component } from "react";
import "../../_custom.scss";
import 'bootstrap/dist//js/bootstrap.js';
class Newsletter extends Component {
    render() {
        return (
            <div className="newsletter">
                <span className="newsletter-title">Don't miss out</span><br />
                <div className="newsletter-subtitle">Sign up for our newsletter to stay in the loop</div>
                <div className="row">
                    <div className="col-md-8 col-xs-12 newsletter-email">
                        <input type="text" class="field-input" name="email" placeholder="Email Address" /></div>
                    <div className="col-md-4 col-xs-12">
                        <input type="submit" id="subscribe" name="subscribe" value="Subscribe" /></div>
                </div>
            </div>
        );
    }
}

export default Newsletter;
