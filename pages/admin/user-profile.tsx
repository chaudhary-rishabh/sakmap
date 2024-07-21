import UserProfileModule from '@/app/modules/admin/UserProfileModule'
import React from 'react'
import withAdminAuth from '@/hoc/withAdminAuth'

const UserProfile = () => {
    return (
        <div>
            <UserProfileModule />
        </div>
    )
}

export default withAdminAuth(UserProfile);