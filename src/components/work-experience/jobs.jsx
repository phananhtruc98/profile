import React, { Component } from "react";
import "../../_custom.scss";
import JobItem from "./job-item";
import MeAndBoss from "../../assets/images/Me and Boss.jpg";
import Internship from "../../assets/images/Internship.jpg";
import TraineeAndTechlead from "../../assets/images/Trainee and Techlead.jpg";
import CarpTech from "../../assets/images/carptech01.png";
import CarpTechNoel from "../../assets/images/CarpTechNoel.jpg";
const jobs = [
    {
        id: 1,
        data: {
            companyName: "GROOVE TECHNOLOGY VIETNAM",
            positionTitle: "Software Engineer Intern",
            fromDate: "Jun 2019",
            toDate: "Aug 2019",
            hardSkills:
                "NET Core, Angular, Web API, SignalR, Repository Pattern",
            softSkills: "Teamwork, English, Communication, Scrum",
            projects: [
                {
                    id: 1,
                    teamSize: 6,
                    data:
                        "Web app chat project using SignalR, .NET Core 2.2, Angular 8",
                },
            ],
            images: [
                {
                    id: 1,
                    url: MeAndBoss
                },
                {
                    id: 2,
                    url: Internship
                },
                {
                    id: 3,
                    url: TraineeAndTechlead
                }
            ]
        },
    },
    {
        id: 2,
        data: {
            companyName: "GROOVE TECHNOLOGY VIETNAM",
            positionTitle: "Software Engineer Trainee",
            fromDate: "Aug 2019",
            toDate: "Dec 2019",
            hardSkills: ".NET Core, Angular, Web API, DDD Pattern",
            softSkills:
                " Teamwork, English, Communication, Scrum , Problem-Solving",
            projects: [
                {
                    id: 1,
                    teamSize: 4,
                    data:
                        "Performance Appraisal System project using .NET Core 3.0, Angular 8",
                },
                {
                    id: 2,
                    teamSize: 4,
                    data:
                        "Booking System project using .NET Core 2.2, Angular 8",
                },
            ],
        },
    },
    {
        id: 3,
        data: {
            companyName: "GROOVE TECHNOLOGY VIETNAM",
            positionTitle: "Demandware Developer Intern",
            fromDate: "Feb 2020",
            toDate: "Apr 2020",
            hardSkills: "Javascript fundamentals, SFCC Demandware",
            softSkills:
                "Self-learning, independent research , questioning skill",
            projects: [],
        },
    },
    {
        id: 4,
        data: {
            companyName: "CARP TECHNOLOGY CORP",
            positionTitle: "Software Engineer",
            fromDate: "May 2020",
            toDate: "Present",
            hardSkills: ".NET, Angularjs, Umbraco Cms",
            softSkills:
                "Self-learning, independent research, questioning skill, teamwork and problem-solving skill",
            projects: [
                {
                    id: 1,
                    teamSize: 6,
                    data:
                        "Insurrance project using .NET, Umbraco, AngularJs, Jquery",
                },
            ],
            images: [
                {
                    id: 1,
                    url: CarpTech
                },
                {
                    id: 2,
                    url: CarpTechNoel
                }
            ]
        },
    },
];
class Jobs extends Component {
    render() {
        return jobs.map((job) => (
            <JobItem key={job.id} job={job.data}></JobItem>
        ));
    }
}

export default Jobs;
