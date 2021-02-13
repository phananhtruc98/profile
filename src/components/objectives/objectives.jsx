import React, { Component } from "react";
import "../../_custom.scss";
import ObjectiveItem from "./objective-item";
const objectives = [
    {
        id: 1,
        data: "Want to challenge myself to work with new technologies. Sharpen technical and soft skills",
    },
    {
        id: 2,
        data: "Work for an organization that provides me the opportunity to apply my knowledge while having the scope to develop myself",
    },
];
class Objectives extends Component {
    render() {
        return objectives.map((objectiveItem) => (
            <ObjectiveItem
                key={objectiveItem.id}
                data={objectiveItem.data}
            ></ObjectiveItem>
        ));
    }
}

export default Objectives;
