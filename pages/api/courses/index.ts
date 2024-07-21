import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../supabase/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { category_name } = req.query;

    if (!category_name) {
        return res.status(400).json({ error: 'Missing category_name' });
    }

    const { data, error } = await supabase
        .rpc('get_all_course_category', { category_name });

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(200).json(data);
}
