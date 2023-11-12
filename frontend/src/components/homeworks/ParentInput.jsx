import { Component } from "react";

import ChildrenInputComponent from "./ChildrenInput";


class ParentInputComponent extends Component {
    handleParentInput = (value) => {
        console.log('Parent:  ',value)
    }

    render() {
        return(
            <ChildrenInputComponent InputChange={this.handleParentInput}/>
        )
    }
}

export default ParentInputComponent;
