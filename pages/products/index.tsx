import Layout from '@/app/layouts/Layout'
import ProductModule from '@/app/modules/products/ProductModule'
import React from 'react'

const Products = () => {
    return (
        <Layout isProtected>
            <ProductModule />
        </Layout>
    )
}

export default Products