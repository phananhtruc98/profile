import React, { Component } from "react";
import "../../_custom.scss";
import JobItem from "./job-item";
import MeAndBoss from "../../assets/images/Me and Boss.jpg";
import Internship from "../../assets/images/Internship.jpg";
import TraineeAndTechlead from "../../assets/images/Trainee and Techlead.jpg";
import CarpTech from "../../assets/images/carptech01.png";
import CarpTechNoel from "../../assets/images/CarpTechNoel.jpg";
import Bosch01 from "../../assets/images/bosch01.jpg";
import Bosch02 from "../../assets/images/bosch02.jpg";
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
                    teamSize: "6",
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
                    teamSize: "4",
                    data:
                        "Performance Appraisal System project using .NET Core 3.0, Angular 8",
                },
                {
                    id: 2,
                    teamSize: "4",
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
            toDate: "August 2021",
            hardSkills: ".NET, Angularjs, Umbraco Cms",
            softSkills:
                "Self-learning, independent research, questioning skill, teamwork and problem-solving skill",
            projects: [
                {
                    id: 1,
                    teamSize: "6",
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
    {
        id: 5,
        data: {
            companyName: "Robert Bosch Engineering and Business Solutions Vietnam",
            positionTitle: "Software Engineer",
            fromDate: "August 2021",
            toDate: "Present",
            hardSkills: ".NET Framework · ElectronJs · Powershell · C# · Angular",
            softSkills:
                "Self-learning, independent research, questioning skill, teamwork and problem-solving skill",
            projects: [
                {
                    id: 1,
                    teamSize: "9+",
                    data:
                        "Internal project using .NET Framework · ElectronJs · Powershell · C# · Angular",
                },
            ],
            images: [
                {
                    id: 1,
                    url: Bosch01
                },
                {
                    id: 2,
                    url: Bosch02
                }
            ]
        },
    }
];
class Jobs extends Component {
    render() {
        return jobs.map((job) => (
            <JobItem key={job.id} job={job.data}></JobItem>
        ));
    }
}

export default Jobs;
