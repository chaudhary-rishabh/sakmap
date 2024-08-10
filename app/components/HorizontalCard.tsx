import Image from 'next/image'
import React from 'react'


const HorizontalCard = () => {
    return (
        <div className='flex justify-center items-center my-10'>
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-3xl max-w-xl shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-white dark:bg-white dark:hover:bg-white">
                <div className="flex flex-col justify-between rounded-3xl leading-normal">
                    <div className="min-w-0 flex-auto">
                        <Image className="rounded-3xl" src="https://i.imgur.com/f5ItfQP.jpeg" width={500} height={500} alt="tutors sakmap" />
                    </div>
                </div>
            </a>
        </div>
    )
}

export default HorizontalCard

