import Image from 'next/image';
import React from 'react';

interface TestimonialProps {
    image: string;
    name: string;
    content: string;
}

const TestimonialComponent: React.FC<TestimonialProps> = ({ image, name, content }) => {
    return (
        <div className="testimonial-card p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
                <Image src={image} alt={name} className="w-16 h-16 rounded-full" width={100} height={100} />
                <div className="text-lg font-semibold">{name}</div>
            </div>
            <p className="text-gray-700">{content}</p>
        </div>
    );
};

export default TestimonialComponent;
