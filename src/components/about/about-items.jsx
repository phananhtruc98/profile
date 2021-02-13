import React, { Component } from "react";
import "../../_custom.scss";
import AboutItem from "./about-item";
const items = [
    {
        id: 1,
        data: "Able to search and read English documents",
    },
    {
        id: 2,
        data: "A careful and patient person",
    },
    {
        id: 3,
        data: "On-time with work schedule",
    },
    {
        id: 4,
        data: "Self-learning and searching skills",
    },
    {
        id: 5,
        data: "Follow quickly standard coding of team",
    },
];
class AboutItems extends Component {
    render() {
        return items.map((item) => (
            <AboutItem key={item.id} data={item.data}></AboutItem>
        ));
    }
}

export default AboutItems;
