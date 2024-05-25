import React, { useState } from 'react';

const FaqAccordion: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div id="accordion-open" data-accordion="open">
            <h2 id="accordion-open-heading-1">
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                    onClick={() => handleToggle(1)}
                    aria-expanded={activeIndex === 1}
                    aria-controls="accordion-open-body-1"
                >
                    <span className="flex items-center">
                        <svg
                            className="w-5 h-5 me-2 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                            ></path>
                        </svg>{' '}
                        What is Sakmap
                    </span>
                    <svg
                        data-accordion-icon
                        className={`w-3 h-3 transform ${activeIndex === 1 ? 'rotate-180' : ''} shrink-0`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                        />
                    </svg>
                </button>
            </h2>
            <div
                id="accordion-open-body-1"
                className={`${activeIndex === 1 ? '' : 'hidden'}`}
                aria-labelledby="accordion-open-heading-1"
            >
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Sakmap is an open-source library of interactive components built on top of Tailwind
                        CSS including buttons, dropdowns, modals, navbars, and more.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Check out this guide to learn how to{' '}
                        <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">
                            get started
                        </a>{' '}
                        and start developing websites even faster with components on top of Tailwind CSS.
                    </p>
                </div>
            </div>

            <h2 id="accordion-open-heading-2">
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                    onClick={() => handleToggle(2)}
                    aria-expanded={activeIndex === 2}
                    aria-controls="accordion-open-body-2"
                >
                    <span className="flex items-center">
                        <svg
                            className="w-5 h-5 me-2 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        Is there free Trial?
                    </span>
                    <svg
                        data-accordion-icon
                        className={`w-3 h-3 transform ${activeIndex === 2 ? 'rotate-180' : ''} shrink-0`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                        />
                    </svg>
                </button>
            </h2>
            <div
                id="accordion-open-body-2"
                className={`${activeIndex === 2 ? '' : 'hidden'}`}
                aria-labelledby="accordion-open-heading-2"
            >
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Sakmap is first conceptualized and designed using the Figma software so everything
                        you see in the library has a design equivalent in our Figma file.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Check out the{' '}
                        <a href="https://Sakmap.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">
                            Figma design system
                        </a>{' '}
                        based on the utility classes from Tailwind CSS and components from Sakmap.
                    </p>
                </div>
            </div>

            <h2 id="accordion-open-heading-3">
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                    onClick={() => handleToggle(3)}
                    aria-expanded={activeIndex === 3}
                    aria-controls="accordion-open-body-3"
                >
                    <span className="flex items-center">
                        <svg
                            className="w-5 h-5 me-2 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        What are the differences between Sakmap and Other Courses?
                    </span>
                    <svg
                        data-accordion-icon
                        className={`w-3 h-3 transform ${activeIndex === 3 ? 'rotate-180' : ''} shrink-0`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                        />
                    </svg>
                </button>
            </h2>
            <div
                id="accordion-open-body-3"
                className={`${activeIndex === 3 ? '' : 'hidden'}`}
                aria-labelledby="accordion-open-heading-3"
            >
                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        The main difference is that the core components from Sakmap are open source under
                        the MIT license, whereas Tailwind UI is a paid product. Another difference is that
                        Sakmap relies on smaller and standalone components, whereas Tailwind UI offers
                        sections of pages.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        However, we actually recommend using both Sakmap, Sakmap Pro, and even Tailwind UI
                        as there is no technical reason stopping you from using the best of two worlds.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                    <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                        <li>
                            <a href="https://Sakmap.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">
                                Sakmap Pro
                            </a>
                        </li>
                        <li>
                            <a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">
                                Tailwind UI
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FaqAccordion;
