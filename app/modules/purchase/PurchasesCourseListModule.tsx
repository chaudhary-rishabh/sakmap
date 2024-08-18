import Image from "next/image"

const people = [
    {
        name: 'Introduction to Artificial Intelligence',
        time: '10-Minute',
        imageUrl:
            '/sakmapPlaybutton.png',
    },
    {
        name: 'Artificial Intelligence',
        time: '30-Minute',
        imageUrl:
            '/sakmapPlaybutton.png',
    },
    {
        name: 'Artificial Intelligence',
        time: '25-Minute',
        imageUrl:
            '/sakmapPlaybutton.png',
    },
    {
        name: 'Artificial Intelligence',
        time: '30-Minute',
        imageUrl:
            '/sakmapPlaybutton.png',
    },
]

export default function PurchasesCourseListModule() {
    return (
        <div className="py-24 px-16">
            <ul role="list" className="divide-y divide-gray-100">
                {people.map((person) => (
                    <li key={person.time} className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <Image width={500} height={500} alt="sakmap course list " src={person.imageUrl} className="h-24 w-24 flex-none rounded-full bg-white" />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-800">{person.time}</p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
