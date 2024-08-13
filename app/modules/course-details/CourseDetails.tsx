import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAuth } from "../../../context/AuthContext"
import VideoPlayer from '@/app/components/VideoPlayer';
import Payment from '@/app/components/Payment';
import SkeletonProductDesc from '@/app/components/skeleton/SkeletonProductDesc';
import SkeletonCourseDetail from '@/app/components/skeleton/SkeletonCourseDetail';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Course {
    category_name: string;
    course_name: string;
    course_description: string;
    syllabus: string;
    maping?: string[];
    course_price: string;
    course_duration: string;
    course_thumbnail_url: string;
    video_url?: any;
}

export default function CourseDetails() {
    const [course, setCourse] = useState<Course | null>(null);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const { courseName } = router.query;
    const [loading, setLoading] = useState<boolean>(true);
    const { user } = useAuth();

    useEffect(() => {
        async function fetchCourseDetails() {
            try {
                const response = await fetch('/api/courses/getAllCourseDetails');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const formattedCourseName = formatCategoryFromUrl(courseName as string);
                const foundCourse = data.find((category: any) => category.course_name === formattedCourseName);
                console.log(foundCourse, "foundCourse");
                if (foundCourse) {
                    setCourse(foundCourse);
                    setLoading(false);
                } else {
                    throw new Error('Course not found');
                }
            } catch (error: any) {
                setError(error.message);
                setLoading(false);
            }
        }

        if (courseName) {
            fetchCourseDetails();
        }
    }, [courseName]);

    function formatCategoryFromUrl(urlSegment: string): string {

        const decoded = urlSegment.replace(/\+/g, ' ');

        const parts = decoded.split(' ');

        const formattedParts = parts.map((part) => {
            return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
        });

        const formatted = formattedParts.join(' ');

        return formatted;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    if (loading) {
        return <><SkeletonCourseDetail /></>;
    }
    if (loading) {

    }
    if (!course) {
        return <><SkeletonCourseDetail /></>;
    }

    return (
        <>
            <div className="bg-white">
                <div className="pt-6 mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
                    {/* Image and Video container */}
                    <ResponsiveCarousel
                        showArrows={true}
                        showStatus={true}
                        showIndicators={true}
                        infiniteLoop
                        useKeyboardArrows
                        autoPlay
                        interval={3000}
                        swipeable={false} // Disable swiping if needed
                    >
                        {/* Image Slide */}
                        <div className="relative m-auto mt-20 max-w-[98%] sm:max-w-[40%]">
                            <div className="max-w-sm m-auto rounded-3xl mb-6 overflow-hidden shadow-2xl">
                                <Image
                                    src={course.course_thumbnail_url}
                                    alt={course.course_name}
                                    width={500}
                                    height={500}
                                    className="object-cover rounded-2xl shadow-xl shadow-gray-500"
                                />
                            </div>
                        </div>

                        {/* Video Slide */}
                        <div className="relative m-auto mt-20 max-w-[98%] sm:max-w-[60%]">
                            <div className="max-w-sm m-auto rounded-3xl mb-6 overflow-hidden shadow-2xl">
                                <VideoPlayer
                                    videoId="ukzFI9rgwfU"
                                    thumbnailUrl="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
                                />
                            </div>
                        </div>
                    </ResponsiveCarousel>
                    {/* Course details */}
                    <div className="mt-6">
                        <div className="mt-6 bg-blue-600 p-4 rounded-2xl">
                            <p className="text-lg font-bold text-gray-50">{course.course_name}</p>
                        </div>

                        <div className="mt-6">
                            <p className="text-xl font-semibold text-gray-900">Price: ₹{course.course_price}</p>
                            <p className="text-xl text-gray-900 font-semibold">Duration: {course.course_duration} Minutes</p>
                        </div>

                        <p className="mt-2 text-gray-900 font-bold">Description:</p>
                        <p className="mt-2 text-gray-600">{course.course_description}</p>
                        <p className="mt-2 text-gray-900 font-bold">Syllabus:</p>
                        <p className="mt-2 text-gray-600">{course.syllabus}</p>

                        <div className="mt-6">
                            <Payment amountToPay={course.course_price} message='Buy Now'>
                            </Payment>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
