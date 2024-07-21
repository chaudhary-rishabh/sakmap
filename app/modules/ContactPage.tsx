import { useState } from 'react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { supabase } from '../../supabase/supabaseClient'

function classNames(classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    })

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const { firstName, lastName, email, phoneNumber, message } = formData

        const { error } = await supabase
            .from('sak_contact_us')
            .insert([
                { first_name: firstName, last_name: lastName, email_id: email, phone_number: phoneNumber, message }
            ])

        if (error) {
            toast.error("Failed to submit the form. Please try again." + error.message)
        } else {
            toast.success("Form submitted successfully!")
            setFormData({ firstName: '', lastName: '', email: '', phoneNumber: '', message: '' })
        }
    }

    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl py-1 sm:px-6 sm:py-32 lg:px-8">
                    <div className="relative isolate py-6 overflow-hidden bg-gray-100 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <svg
                            viewBox="0 0 1024 1024"
                            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                            aria-hidden="true"
                        >
                            <circle cx={412} cy={212} r={712} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="yellow" />
                                    <stop offset={1} stopColor="white" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <svg
                            viewBox="0 0 1024 1024"
                            className="absolute right-0 top-0 -z-10 h-[32rem] w-[32rem] translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                            aria-hidden="true"
                        >
                            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.4" />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="yellow" />
                                    <stop offset={1} stopColor="yellow" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left">
                            <div className="hidden lg:block mt-4">
                                <Image
                                    src="/sakmap_contactus.jpeg"
                                    alt="Contact Us"
                                    width={458}
                                    height={448}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="relative mt-16 lg:mt-0 lg:ml-16">
                            <form onSubmit={handleSubmit} className="mx-auto max-w-xl sm:mt-20">
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
                                            First name <span className="text-red-500">*</span>
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="firstName"
                                                id="firstName"
                                                autoComplete="given-name"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-lg placeholder:text-gray-400  sm:text-sm sm:leading-6 focus:outline-none focus:shadow-2xl focus:border-transparent"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
                                            Last name <span className="text-red-500">*</span>
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="lastName"
                                                id="lastName"
                                                autoComplete="family-name"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-lg placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:shadow-2xl focus:border-transparent"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                autoComplete="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-lg placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:shadow-2xl focus:border-transparent"
                                            />

                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-gray-900">
                                            Phone number <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative mt-2.5">
                                            <input
                                                type="tel"
                                                name="phoneNumber"
                                                id="phoneNumber"
                                                autoComplete="tel"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                required
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-lg placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:shadow-2xl focus:border-transparent"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                        <div className="mt-2.5">
                                            <textarea
                                                name="message"
                                                id="message"
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-lg placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:shadow-2xl focus:border-transparent"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <button
                                        type="submit"
                                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Let&apos;s talk
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
