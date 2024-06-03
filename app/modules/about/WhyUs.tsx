import Image from 'next/image'
import React from 'react'

const WhyUs = () => {
    return (
        <>
            <section className="bg-white dark:bg-white">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <Image width={50} height={50} className="w-3/4 hidden dark:block rounded-2xl" src="/whyusSakmap1.jpg" alt="whyus sakmap" />
                    <div className="mt-4 md:mt-0">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Lets create more tools and ideas that brings us together.</h2>
                        <p className="mb-6 font-light text-gray-900 md:text-lg dark:text-gray-900">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
                        <p className="mb-6 font-light text-gray-900 md:text-lg dark:text-gray-900">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
                        <p className="mb-6 font-light text-gray-900 md:text-lg dark:text-gray-900">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyUs