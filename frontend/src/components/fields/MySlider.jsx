import React, { useState, useEffect } from 'react';

const images = [
    '/slides/slide_1.jpg',
    '/slides/slide_2.jpg',
    '/slides/slide_3.jpg',
    '/slides/slide_4.jpg',
    '/slides/slide_5.jpg',
    '/slides/slide_6.jpg',
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
  
      return () => clearTimeout(timer);
    }, [currentIndex]);
  

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slider">
            <button className="nav-button" onClick={prevSlide}>
                ❮
            </button>
            <img src={images[currentIndex]} alt="slide" className="slide-image" />
            <button className="nav-button" onClick={nextSlide}>
                ❯
            </button>
        </div>
    );
};

export default Slider;