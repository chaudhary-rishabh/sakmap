import React, { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { Rating } from 'react-simple-star-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface DialogBoxProps {
    onClose: () => void;
}

const DialogRating: React.FC<DialogBoxProps> = ({ onClose }) => {
    const [rating, setRating] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const [contact, setContact] = useState<string>('');

    const handleRating = (rate: number) => {
        setRating(rate);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Simulate submission to the backend
        const data = { rating, name, contact };
        console.log('Submitted data:', data);

        // Show success toast
        toast('Thanks for rating us!');

        // Clear form
        setRating(0);
        setName('');
        setContact('');

        // Close the dialog after submission
        onClose();
    };

    const notify = () => toast("Wow so easy!");

    return (
        <>
            <ToastContainer />
            <Transition show={true}>
                <Dialog className="relative z-10" onClose={onClose}>
                    <TransitionChild
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </TransitionChild>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                                    <form onSubmit={handleSubmit}>
                                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                            <div className="sm:flex sm:items-start">
                                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                                    <ExclamationTriangleIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                                </div>
                                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                        Please rate us
                                                    </DialogTitle>
                                                    <div className="mt-2 flex justify-center">
                                                        <Rating
                                                            onClick={handleRating}
                                                            initialValue={rating}
                                                            className="rating-stars"
                                                        />
                                                    </div>
                                                    <div className="mt-4">
                                                        <input
                                                            type="text"
                                                            placeholder="Name"
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="mt-4">
                                                        <input
                                                            type="text"
                                                            placeholder="Contact (Email/Phone)"
                                                            value={contact}
                                                            onChange={(e) => setContact(e.target.value)}
                                                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button
                                                type="submit"
                                                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                                                onClick={notify}
                                            >
                                                Submit
                                            </button>
                                            <button
                                                type="button"
                                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                onClick={onClose}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <ToastContainer />
        </>
    );
};

export default DialogRating;