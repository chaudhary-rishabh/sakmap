import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import TestimonialComponent from '../TestimonialComponent'; // Adjust the import path

const testimonials = [
    {
        image: '/sakmapTeacher1.jpeg',
        name: 'John Doe',
        content: 'This is an amazing product! I love using it every day.',
    },
    {
        image: '/sakmapTeacher1.jpeg',
        name: 'Jane Smith',
        content: 'Highly recommend this to everyone. It has changed my life!',
    },
    {
        image: '/sakmapTeacher1.jpeg',
        name: 'Sam Wilson',
        content: 'A must-have for anyone looking to improve their workflow.',
    },
];

const CustomCarousel: React.FC = () => {
    const [slidesToShow, setSlidesToShow] = React.useState(2);

    React.useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.innerWidth < 768) {
                setSlidesToShow(1);
            } else {
                setSlidesToShow(2);
            }
        };

        window.addEventListener('resize', updateSlidesToShow);

        // Initial check
        updateSlidesToShow();

        return () => {
            window.removeEventListener('resize', updateSlidesToShow);
        };
    }, []);

    return (
        <div className="carousel-container flex align-center fixed justify-start">
            <Carousel
                show={slidesToShow}
                slide={1}
                swiping={true}
                leftArrow={
                    <button className="arrow-button left-arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                }
                rightArrow={
                    <button className="arrow-button right-arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                }
            >
                {testimonials.map((testimonial, index) => (
                    <TestimonialComponent
                        key={index}
                        image={testimonial.image}
                        name={testimonial.name}
                        content={testimonial.content}
                    />
                ))}
            </Carousel>
        </div>
    );
};

export default CustomCarousel;
