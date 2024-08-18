import Layout from '@/app/layouts/Layout';
import withAuth from '@/hoc/withAuth';
import PurchasesCourseListModule from '@/app/modules/purchase/PurchasesCourseListModule';


const PurchasesCourseList = () => {

    return (
        <Layout isProtected>
            <PurchasesCourseListModule />
        </Layout>
    );
};

export default withAuth(PurchasesCourseList);
