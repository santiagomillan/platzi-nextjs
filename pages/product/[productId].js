import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
    const { query: {productId}} = useRouter()
  return (
    <div>
        ProductItem
        <h1>{productId}</h1>
    </div>
  )
}

export default ProductItem