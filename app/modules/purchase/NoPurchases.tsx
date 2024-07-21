import React from 'react'
import { useRouter } from 'next/router';

const NoPurchases = () => {
    const router = useRouter();

    const navigate = () => {
        router.push('/course/ai');
    };
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-white dark:bg-white mt-40">
                <div className="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-black">No Purchase yet</h1>
                    <p className="font-light text-black md:text-lg xl:text-xl dark:text-black">Start your journey get your first course now.</p>
                    <button onClick={navigate} type="button" className="mt-10 text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Start Now
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default NoPurchases