import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function HomeContainer() {
    // Define an array of image URLs
    const images = ["/sakmapTeacher1.jpeg", "/sakmapTeacher2.jpeg"];

    // State to keep track of the current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to update the current image index
    const updateImageIndex = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        // Set a timeout to change the image every 2 seconds
        const interval = setInterval(updateImageIndex, 3000);

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-50 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <svg
                        viewBox="0 0 1024 1024"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                        aria-hidden="true"
                    >
                        <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.9" />
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor="yellow" />
                                <stop offset={1} stopColor="yellow" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h3 className="text-3xl font-bold tracking-tight text-black sm:text-2xl">
                            Learn from best teachers
                            <br />
                            Courses guided by experts
                        </h3>
                        <p className="mt-6 text-lg leading-8 text-black">
                            Courses related to Artificial Intelligence, Machine Learning and more, taught by experts
                        </p>
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8">
                        {/* Render the image based on the current index */}
                        <Image
                            className="col-span-2 max-h-42 rounded-xl w-full object-contain lg:col-span-1"
                            src={images[currentImageIndex]}
                            alt="Transistor"
                            width={358}
                            height={248}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
