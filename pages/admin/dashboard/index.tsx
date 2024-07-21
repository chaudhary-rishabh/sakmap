import DashboardModule from '@/app/modules/admin/DashboardModule'
import React from 'react'
import withAdminAuth from '@/hoc/withAdminAuth'

const index = () => {
    return (
        <>
            <DashboardModule />
        </>
    )
}

export default withAdminAuth(index);