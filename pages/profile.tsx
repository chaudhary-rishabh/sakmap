import Layout from '@/app/layouts/Layout'
import ProfileModule from '@/app/modules/ProfileModule'
import React from 'react'

const Profile = () => {
    return (
        <Layout isProtected>
            <ProfileModule />
        </Layout>
    )
}

export default Profile