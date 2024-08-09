import Image from 'next/image';
import React from 'react';

const products = [
    {
        id: 1,
        title: "AI Excel Optimizer: Revolutionize Your Spreadsheet Experience",
        price: "₹2999",
        description1: "Intelligent Data Analysis Automatically analyze and interpret complex data sets Identify trends patterns and anomalies with precision Generate insightful reports and visualizations in seconds",
        description2: "Automated Optimization Optimize formulas and calculations for maximum efficiency AI-driven  suggestions for enhancing data structure and layout Reduce file size and improve performance with smart compression techniques",
        imgSrc: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg",
        imgSrcDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg",
    },
    // Add more products here
];

const ProductDescModule = () => {
    return (
        <section className="py-8 mt-20 bg-white md:py-16 dark:bg-white antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                {products.map((product) => (
                    <div key={product.id} className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                        <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                            <Image height={100} width={100} className="w-full dark:hidden" src={product.imgSrc} alt={product.title} />
                            <Image height={100} width={100} className="w-full hidden dark:block" src={product.imgSrcDark} alt={product.title} />
                        </div>

                        <div className="mt-6 sm:mt-8 lg:mt-0">
                            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-black">
                                {product.title}
                            </h1>
                            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-black">
                                    {product.price}
                                </p>
                            </div>

                            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                                <a
                                    href="#"
                                    title="Buy Now"
                                    className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-200 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-300 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    role="button"
                                >
                                    Buy Now
                                </a>
                            </div>

                            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                            <p className="mb-6 text-gray-700 dark:text-gray-700">
                                {product.description1}
                            </p>

                            <p className="text-gray-500 dark:text-gray-700">
                                {product.description2}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductDescModule;
