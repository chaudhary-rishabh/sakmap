import React from 'react'
import Layout from '@/app/layouts/Layout';
import SettingModule from '@/app/modules/settingmodule/SettingModule';

const Settings = () => {
    return (
        <Layout isProtected>
            <SettingModule />
        </Layout>
    )
}

export default Settings