import React, { Component } from "react";
import "../../_custom.scss";
import 'bootstrap/dist//js/bootstrap.js';
class Newsletter extends Component {
    render() {
        return (
            <div className="newsletter">
                <span className="newsletter-title">Don't miss out</span><br />
                <div className="newsletter-subtitle">Sign up for our newsletter to stay in the loop</div>
                <div className="newsletter-email">
                    <input type="text" name="email" placeholder="Email Address" />
                    <input type="submit" id="subscribe" name="subscribe" value="Subscribe" /></div>
            </div>
        );
    }
}

export default Newsletter;
