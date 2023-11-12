import { Component } from "react";
import ChildBreadInput from "./ChildBreadInput";

class ParentBread extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadChildInput: false,
        };
    }
  
    handleTextChange = (text) => {
        if (text === 'хлеб') {
            this.setState({ breadChildInput: true });
        }
    }
  
    render() {
        return (
            <div>
            <ChildBreadInput
                onTextChange={this.handleTextChange}
                breadInput={this.state.breadChildInput}/>
            </div>
        );
    }
}
export default ParentBread;
