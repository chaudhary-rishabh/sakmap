import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CourseListAI() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch('/api/courses/getAllCourseCategories');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const filteredData = data.filter((category: any) => category.category_name === "Artificial Intelligence");
                setCategories(filteredData);
            } catch (error: any) {
                setError(error.message);
            }
        }

        fetchCategories();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    const mergingName = (name: any) => {
        const routeName = name.replace(/\s+/g, '+').toLowerCase();
        const route = `/courses/artificial-intelligence/${routeName}`;
        return route;
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {categories.map((category: any) => (
                        <Link key={category.category_name} href={mergingName(category.course_name)} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <Image
                                    src={category.thumbnail_url}
                                    alt={category.category_name}
                                    width={100}
                                    height={100}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{category.course_name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{category.price}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
