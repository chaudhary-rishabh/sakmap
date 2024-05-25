import React, { useState } from 'react';
import DialogRating from '../components/popup/DialogRating';
import { Dialog } from '@headlessui/react';

const OpenDialogRating = () => {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <>
            {dialogOpen && <DialogRating onClose={() => setDialogOpen(false)} />}
            <h4 className='txtColor'
                onClick={() => setDialogOpen(true)}
            >
                Rate Us
            </h4>
        </>
    );
}

export default OpenDialogRating;
