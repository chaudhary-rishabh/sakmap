import Layout from '@/app/layouts/Layout'
import ProductDescModule from '@/app/modules/products/productDescModule'
import React from 'react'

const ProductDescription = () => {
    return (
        <Layout isProtected>
            <ProductDescModule />
        </Layout>
    )
}

export default ProductDescription