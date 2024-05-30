import Image from "next/image"
import Link from "next/link"

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
        id: 1,
        name: 'Artificial Intelligence Basics',
        href: '/course-details/ai',
        price: '₹480',
        imageSrc: '/course_ml1.jpeg',
        imageAlt: 'Artificial Intelligence Advanced 1 Course beginner',
    },
    {
        id: 2,
        name: 'Artificial Intelligence Intermediate',
        href: '/course-details/ai',
        price: '₹499',
        imageSrc: '/course_ai2.jpeg',
        imageAlt: 'Artificial Intelligence basics 1 Course Advanced',
    },
    {
        id: 3,
        name: 'Artificial Intelligence Advanced',
        href: '/course-details/ai',
        price: '499',
        imageSrc: '/course_rs1.jpeg',
        imageAlt: 'Artificial Intelligence basics 2 Course Intermediate',
    },
    {
        id: 4,
        name: 'Artificial Intelligence Advanced',
        href: '/course-details/ai',
        price: '499',
        imageSrc: '/course_ai4.jpeg',
        imageAlt: 'Artificial Intelligence basics 1 Course beginner',
    },
    {
        id: 5,
        name: 'Artificial Intelligence Basics',
        href: '/course-details/ai',
        price: '₹480',
        imageSrc: '/course_ml3.jpeg',
        imageAlt: 'Artificial Intelligence Advanced 1 Course beginner',
    },
    {
        id: 6,
        name: 'Artificial Intelligence Intermediate',
        href: '/course-details/ai',
        price: '₹499',
        imageSrc: '/course_ai2.jpeg',
        imageAlt: 'Artificial Intelligence basics 1 Course Advanced',
    },
    {
        id: 7,
        name: 'Artificial Intelligence Advanced',
        href: '/course-details/ai',
        price: '499',
        imageSrc: '/course_ai3.jpeg',
        imageAlt: 'Artificial Intelligence basics 2 Course Intermediate',
    },
    {
        id: 8,
        name: 'Artificial Intelligence Advanced',
        href: '/course-details/ai',
        price: '499',
        imageSrc: '/course_ml3.jpeg',
        imageAlt: 'Artificial Intelligence basics 1 Course beginner',
    },
]

export default function CourseListAI() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <Link key={product.id} href={product.href} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <Image
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    width={100}
                                    height={100}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
