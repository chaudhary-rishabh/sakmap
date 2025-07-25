import Image from "next/image"

const posts = [
    {
        id: 1,
        title: 'Phd in physics',
        href: '#',
        description:
            'We provide learning with latest technologies and latest trends followed by all organizations.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Abhishek sharma',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                '/sakmapFounder2.jpeg',
        },
    },
    {
        id: 2,
        title: 'Phd in Science',
        href: '#',
        description:
            'We at sakmap aim to deliver the best learning experience with our courses and consultant service to various sectors with quick response',
        datetime: '2020-03-16',
        author: {
            name: 'Shital Sharma',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                '/sakmapFounder1.jpeg',
        },
    },
    {
        id: 3,
        title: 'PhD in Botany',
        href: '#',
        description:
            'Our Aim is to provide easy & affordable access of various new technologies to students and working professional',
        datetime: '2020-03-16',
        author: {
            name: 'Agardeep ',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                '/sakmapFounder3.jpeg',
        },
    },
    // More posts...
]

export default function Blogs() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What our experts say</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your skills with our expert learnings.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-gray-500">
                                    {post.date}
                                </time>
                                <a
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                </a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <Image src={post.author.imageUrl} alt="Sakmap founders words" className="h-10 w-10 rounded-full bg-gray-50" width={100} height={100} />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <a href={post.author.href}>
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        </a>
                                    </p>
                                    <p className="text-gray-600">{post.author.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
