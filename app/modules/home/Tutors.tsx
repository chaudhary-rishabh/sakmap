import Image from "next/image"

const people = [
    {
        name: 'Leslie Alexander',
        role: 'PHD in SC',
        imageUrl:
            '/sakmapProfileFemale.png',
    },
    {
        name: 'Leslie Alexander',
        role: 'Assistant Professor',
        imageUrl:
            '/sakmapProfileMale.png',
    },
    {
        name: 'Leslie Alexander',
        role: 'PHD in CS',
        imageUrl:
            '/sakmapProfileMale.png',
    },
    {
        name: 'Leslie Alexander',
        role: 'ENV specialist',
        imageUrl:
            '/sakmapProfileMale.png',
    },
    {
        name: 'Leslie Alexander',
        role: 'Expert in AI',
        imageUrl:
            '/sakmapProfileFemale.png',
    },
    {
        name: 'Leslie Alexander',
        role: 'PHD in ML',
        imageUrl:
            '/sakmapProfileMale.png',
    },
    // More people...
]

export default function Tutors() {
    return (
        <div className="py-12 sm:py-12">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                        suspendisse.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <Image className="h-16 w-16 rounded-full" src={person.imageUrl} alt="our Tutors at Sakmap" width={100} height={100} />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
