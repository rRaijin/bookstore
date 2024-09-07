import { useState } from "react";


const RandomNumber = () => {
    const [rundomNumber, setRundomNumber] = useState(generateRundomNumber())
    const [guess, setGuess] = useState('')
    const [attempts, setAttempts] = useState(0);
    const [message, setMessage] = useState('');
    const [count, setCount] = useState(0)
    const [position, setPosition] = useState({top: 'null', left: 'null'})
    const [clicks, setClicks] = useState(0)

const plus1 = () => {
    setCount(count + 1)
}

const minus1 = () => {
    setCount(count - 1)
}

const resetCount = () => {
    setCount(0)
}

const countNumber = (e) => {
    setCount(e.target.value)
}

function generateRundomNumber(params) {
    return Math.floor(Math.random() * 100) + 1;
}

const guessNumber = (e) => {
    setGuess(e.target.value)
}

const randomPosition = () => {
    const top = Math.floor(Math.random() * 80) + '%'
    const left = Math.floor(Math.random() * 80) + '%'
    return {left,top}
}

const Clicks = () => {
    setPosition(randomPosition());
    setClicks(clicks + 1)
}

const handleGuess = () => {
    const UserGuess = parseInt(guess, 10)
    setAttempts(attempts + 1)

    if (UserGuess === rundomNumber) {
        setMessage(`Вы угадали! Число было ${rundomNumber}. Попыток: ${attempts + 1}`);
    } else if(UserGuess > rundomNumber) {
        setMessage('Меньше')
    } else if(UserGuess < rundomNumber) {
        setMessage('Больше')
    }
}

const resetGame = () => {
    setRundomNumber(generateRundomNumber());
    setGuess('');
    setMessage('');
    setAttempts(0);
  };

return (
    <div>
        <h1>
            Угадай число 
        </h1>
        <div>
            <input
                type="number"
                value={guess}
                onChange={guessNumber}
                placeholder="Введите ваше число"
            />
            <button onClick={handleGuess} className="">
                Угадать
            </button>
            <p>
                {message}
            </p>
            <button onClick={resetGame} className="">
                Начать заново
            </button>
            <div>
                <button onClick={plus1}>
                    плюс
                </button>
                <button onClick={minus1}>
                    минус
                </button>
                <button onClick={resetCount}>
                    сброс
                </button>
                <input type="number"
                    value={count} 
                    onChange={countNumber}
                />
            </div>
            <div>
                <button 
                    onClick={Clicks}
                    style={{
                        position: 'absolute',
                        top: position.top,
                        left: position.left,
                        transition: 'top 0.4s, left 0.4s',
                    }}            
                    >
                    Поймай меня
                </button>
            </div>
            
        </div>
    </div>
)
}
export default RandomNumber;