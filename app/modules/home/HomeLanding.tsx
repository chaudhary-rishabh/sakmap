import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Define an array of image URLs for the carousel
const images = ["/sakmapStudent3.jpeg", "/sakmapStudent2.jpeg", "/sakmapStudent4.jpeg"];

export default function HomeLanding() {
    // State to keep track of the current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to update the current image index
    useEffect(() => {
        // Function to update the current image index
        const updateImageIndex = () => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        };

        // Set an interval to change the image every 2 seconds
        const interval = setInterval(updateImageIndex, 2000);

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ zIndex: "0" }} className="relative bg-white">
            {/* Yellow half circle on top left */}
            <div style={{ zIndex: "0" }} className="absolute top-0 left-0 w-60 h-60 bg-yellow-500 rounded-br-full"></div>
            {/* Blue half circle on bottom right */}
            <div style={{ zIndex: "0" }} className="absolute bottom-0 right-0 w-60 h-60 bg-blue-500 rounded-tl-full"></div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div style={{ zIndex: "10" }}>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Explore Creative Courses</h2>
                    <p className="mt-4 text-gray-500">
                        Choose over 1000+ courses on topics like Artificial Intelligence, Computer Science
                        That are high in demand.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        <div className="border-t border-gray-200 pt-4">
                            <Link href="/consulting/custom" type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Consult Us</Link>
                            <Link href="/courses/all-courses" type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 white:bg-gray-800 dark:text-black dark:border-gray-600 gray:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Explore Course</Link>
                        </div>
                    </dl>
                </div>
                <div className="flex justify-center items-center">
                    {/* Render the image based on the current index */}
                    <Image
                        src={images[currentImageIndex]}
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="rounded-3xl shadow-2xl bg-black z-50"
                        width={500}
                        height={600}
                    />
                </div>
            </div>
        </div>
    );
}
