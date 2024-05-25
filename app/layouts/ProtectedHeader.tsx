import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition, Menu } from '@headlessui/react';
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
    HomeIcon,
    UserGroupIcon,
    CalendarIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Image from 'next/image';

const products = [
    { name: 'Artificial Intelligence', description: 'High Level Understanding of Artificial Intelligence', href: 'courses/artificial-intelligence', icon: ChartPieIcon },
    { name: 'RS', description: 'RS', href: '#', icon: CursorArrowRaysIcon },
    { name: 'GIS', description: 'All about GIS', href: '#', icon: FingerPrintIcon },
    { name: 'Machine Learning', description: 'Learn from experts ', href: '#', icon: SquaresPlusIcon },
    { name: 'Environment', description: 'Learn all about environment', href: '#', icon: ArrowPathIcon },
];

const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

const dashboardItems = [
    { name: 'Artificial Intelligence', description: 'AI Courses Overview', href: '#', icon: HomeIcon },
    { name: 'Machine Learning', description: 'Machine Learning Courses Overview', href: '#', icon: UserGroupIcon },
    { name: 'Environment', description: 'Environment Overview', href: '#', icon: PhoneIcon },
    { name: 'GIS', description: 'GIS Courses Overview', href: '#', icon: CalendarIcon },
    { name: 'RS', description: 'RS Courses Overview and view reports', href: '#', icon: PhoneIcon },
];

const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
];

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}

export default function ProtectedHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header style={{ zIndex: '100' }} className="bg-white shadow-md fixed top-0 left-0 right-0">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Sakmap</span>
                        <Image className="h-8 w-auto" src="/sakmaplogo.png" alt="sakmap" width={100} height={100} />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Courses
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {dashboardItems.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <Link href="/consulting/custom" className="text-sm font-semibold leading-6 text-gray-900">
                        Consultant
                    </Link>
                    <Link href="/consulting/custom" className="text-sm font-semibold leading-6 text-gray-900">
                        Purchases
                    </Link>
                    <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                        About Us
                    </Link>
                    <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                        Contact Us
                    </Link>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div className="ml-10 space-x-4 flex items-center">
                        <Menu as="div" className="relative">
                            <div>
                                <Menu.Button className="flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="sr-only">Open user menu</span>
                                    <Image className="h-8 w-8 rounded-full" src="/sakmapProfile2.png" alt="sakmap header logo" width={32} height={32} />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-40">
                                    {userNavigation.map((item) => (
                                        <Menu.Item key={item.name}>
                                            {({ active }) => (
                                                <a
                                                    href={item.href}
                                                    className={classNames(
                                                        active ? 'bg-gray-100' : '',
                                                        'block px-4 py-2 text-sm text-gray-700'
                                                    )}
                                                >
                                                    {item.name}
                                                </a>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Sakmap</span>
                            <Image className="h-8 w-auto" src="/sakmaplogo.png" alt="sakmap" width={100} height={100} />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Courses
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...dashboardItems].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Link href="/consulting/custom" className="-mx-3 block rounded-lg py-2 pl-3 pr-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    Consultant
                                </Link>
                                <Link href="/consulting/custom" className="-mx-3 block rounded-lg py-2 pl-3 pr-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    Purchases
                                </Link>
                                <Link href="/about" className="-mx-3 block rounded-lg py-2 pl-3 pr-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    About Us
                                </Link>
                                <Link href="/contact" className="-mx-3 block rounded-lg py-2 pl-3 pr-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    Contact Us
                                </Link>
                            </div>
                            <div className="py-6">
                                {userNavigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg py-2 pl-3 pr-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
