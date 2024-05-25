import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DialogFaq from '../components/popup/DialogFaq';

const OpenDialogFaq = () => {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <>
            <ToastContainer />
            {dialogOpen && <DialogFaq onClose={() => setDialogOpen(false)} />}
            <h4 className='txtColor'
                onClick={() => setDialogOpen(true)}
            >
                FAQs
            </h4>
        </>
    )
}

export default OpenDialogFaq
