import React from 'react';
import Image from 'next/image';
import { Purchase } from '../../../types';

interface PurchasesCardProps {
    purchases: Purchase[];
}

const PurchasesCard: React.FC<PurchasesCardProps> = ({ purchases }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-white mt-20">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">Your Courses</h2>
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
