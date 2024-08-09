// pages/api/createOrder.ts
import { NextApiRequest, NextApiResponse } from 'next';
import Razorpay from 'razorpay';

interface OrderRequestBody {
  amount: number;
  currency: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { amount, currency }: OrderRequestBody = req.body;

    try {
      const instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID!,
        key_secret: process.env.RAZORPAY_KEY_SECRET!,
      });

      const options = {
        amount: amount * 100, // Amount in paise (1 INR = 100 paise)
        currency: currency,
      };

      const order = await instance.orders.create(options);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
