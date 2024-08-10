import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAuth } from "../../../context/AuthContext"
import VideoPlayer from '@/app/components/VideoPlayer';
import Payment from '@/app/components/Payment';
import SkeletonProductDesc from '@/app/components/skeleton/SkeletonProductDesc';
import SkeletonCourseDetail from '@/app/components/skeleton/SkeletonCourseDetail';

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
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Image */}
                        <div className="aspect-w-1 mt-20 aspect-h-1 sm:aspect-w-2 sm:aspect-h-1 lg:col-span-2">
                            <Image
                                src={course.course_thumbnail_url}
                                alt={course.course_name}
                                width={200}
                                height={400}
                                className="object-cover rounded-lg"
                            />
                        </div>
                        {/* Video */}
                        <div className="lg:col-span-1 lg:row-span-2">
                            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 overflow-hidden sm:overflow-hidden">
                                <div className='pt-16' style={{ paddingTop: '90%', position: 'relative', marginTop: '10px' }}>
                                    <iframe
                                        src="https://player.vimeo.com/video/987883027?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '180%',
                                            height: '160%',
                                            borderRadius: '10%',
                                            margin: "2%"
                                        }}
                                        title="6209573-uhd_4096_2160_25fps"
                                    ></iframe>
                                </div>
                            </div>

                        </div>
                        {/* <VideoPlayer videoId={"ukzFI9rgwfU"} thumbnailUrl="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg" /> */}
                    </div>
                    <hr></hr>
                    {/* Course details */}
                    <div className="mt-6">
                        <h1 className="text-3xl font-bold text-gray-900">{course.course_name}</h1>

                        <div className="mt-6">
                            <p className="text-xl font-semibold text-gray-900">Price: ₹{course.course_price}</p>
                            <p className="text-gray-600">Duration: {course.course_duration} Minutes</p>
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
