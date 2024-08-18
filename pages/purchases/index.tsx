import PurchasesModule from '@/app/modules/purchase/purchases';
import Layout from '@/app/layouts/Layout';
import withAuth from '@/hoc/withAuth';


const Purchases = () => {

    return (
        <Layout isProtected>
            <PurchasesModule />
        </Layout>
    );
};

export default withAuth(Purchases);
