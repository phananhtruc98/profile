import React, { Component } from "react";
import "../../_custom.scss";
import ChevronRight from "../../assets/images/icon/chevron-right.svg";
class JobItem extends React.Component {
    render() {
        var { job } = this.props; // job = this.props.job
        var { projects } = job; // project =job.projects

        return (
            <div className="border-2 border-bottom mb-3">
                <div className="lh-1 mb-1">
                    <span className="fs-5 fw-bold text-uppercase lh-1">
                        {job.companyName} &nbsp;
                    </span>
                    <span className="fs-14">
                        {job.fromDate} - {job.toDate}
                    </span>
                    <br />
                    <span className="fs-5 fw-bold">
                        {job.positionTitle} &nbsp;
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
                    { projects.length > 0 && 
                        <li>
                        <span className="fs-5 fw-bold">Projects:</span> <br />
                        {projects.map((el) => (
                            <span className="fs-5" key={el.id}>
                                <img src={ChevronRight} /> {el.data}
                                <br />
                            </span>
                        ))}
                    </li>
                    }
                </ul>
            </div>
        );
    }
}

export default JobItem;
