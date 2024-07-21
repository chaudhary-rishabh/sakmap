import UploadContentModule from '@/app/modules/admin/UploadContentModule'
import React from 'react'
import withAdminAuth from '@/hoc/withAdminAuth'

const UploadContent = () => {
    return (
        <div>
            <UploadContentModule />
        </div>
    )
}

export default withAdminAuth(UploadContent);