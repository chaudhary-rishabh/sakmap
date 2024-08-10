import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import Image from 'next/image';

interface CarouselComponentProps {
    images: { src: string; alt: string }[];
}

const Guidedby: React.FC<CarouselComponentProps> = ({ images }) => {
    return (
        <ResponsiveCarousel
            showArrows={true}
            showStatus={false}
            showIndicators={true}
            infiniteLoop
            useKeyboardArrows
            autoPlay
            interval={3000}
        >
            {images.map((image, index) => (
                <div key={index}>
                    <div className="relative m-auto mt-8 max-w-[98%] sm:max-w-[40%]">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            layout="responsive"
                            width={800}
                            height={600}
                            className="w-full h-auto rounded-3xl shadow-md bg-black"
                        />
                    </div>
                </div>
            ))}
        </ResponsiveCarousel>
    );
};

export default Guidedby;
