// components/Footer.js

import Image from 'next/image';
import SocialMediaIcons from '../components/SocialMediaIcons';
import Link from 'next/link';
import OpenDialogFaq from '../modules/OpenDialogFaq';
import OpenDialogRating from '../modules/OpenDialogRating';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-100 border-black">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://sakmap.com/" className="flex items-center">
                            <Image
                                src="/sakmaplogo.png"
                                alt="Sakmap Logo"
                                width={32}
                                height={32}
                                className="me-3"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Sakmap</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <Link href="/contact" className='txtColor'>Contact Us</Link>
                        <Link href="/privacy" className='txtColor'>Privacy Policy</Link>
                        <Link href="/terms" className='txtColor'>Terms of Service</Link>
                        <Link href="/about" className='txtColor'>About Us</Link>
                        <Link href="#"><OpenDialogFaq /></Link>
                        <OpenDialogRating />
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-black sm:text-center dark:text-black-400">© 2024 <a href="https://sakmap.com/" className="hover:underline">SAKMAP™</a>. All Rights Reserved.</span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <SocialMediaIcons />
                    </div>
                </div>
            </div>
        </footer>
    );
}
