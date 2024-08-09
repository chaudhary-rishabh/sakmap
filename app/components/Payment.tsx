// components/Payment.tsx
import { useState } from 'react';
import { useAuth } from "../../context/AuthContext"
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

declare global {
    interface Window {
        Razorpay: any;
    }
}

interface PaymentProps {
    amountToPay: any;
    message: string;
}

const Payment: React.FC<PaymentProps> = ({ amountToPay, message }) => {
    const router = useRouter();

    const [currency] = useState<string>('INR');
    const { user } = useAuth();

    const handleToast = (toastType: any, message: any) => {
        return toastType(message)
    }

    const handlePayment = async () => {
        if (!user) {
            toast.info("Please Login to proceed");
            setTimeout(() => {
                router.replace('/login');
            }, 3000);
            return;
        }

        const res = await fetch('/api/createOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amountToPay, currency }),
        });

        const data = await res.json();

        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            amount: data.amount,
            currency: data.currency,
            order_id: data.id,
            handler: function (response: any) {
                alert(`Payment successful. Payment ID: ${response.razorpay_payment_id}`);
            },
            prefill: {
                name: 'Your Name',
                email: 'your.email@example.com',
                contact: '1234567890',
            },
            theme: {
                color: '#3399cc',
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <div>
            <button
                type="submit"
                onClick={handlePayment}
                className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                {message}
            </button>
            <ToastContainer />
        </div>
    );
};

export default Payment;
