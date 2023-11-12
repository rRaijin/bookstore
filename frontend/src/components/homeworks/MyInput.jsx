import { Component } from "react";


class MyInputComponent extends Component {
    constructor() {
        super();
        this.state = {
            iphone: 11,
            position: 0
        }
        this.updatePosition = this.updatePosition.bind(this);
    }

    IphoneClick = () => {
        this.setState({
            iphone: 12
        })
    }

    updatePosition() {
        this.setState({
            position: this.state.position + 1
        })
    }

    render() {
        console.log('this.state: ', this.state)
        return (
            // <button onClick={this.IphoneClick}>
            //     Iphone 
            // </button>
            <button onClick={this.updatePosition}>
                Increase
            </button>
        )
    }
}

export default MyInputComponent;
