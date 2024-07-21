// pages/consulting.tsx
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { supabase } from '../../supabase/supabaseClient'

function classNames(classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function ConsultingPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
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
        const { firstName, lastName, company, email, phoneNumber, message } = formData

        const { error } = await supabase
            .from('sak_contactus')
            .insert([
                { firstname: firstName, lastname: lastName, company, email, number: phoneNumber, message }
            ])

        if (error) {
            toast.error("Failed to submit the form. Please try again.")
        } else {
            toast.success("Form submitted successfully!")
            setFormData({ firstName: '', lastName: '', company: '', email: '', phoneNumber: '', message: '' })
        }
    }

    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl py-1 sm:px-6 sm:py-32 lg:px-8">
                    <div className="relative isolate py-6 overflow-hidden bg-gray-100 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:px-24 lg:pt-0">
                        <svg
                            viewBox="0 0 1024 1024"
                            className="absolute left-0 top-0 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                            aria-hidden="true"
                        >
                            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="blue" />
                                    <stop offset={1} stopColor="white" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <svg
                            viewBox="0 0 1024 1024"
                            className="absolute right-0 bottom-0 -z-10 h-[32rem] w-[32rem] translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                            aria-hidden="true"
                        >
                            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="blue" />
                                    <stop offset={1} stopColor="white" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="relative mt-16 lg:mt-5 lg:ml-16 text-center lg:text-left">
                            <h2 className="text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl">
                                Custom Consultant
                            </h2>
                            <p className="mt-6 text-lg text-center leading-8 text-gray-600">
                                We are here to help you with your consulting needs.
                            </p>
                        </div>
                        <div className="relative mt-10 lg:mt-0 lg:ml-16">
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
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:shadow-2xl focus:border-transparent"
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
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:shadow-2xl focus:border-transparent"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                            Company
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="company"
                                                id="company"
                                                autoComplete="organization"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:shadow-2xl focus:border-transparent"
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
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:shadow-2xl focus:border-transparent"
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
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:shadow-2xl focus:border-transparent"
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
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:shadow-2xl focus:border-transparent"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <button
                                        type="submit"
                                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Send
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
