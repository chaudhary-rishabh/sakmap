import React from 'react'

const HeaderHome = ({ heading }: any) => {
    return (
        <div className='flex justify-center items-center my-2'>
            <h3 className='text-black bg-gray-200 focus:outline-none font-medium rounded-md text-lg px-5 py-2.5 text-center me-2 mb-2 dark:bg-gray-200  shadow-2xl'>{heading}</h3>
        </div>
    )
}

export default HeaderHome