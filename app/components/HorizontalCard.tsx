import Image from 'next/image'
import React from 'react'


const HorizontalCard = () => {
    return (
        <div className='flex justify-center items-center my-10'>
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-white dark:bg-white dark:hover:bg-white">
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <div className="min-w-0 flex-auto">
                        <Image className="" src="/sakmap_home2.jpg" width={400} height={100} alt="tutors sakmap" />
                    </div>
                </div>
            </a>
        </div>
    )
}

export default HorizontalCard

