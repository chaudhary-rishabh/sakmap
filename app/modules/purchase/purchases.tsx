import { useEffect, useState } from 'react';
import { supabase } from '../../../supabase/supabaseClient';
import { Purchase } from '../../../types';
import NoPurchases from './NoPurchases'
import PurchasesCard from './PurchasesCard'
import SkeletonPurchase from '@/app/components/skeleton/SkeletonPurchase';

const Purchases = () => {
    const [purchases, setPurchases] = useState<Purchase[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPurchases = async () => {
            const { data, error } = await supabase.auth.getUser();
            const user = data?.user;

            if (user) {
                const { data: purchasesData, error: purchasesError } = await supabase
                    .from('purchases')
                    .select('*')
                    .eq('user_id', user.id);

                if (purchasesError) {
                    console.error('Error fetching purchases:', purchasesError);
                } else {
                    setPurchases(purchasesData as Purchase[]);
                }
            }
            setLoading(false);
        };

        fetchPurchases();
    }, []);

    if (loading) {
        return <><SkeletonPurchase /></>;
    }

    return purchases.length === 0 ? <NoPurchases /> : <PurchasesCard purchases={purchases} />;
};

export default Purchases;