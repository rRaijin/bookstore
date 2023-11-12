import { useState } from 'react';

function TextAdd() {
    const [textList, setTextList] = useState([]);
    const [inputText, setInputText] = useState('');

    const handleClick = () => {
        setTextList([textList, inputText]);
        // setTextList([['a', 'b'], 'c'])
        setInputText('');
    };
  console.log('t: ', textList)
  return (
    <div>
        <input
            type="text"
            value={inputText}
            onChange={(x) => setInputText(x.target.value)}/>
        <button onClick={handleClick}>
            Добавить
        </button>
        <div>
            {textList.map((text, i) => (
            <p key={i}>{text}</p>
            ))}
        </div>
    </div>
  );
}

export default TextAdd;
