import UserContactusModule from '@/app/modules/admin/UserContactusModule'
import React from 'react'
import withAdminAuth from '@/hoc/withAdminAuth'

const UserContactus = () => {
    return (
        <div>
            <UserContactusModule />
        </div>
    )
}

export default withAdminAuth(UserContactus);