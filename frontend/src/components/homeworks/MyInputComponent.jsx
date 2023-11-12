import React, { Component } from 'react';

class InputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const newValue = event.target.value;
        this.setState({ inputValue: newValue });
        console.log('Input value:', newValue);
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={(event) => this.handleChange(event)}/>
            </div>
        );
    }
}

export default InputComponent;