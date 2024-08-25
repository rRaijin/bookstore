import { useState } from 'react';


const Chat = () => { 
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputEnabled, setInputEnabled] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [optionsVisible, setOptionsVisible] = useState(true);

    const optionTexts = {
        1: 'Сайт медлено работает',
        2: 'Наличие Книг',
        3: 'Написать нам сообщение'
    };

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    const handleOptionSelect = (option) => {
        const newMessages = [...messages, { sender: 'user', text: optionTexts[option] }];

        if (option === 1) {
            newMessages.push({ sender: 'bot', text: 'Попробуйте перезаргрузить страницу или сменить сеть.' });
        } else if (option === 2) {
            newMessages.push({ sender: 'bot', text: 'У нас присуцтвуют в наличие все книги кроме "Остров Сокровищ' });
        } else if (option === 3) {
            setInputEnabled(true);
            newMessages.push({ sender: 'bot', text: 'Теперь вы можете написать своё сообщение.' });
        }

        setMessages(newMessages);
        setOptionsVisible(false);
    };

    const handleSendMessage = () => {
        if (userInput.trim() === "") return;

        const newMessages = [...messages, { sender: 'user', text: userInput }];
        setMessages(newMessages);
        setUserInput(""); 
    };

    return (
        <div>
            <button onClick={toggleChat} className="chat-toggle-button">
                Открыть чат
            </button>

            {isChatOpen && (
                <div className="chat-container">
                    <div className="chat-window">
                        {messages.map((msg, index) => (
                            <div key={index} className={`chat-message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    {optionsVisible && (
                        <div className="options-container">
                            <button onClick={() => handleOptionSelect(1)} className="option-button">Сайт медлено работает</button>
                            <button onClick={() => handleOptionSelect(2)} className="option-button mar-l-5px">Наличие Книг</button>
                            <button onClick={() => handleOptionSelect(3)} className="option-button mar-l-5px">Написать нам сообщение</button>
                        </div>
                    )}

                    <div className="input-container">
                        <input 
                            type="text" 
                            placeholder="Напишите сообщение..." 
                            value={userInput} 
                            onChange={(e) => setUserInput(e.target.value)} 
                            disabled={!inputEnabled} 
                            className="chat-input"
                        />
                        <button onClick={handleSendMessage} className="send-button" disabled={!inputEnabled}>
                            &#x27A4;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chat;
