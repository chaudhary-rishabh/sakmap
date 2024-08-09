import Button from '@/app/components/Button'
import CourseCard from '@/app/components/CourseCard'
import SkeletonCourseList from '@/app/components/skeleton/SkeletonCourseList';
import { useEffect, useState } from "react";

const CourseCategory = () => {
    const [categories, setCategories] = useState([]);
    const [topThreeCourses, setTopThreeCourses] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch('/api/courses/getAllCourseCategories');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCategories(data);
                const filteredData = data.slice(0, 3);
                setTopThreeCourses(filteredData);
                setLoading(false);
            } catch (error: any) {
                setError(error.message);
                setLoading(false);
            }
        }

        fetchCategories();
    }, []);



    if (loading) {
        return <><SkeletonCourseList /></>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className="flex flex-col items-center space-y-5 sm:flex-row sm:justify-center sm:items-center sm:space-y-0 sm:space-x-5">
                {topThreeCourses.map((category: any) => {
                    return (
                        <>
                            <CourseCard courseName={category.course_name} coursePrice={`₹${category.price}`} courseImage={category.thumbnail_url} href={"courses/all-courses/"} />
                        </>
                    )
                })}
            </div>
            <div className='flex justify-center items-center my-2'>
                <Button buttonName="View All Course" />
            </div>
        </>
    )
}

export default CourseCategory