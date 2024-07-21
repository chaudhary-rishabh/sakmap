import { supabase } from '@/supabase/supabaseClient';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password } = req.body;
        try {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        res.status(201).json({ user: data.user });
        } catch (error: any) {
        res.status(400).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
