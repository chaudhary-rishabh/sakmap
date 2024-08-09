import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductModule = () => {

    const products = [
        {
            developer_name: 'Vikas Sharma',
            product_name: 'Excel Auto Reporting',
            product_description: 'Fetches and data and makes graphs within seconds',
            product_img: '/sakmap_products3.png',
        },
        {
            developer_name: 'Rishabh Chaudhary',
            product_name: 'Excel Auto Reporting',
            product_description: 'Fetches and data and makes graphs within seconds',
            product_img: '/sakmap_product1.png',
        },
        {
            developer_name: 'Agardeep Sharma',
            product_name: 'Excel Auto Reporting',
            product_description: 'Fetches and data and makes graphs within seconds',
            product_img: '/sakmap_products3.png',
        },
        {
            developer_name: 'John Doe',
            product_name: 'Excel Auto Reporting',
            product_description: 'Fetches and data and makes graphs within seconds',
            product_img: '/sakmap_product1.png',
        },
    ]

    return (
        <>
            <section className="bg-white dark:bg-gray-50">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center mt-10 lg:mb-16">
                        <p className="text-gray-500 mt-16 mb-8 dark:text-gray-900 font-bold">Explore the whole collection of Products by SAKMAP Students web, mobile with Artificial Intelligence and Machine Learning</p>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 sm:grid-cols-1">
                        {products.map((product, index) => (
                            <div key={index} className="bg-gray-50 p-5 rounded-lg shadow-2xl flex flex-col xl:flex-row dark:bg-white dark:border-white">
                                <div className="flex-shrink-0">
                                    <Image width={200} height={200} className="w-full h-full rounded-t-lg sm:rounded-none sm:rounded-l-lg" src={product.product_img} alt='product one sakmap' />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold tracking-tight text-black dark:text-black">
                                        <a href="#">{product.product_name}</a>
                                    </h3>
                                    <span className="text-gray-500 dark:text-gray-400">{product.developer_name}</span>
                                    <p className="mt-3 mb-4 font-light text-gray-800 dark:text-gray-900">{product.product_description}</p>
                                    <Link href={`/products/${product.product_name}`} type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Get now</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductModule
