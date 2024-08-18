import React from 'react';
import Image from 'next/image';
import { Purchase } from '../../../types';
import Link from 'next/link';

interface PurchasesCardProps {
    purchases: Purchase[];
}

const PurchasesCard: React.FC<PurchasesCardProps> = ({ purchases }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-white mt-20">
                <div className="py-2 px-4 mx-auto max-w-screen-xl lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center mb-6">
                        <h2 className="text-2xl tracking-tight font-extrabold text-black">Purchases</h2>
                    </div>
                    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg">
                        <Image className="w-full" width={500} height={500} src="/course_ai3.jpeg" alt="sakmap course ai" />
                        <div className="px-6">
                            <div className="font-bold text-xl mb-2">Artificial Intelligence</div>
                            <p className="text-gray-700 text-base">
                                Artificial Intelligence Course
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <Link href={""} type="button" className="text-white bg-blue-700 rounded-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Start Now
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    {/* <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        {purchases.map((purchase, index) => (
                            <div key={index} className="items-center bg-white rounded-lg shadow sm:flex border border-gray-200">
                                <a href="#">
                                    <Image
                                        className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                                        src={purchase.image_url}
                                        alt={`${purchase.course_name} Avatar`}
                                        width={150}
                                        height={150}
                                    />
                                </a>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold tracking-tight text-black">
                                        <a href="#">{purchase.course_name}</a>
                                    </h3>
                                    <span className="text-black">{purchase.duration}</span>
                                    <p className="mt-3 mb-4 font-light text-black">{purchase.description}</p>
                                </div>
                            </div>
                        ))}
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default PurchasesCard;
