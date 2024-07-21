import React, { useState } from 'react';
import Header from '../layouts/Header';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '../../supabase/supabaseClient';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleForgotPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/reset-password`,
        });
        if (error) {
            setMessage(`Error: ${error.message}`);
        } else {
            setMessage('Password reset email sent! Please check your inbox.');
        }
    };

    return (
        <>
            <Header />
            <section className="bg-gray-50 dark:bg-white">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <Image className="w-8 h-8 mr-2" src="/sakmaplogo.png" alt="sakmap reset password" width={300} height={300} />
                        Sakmap
                    </a>
                    <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-white dark:border-gray-700 sm:p-8">
                        <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                            Forgot Password?
                        </h2>
                        <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleForgotPassword}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <p>Remember your password! </p>
                                </div>
                                <div className="ml-3 text-sm">
                                    <Link href="/login" className="font-bold text-indigo-600 hover:text-indigo-500">- Login here</Link>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-black bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:focus:ring-primary-800"
                            >
                                Reset Password
                            </button>
                        </form>
                        {message && <p className="mt-4 text-red-500">{message}</p>}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ForgotPassword;
