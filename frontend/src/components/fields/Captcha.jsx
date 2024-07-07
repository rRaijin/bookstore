import React, { useState, useEffect } from 'react';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = [2, 4, 6, 8];
const images = [
    { src: '/bg-pictures/cute-cat.jpg', isCat: true },
    { src: '/bg-pictures/honey.jpg', isCat: false },
    { src: '/bg-pictures/cute-cat.jpg', isCat: true },
    { src: '/bg-pictures/sausage.jpg', isCat: false },
    { src: '/bg-pictures/cute-cat.jpg', isCat: true },
    { src: '/bg-pictures/house.jpg', isCat: false },
    { src: '/bg-pictures/cute-cat.jpg', isCat: true },
    { src: '/bg-pictures/honey.jpg', isCat: false },
    { src: '/bg-pictures/cute-cat.jpg', isCat: true },
];

const Captcha = ({ onCaptchaComplete }) => {
    const [level, setLevel] = useState(1);
    const [selected, setSelected] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        setLevel(1);
        setSelected([]);
        setError('');
    }, []);

    const handleNumberClick = (number) => {
        setSelected((prev) =>
            prev.includes(number) ? prev.filter(n => n !== number) : [...prev, number]
        );
    };

    const handleImageClick = (index) => {
        setSelected((prev) =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    const handleSubmit = () => {
        if (level === 1) {
            const isCorrect = selected.sort().toString() === evenNumbers.sort().toString();
            if (isCorrect) {
                setLevel(2);
                setSelected([]);
                setError('');
            } else {
                setError('Пожалуйста выберите все четные числа.');
            }
        } else if (level === 2) {
            const isCorrect = selected.every(index => images[index].isCat) && selected.length === 5;
            if (isCorrect) {
                alert('Капча пройдена!');
                onCaptchaComplete(true); // Вызов функции при успешном прохождении капчи
            } else {
                setLevel(1); // Переход на первый уровень капчи при ошибке на втором уровне
                setSelected([]); // Очистка выбранных элементов
            }
        }
    };

    return (
        <div>
            {level === 1 ? (
                <div>
                    <h2>Выберите все четные числа</h2>
                    <div className="grid">
                        {numbers.map((number) => (
                            <div
                                key={`${number}`}
                                className={`square ${selected.includes(number) ? 'selected' : ''}`}
                                onClick={() => handleNumberClick(number)}
                            >
                                {number}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <h2>Выберите все изображения с котиком</h2>
                    <div className="grid">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`square ${selected.includes(index) ? 'selected' : ''}`}
                                onClick={() => handleImageClick(index)}
                            >
                                <img src={image.src} alt={`captcha-${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {error && <p className="error">{error}</p>}
            <button onClick={handleSubmit}>Сохранить</button>
        </div>
    );
};

export default Captcha;
