import Image from 'next/image';
import React from 'react';

interface TestimonialProps {
    name: string;
    title: string;
    text: string;
    image: string;
}

const Testimonials: React.FC<TestimonialProps> = ({ name, title, text, image }) => {
    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="flex items-center">
                <Image
                    className="w-16 h-16 rounded-full mr-4"
                    src={image}
                    alt={`Picture of ${name}`}
                    width={100}
                    height={100}
                />
                <div>
                    <h3 className="text-xl font-bold">{name}</h3>
                    <p className="text-gray-600">{title}</p>
                </div>
            </div>
            <p className="mt-4 text-gray-700">{text}</p>
        </div>
    );
};

export default Testimonials;
