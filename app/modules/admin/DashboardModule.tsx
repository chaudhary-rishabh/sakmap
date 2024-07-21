import React from 'react';
import AdminHeader from './AdminHeader';
import Cards from '@/app/components/admin/Cards';

const DashboardModule = () => {
    return (
        <>
            <AdminHeader />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-4'>
                <Cards title="User Profiles" description="user profile all details each user and stats of users" href="/admin/user-profile" />
                <Cards title="User Contactus" description="user contactus page data and messages" href="/admin/user-contactus" />
                <Cards title="User Consultant" description="user consultant form details get and drag consultant details" href="/admin/user-consultant" />
                <Cards title="Upload Content" description="Upload Content for User site videos/description/price" href="/admin/upload-content" />
            </div>
        </>
    );
};

export default DashboardModule;
