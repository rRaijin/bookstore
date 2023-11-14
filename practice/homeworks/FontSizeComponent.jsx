import { Component } from 'react';

class SizeChanges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: 20
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.setState({
          fontSize: this.state.fontSize  === 20 ? 16 : 20
      });
  }

  render() {
    const { fontSize } = this.state;

    return (
        <div style={{ fontSize: `${fontSize}px`, cursor: 'pointer' }} onClick={this.handleClick}>
            My homework 3
        </div>
    );
  }
}

export default SizeChanges;
