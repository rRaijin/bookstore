import { Component } from "react";
class ChildrenInputComponent extends Component {
    handleChildrenInput = (e) => {
        const value = e.target.value;
        console.log('Children:  ',value)
        this.props.InputChange(value)
    }
    render() {
        return(
            <input type='text' onChange={this.handleChildrenInput}/>          
        )
    }
}
export default ChildrenInputComponent;