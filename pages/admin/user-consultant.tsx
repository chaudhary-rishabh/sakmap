import UserConsultantModule from '@/app/modules/admin/UserConsultantModule'
import React from 'react'
import withAdminAuth from '@/hoc/withAdminAuth'

const UserConsultant = () => {
    return (
        <div>
            <UserConsultantModule />
        </div>
    )
}

export default withAdminAuth(UserConsultant);