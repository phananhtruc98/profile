import React, { Component } from "react";
import "../../_custom.scss";
import 'bootstrap/dist//js/bootstrap.js';
import TerminalIcon from "../../assets/images/icon/terminal.svg";
import ImageIcon from "../../assets/images/icon/image-gallery.png";
import { CSSTransition } from 'react-transition-group';
import Carousel from '../carousel/carousel';

class JobItem extends Component {
    constructor(props) {
        super(props);
        this.state = { showButton: true, showMessage: false };
    }
    render() {
        var { job } = this.props; // job = this.props.job
        var { projects } = job; // project =job.projects
        var { images } = job;
        var carouselId = job.companyName.replace(/ /g, '');
        var carouselIdTarget = "#" + carouselId;
        return (
            <div className="border-2 border-bottom mb-3">
                <div className="lh-1 mb-1 job-block">
                    <span className="fs-5 fw-bold text-uppercase lh-1">
                        {job.companyName} &nbsp;
                    </span>
                    <span className="fs-14">
                        {job.fromDate} - {job.toDate}
                    </span>
                    <br />
                    <span className="fs-5 fw-bold">
                        {job.positionTitle} &nbsp; {this.state.showButton && images && images.length > 0 && (<span onClick={() => this.setState({ showMessage: !this.state.showMessage })} className="showMore pb-3 float-left text-decoration-underline cursor-pointer" ><img src={ImageIcon}/></span>)}
                    </span>
                </div>
                <ul>
                    <li>
                        <span className="fs-5 fw-bold">Hard skills:</span>{" "}
                        <span className="fs-5">{job.hardSkills}</span>
                    </li>
                    <li>
                        <span className="fs-5 fw-bold">Soft skills:</span>{" "}
                        <span className="fs-5">{job.softSkills}</span>
                    </li>
                    {projects.length > 0 &&
                        <li>
                            <span className="fs-5 fw-bold">Projects:</span> <br />
                            {projects.map((el) => (
                                <span className="fs-5" key={el.id}>
                                    <img src={TerminalIcon} />
                                    <span>Team size: {el.teamSize}</span> | {el.data}
                                    <br />
                                </span>
                            ))}
                        </li>
                    }
                </ul>
                <div>
                    <CSSTransition
                        in={this.state.showMessage}
                        timeout={300}
                        classNames="image-box"
                        unmountOnExit
                        onEnter={() => this.setState({ showMessage: true })}
                        onExited={() => this.setState({ showMessage: false })}
                    >
                        <div className="image-box p-3">
                            <div>
                                <Carousel carouselId={carouselId} carouselIdTarget={carouselIdTarget} images={images}></Carousel>
                            </div>
                        </div>
                    </CSSTransition>
                </div>
            </div >
        );
    }
}

export default JobItem;
