import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import Link from 'next/link';

interface CarouselComponentProps {
    images: { src: string; alt: string; name: string; desc: string; link: string }[];
}

const Guidedby: React.FC<CarouselComponentProps> = ({ images }) => {
    return (
        <>
            <ResponsiveCarousel
                showArrows={true}
                showStatus={true}
                showIndicators={true}
                infiniteLoop
                useKeyboardArrows
                autoPlay
                interval={3000}
                swipeable={false}
            >
                {images.map((image, index) => (
                    <div key={index}>
                        <div className="relative m-auto mt-8 max-w-[98%] sm:max-w-[40%]">
                            <div className="max-w-sm m-auto rounded-3xl mb-6 overflow-hidden shadow-2xl">
                                <Image className="w-full" src={image.src} width={500} height={500} alt={image.alt} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{image.name}</div>
                                    <p className="text-gray-700 text-base">
                                        {image.desc}
                                    </p>
                                </div>
                                <div className="px-6 mb-4 pb-2">
                                    <Link href={image.link} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                        Know More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </ResponsiveCarousel>
        </>
    );
};

export default Guidedby;
