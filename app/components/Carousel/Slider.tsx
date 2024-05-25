// components/Slider.tsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Carousel: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings}>
            <div className='flex justify-center align-center'>
                <Image src="/background_sakmap1.png" alt="sakmap aboutus page" width={300} height={300} />
            </div>
            <div>
                <Image src="/background_sakmap1.png" alt="sakmap aboutus page" width={300} height={300} />
            </div>
            <div>
                <Image src="/background_sakmap1.png" alt="sakmap aboutus page" width={300} height={300} />
            </div>
        </Slider>
    );
};

export default Carousel;
