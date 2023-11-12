import { Component } from 'react';

import { MY_FONT_SIZE } from '../../constants';

class AnyTextComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        inputText: '',
        textColor: 'black',
        fontSize: MY_FONT_SIZE,
        displayedTexts: []
    };
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this)
  }

  handleInputChange (event) {
    this.setState({ inputText: event.target.value });
  }

  handleColorChange (event)  {
    this.setState({ textColor: event.target.value });
  }

  handleFontSizeChange (event) {
    this.setState({ fontSize: event.target.value });
  }

  handleButtonClick () {
      const { inputText, textColor, fontSize, displayedTexts } = this.state;
      const textItem = {
          color: textColor,
          inputText,
          fontSize: fontSize + 'px'
      }
      this.setState({
          displayedTexts: [...displayedTexts, textItem],
          inputText: '',
          fontSize: MY_FONT_SIZE,
          textColor: 'black'
      });
  }

  render() {
    const { inputText, textColor, fontSize, displayedTexts } = this.state;
    console.log('displayedText: ', displayedTexts)

    return (
      <div>
          <input type="text" value={inputText} onChange={this.handleInputChange} />
          <select value={textColor} onChange={this.handleColorChange}>
            <option value="black">Черный</option>
            <option value="red">Красный</option>
            <option value="blue">Синий</option>
            <option value="green">Зеленый</option>
          </select>
          <input type="number" value={fontSize} min="0" max="100" onChange={this.handleFontSizeChange} />
          <button onClick={this.handleButtonClick}>Add Text</button>

      <div>
        {displayedTexts.map((text, i) => (
          <div key={`my_some_test_${i}`}>
            <p style={{ color: text.color, fontSize: text.fontSize }}>
                {text.inputText}
            </p>
          </div>
        ))}
      </div>
      </div>
    );
  }
}



export default AnyTextComponent;
