import React from 'react';
import Testimonials from './Testimonials';

const TestimonialHome: React.FC = () => {
    const testimonials = [
        {
            name: "Alice Johnson",
            title: "Product Manager at Innovatech",
            text: "Absolutely fantastic! The user experience is exceptional.",
            image: "/sakmaplogo.png",
        },
        {
            name: "Alice Johnson",
            title: "Product Manager at Innovatech",
            text: "Absolutely fantastic! The user experience is exceptional.",
            image: "/sakmaplogo.png",
        },
        {
            name: "Alice Johnson",
            title: "Product Manager at Innovatech",
            text: "Absolutely fantastic! The user experience is exceptional.",
            image: "/sakmaplogo.png",
        },
        {
            name: "Alice Johnson",
            title: "Product Manager at Innovatech",
            text: "Absolutely fantastic! The user experience is exceptional.",
            image: "/sakmaplogo.png",
        },
        {
            name: "Alice Johnson",
            title: "Product Manager at Innovatech",
            text: "Absolutely fantastic! The user experience is exceptional.",
            image: "/sakmaplogo.png",
        },
        {
            name: "Alice Johnson",
            title: "Product Manager at Innovatech",
            text: "Absolutely fantastic! The user experience is exceptional.",
            image: "/sakmaplogo.png",
        },
        {
            name: "Alice Johnson",
            title: "Product Manager at Innovatech",
            text: "Absolutely fantastic! The user experience is exceptional.",
            image: "/sakmaplogo.png",
        },
        // Add more testimonials as needed
    ];

    return (
        <div className="min-h-screen bg-gray-10 flex flex-col items-center justify-center py-22">
            <h1 className="text-4xl font-bold mb-8">Testimonials</h1>
            <div className="w-full overflow-auto custom-scrollbar">
                <div className="flex space-x-4 px-4">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex-shrink-0 w-80">
                            <Testimonials
                                name={testimonial.name}
                                title={testimonial.title}
                                text={testimonial.text}
                                image={testimonial.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialHome;
