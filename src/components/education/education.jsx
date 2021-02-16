import React, { Component } from "react";
import "../../_custom.scss";

class Education extends Component {
    render() {
        return (
            <div>
                <div className="float-none">
                    <div className="lh-1 mb-1">
                        <span className="fs-5 fw-bold text-uppercase">Sai Gon University</span> &nbsp;
                        <span className="fs-14">2016 - 2020</span>&nbsp;<br/>
                        <span className="fs-5 fw-bold">The Degree of Engineer</span> 
                    </div>
                </div>
                <div className="fs-5">
                    Have basic knowledge of programming C# .NET Core, Angular,
                    SQL Server
                </div>
                <div className="fs-5">Projects:
                    <ul>
                        <li>Website E-commerce C2C (using ASP.NET Webform, Bootstrap, LinQ, Entity Framework)</li>
                        <li>Management Library (using Winform)</li>
                        <li>Some simple mobile apps (Android)</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Education;
