import { useState, useRef, useEffect } from "react";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1));
        };

        timeout.current = setTimeout(nextSlide, 5000);

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        }
    }, [current, length])

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(slides) || slides.length <= 0) return null;

    return (
        <section className="hero-section">
            <div className="hero-wrapper">
                {slides.map((slide, index) => {
                    return (
                        <div className="hero-slide" key={index}>
                            {index === current && (
                                <div className="hero-slider">
                                    <img className="hero-image" src={slide.image} alt={slide.alt} />
                                    <div className="hero-content">
                                        <h1>{slide.title}</h1>
                                        <p>{slide.subTitle}</p>
                                        {slide.capacity && <p>{slide.capacity}</p>}
                                        {slide.path && (slide.inscope ?
                                            <Link to={slide.path} className='button' style={{ maxWidth: "160px" }}>{slide.label}</Link> :
                                            <a href={slide.path} className='button' style={{ maxWidth: "160px" }} rel="noopener noreferrer" target="_blank">{slide.label}</a>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
                {slides.length > 1 &&
                    <div className="slider-buttons">
                        <IoArrowBack className="prev" onClick={prevSlide} />
                        <IoArrowForward className="next" onClick={nextSlide} />
                    </div>
                }
            </div>
        </section>
    );
}