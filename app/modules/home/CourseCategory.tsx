import Button from '@/app/components/Button'
import CourseCard from '@/app/components/CourseCard'
import React from 'react'

const CourseCategory = () => {
    return (
        <>
            <div className="flex flex-col items-center space-y-5 sm:flex-row sm:justify-center sm:items-center sm:space-y-0 sm:space-x-5">
                <CourseCard courseName="Artificial Intelligence Beginners, 5 hours by xyz" coursePrice="₹499" />
                <CourseCard courseName="Artificial Intelligence Beginners, 5 hours by xyz" coursePrice="₹499" />
                <CourseCard courseName="Artificial Intelligence Beginners, 5 hours by xyz" coursePrice="₹499" />
            </div>
            <div className='flex justify-center items-center my-2'>
                <Button buttonName="View All Course" />
            </div>
        </>
    )
}

export default CourseCategory