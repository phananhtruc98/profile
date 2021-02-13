import React, { Component } from "react";
import Contact from "../contact/contact";
import Objectives from "../objectives/objectives";
import AboutMe from "../about/about-items";
import Education from "../education/education";
import Jobs from "../work-experience/jobs";
import Avatar from "../../assets/images/avaCV.jpg";
class Container extends React.Component {
    render() {
        const mystyle = {
            width: "60%",
            height: "60%",
        };
        return (
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-4 col-sm-12 col-md-12">
                        <div className="text-center text-lg-right">
                            <img
                                src={Avatar}
                                className="rounded"
                                style={mystyle}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 align-self-center text-center">
                        <div className="fs-2 text-uppercase loose fw-bold">
                            PHAN ANH TRUC
                        </div>
                        <div className="fs-5">Software Engineer</div>
                    </div>
                    <div className="col-lg-5  align-self-center">
                        <div>
                            <div className="fs-2 text-uppercase loose fw-bold">
                                CONTACTS
                            </div>
                            <Contact />
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-2 col-sm-12"></div>
                    <div className="col-lg-2  col-sm-12 fs-2 text-uppercase loose fw-bold">
                        About me
                    </div>
                    <div className="col-lg-8 col-sm-8 border-2 border-left">
                        <AboutMe />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-2 col-sm-12"></div>
                    <div className="col-lg-2 col-sm-12 fs-2 text-uppercase loose fw-bold">
                        Objectives
                    </div>
                    <div className="col-lg-8 col-sm-12 border-2 border-left">
                        <Objectives />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-2 col-sm-12"></div>
                    <div className="col-lg-2 col-sm-12 fs-2 text-uppercase loose fw-bold">
                        Education
                    </div>
                    <div className="col-lg-8 col-sm-12 border-2 border-left">
                        <Education />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-2 col-sm-12"></div>
                    <div className="col-lg-2 col-sm-12 fs-2 text-uppercase loose fw-bold">
                        Work experience
                    </div>
                    <div className="col-lg-8 col-sm-12 border-2 border-left">
                        <Jobs />
                    </div>
                </div>
            </div>
        );
    }
}

export default Container;
