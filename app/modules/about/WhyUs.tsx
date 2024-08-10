import Image from 'next/image'
import React from 'react'

const WhyUs = () => {
    return (
        <>
            <section className="bg-gradient-to-r from-yellow-400 via-transparent to-white">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <Image width={500} height={500} className="w-3/4 hidden dark:block rounded-2xl" src="/whyusSakmap1.jpg" alt="whyus sakmap" />
                    <div className="mt-4 md:mt-0">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Lets create more tools and ideasthat brings us together.</h2>
                        <p className="mb-6 font-light text-gray-900 md:text-lg dark:text-gray-900">Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                        <p className="mb-6 font-light text-gray-900 md:text-lg dark:text-gray-900">Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                        <p className="mb-6 font-light text-gray-900 md:text-lg dark:text-gray-900">Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyUs