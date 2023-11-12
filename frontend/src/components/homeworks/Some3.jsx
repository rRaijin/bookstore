import { Component } from "react";

class MyComponentSome3 extends Component {
    constructor() {
        super();
        this.state = {
            animal: null
        }

    }
    some3 = () => {
        // console.log('st: ', this);
        this.setState({
            animal: 'cat'
        });
    }

    render() {
        console.log('this.state: ', this.state)
        return (
            <button onClick={this.some3}>
                    some3
                </button>
        )
    }
}

export default MyComponentSome3;
