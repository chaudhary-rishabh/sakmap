import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../supabase/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { data, error } = await supabase.rpc('get_all_course_video(inp_course_category_id uuid)');

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(200).json(data);
}