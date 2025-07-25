import { CloudArrowUpIcon, CogIcon, LockClosedIcon, MapPinIcon, ServerIcon } from '@heroicons/react/20/solid'
import HorizontalCard from './HorizontalCard'
import { CodeBracketIcon, CpuChipIcon, GlobeAltIcon, MapIcon } from '@heroicons/react/24/outline'

export default function Content() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            {/* <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Courses By Experts</h1> */}
                            <p className="text-xl leading-8 text-gray-700 font-bold">
                                Online Courses on latest Technologies
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <HorizontalCard />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <ul role="list" className="space-y-4 text-gray-600">
                                <li className="flex gap-x-3">
                                    <CpuChipIcon className="mt-1 h-5 w-5 flex-none text-blue-600 font-bold" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Artificial Intelligence: </strong>
                                        Artificial Intelligence (AI) is the simulation of human intelligence by machines, enabling them to perform tasks like learning, reasoning, problem-solving, and decision-making.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <CodeBracketIcon className="mt-1 h-5 w-5 flex-none text-blue-600 font-bold" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Machine Learning: </strong>
                                        Machine Learning (ML) is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <GlobeAltIcon className="mt-1 h-5 w-5 flex-none text-blue-600 font-bold" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Environment: </strong>
                                        Environment Studies is the interdisciplinary field focused on understanding and addressing the complex interactions between humans and the natural environment.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <MapIcon className="mt-1 h-5 w-5 flex-none text-blue-600 font-bold" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">RS: </strong>
                                        Remote Sensing (RS) is the technique of acquiring information about the Earth surface from a distance, typically using satellites or aircraft to gather data.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <MapPinIcon className="mt-1 h-5 w-5 flex-none text-blue-600 font-bold" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">GIS: </strong>
                                        Geographic Information Systems (GIS) is a framework for gathering, managing, and analyzing spatial and geographic data, providing insights through maps and visualizations.
                                    </span>
                                </li>
                            </ul>
                            {/* <p className="mt-8">

                            </p>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Consultant</h2>
                            <p className="mt-6">
                                Provide us with the data you need to work on
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
