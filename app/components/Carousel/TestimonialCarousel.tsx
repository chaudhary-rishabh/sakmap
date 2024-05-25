import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testimonials = [
    { name: "John Doe", feedback: "This is an amazing product!" },
    { name: "Rose Smith", feedback: "I love the quality and the service." },
    { name: "Doe Smith", feedback: "I love the quality and the service." },
    { name: "Smith", feedback: "I love the quality and the service." },
    { name: "Sam Wilson", feedback: "Highly recommend this to everyone." }
];

const TestimonialCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // Adjust the speed of the automatic transition
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="">
            <Slider {...settings} className="slick-slider">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-12 bg-white margin1 rounded-lg shadow-2xl">
                        <p className="text-lg text-gray-700">{testimonial.feedback}</p>
                        <h3 className="mt-4 text-xl font-bold text-gray-900">{testimonial.name}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TestimonialCarousel;
