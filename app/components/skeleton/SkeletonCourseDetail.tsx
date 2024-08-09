import React from 'react'

const SkeletonCourseDetail = () => {
    return (
        <>
            <div className='flex items-center justify-center'>
                <div role="status" className="space-y-8 my-56  m-auto animate-pulse md:space-y-0 md:space-x-18 rtl:space-x-reverse md:flex md:items-center">
                    <div className="flex items-center justify-center w-full h-48 bg-gray-50 rounded sm:w-96 dark:bg-gray-300">
                        <svg className="w-30 h-30 text-gray-100 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>
                    <div role="status" className="space-y-2.5 md:my-24 my-24 animate-pulse max-w-lg">
                        <div className="flex items-center w-full">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-32"></div>
                            <div className="h-2.5 ms-2 bg-gray-50 rounded-full dark:bg-gray-300 w-24"></div>
                            <div className="h-2.5 ms-2 bg-gray-50 rounded-full dark:bg-gray-300 w-full"></div>
                        </div>
                        <div className="flex items-center w-full max-w-[480px]">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-full"></div>
                            <div className="h-2.5 ms-2 bg-gray-50 rounded-full dark:bg-gray-300 w-full"></div>
                            <div className="h-2.5 ms-2 bg-gray-50 rounded-full dark:bg-gray-300 w-24"></div>
                        </div>
                        <div className="flex items-center w-full max-w-[400px]">
                            <div className="h-2.5 bg-gray-50 rounded-full dark:bg-gray-300 w-full"></div>
                            <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-300 w-80"></div>
                            <div className="h-2.5 ms-2 bg-gray-50 rounded-full dark:bg-gray-300 w-full"></div>
                        </div>
                        <div className="flex items-center w-full max-w-[480px]">
                            <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-300 w-full"></div>
                            <div className="h-2.5 ms-2 bg-gray-50 rounded-full dark:bg-gray-300 w-full"></div>
                            <div className="h-2.5 ms-2 bg-gray-50 rounded-full dark:bg-gray-300 w-24"></div>
                        </div>
                        <div className="flex items-center w-full max-w-[440px]">
                            <div className="h-2.5 ms-2 bg-gray-50 rounded-full dark:bg-gray-300 w-32"></div>
                            <div className="h-2.5 ms-2 bg-gray-50 rounded-full dark:bg-gray-300 w-24"></div>
                            <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-300 w-full"></div>
                        </div>
                        <div className="flex items-center w-full max-w-[360px]">
                            <div className="h-2.5 ms-2 bg-gray-50 rounded-full dark:bg-gray-300 w-full"></div>
                            <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-300 w-80"></div>
                            <div className="h-2.5 ms-2 bg-gray-50 rounded-full dark:bg-gray-300 w-full"></div>
                        </div>
                        <span className="sr-only">Loading...</span>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>

        </>
    )
}

export default SkeletonCourseDetail