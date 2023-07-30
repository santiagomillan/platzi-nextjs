import React, { useEffect, useState } from 'react'
import Navbar from '../components/NavBar/NavBar'
import data from 'database/data'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then(res => res.json())
      .then(({data ,length}) => {
        setProductList(data)
      })
      // .then(console.log)
  }, [])
  // useEffect(() => {
  //   const getProducts = async() => {
  //     const response = await fetch('api/avo')
  //     const data = await response.json()
  //     setProductList(data.data)
  //   }

  //   getProducts()
  //     .catch(console.error)
      
  // }, [])

  return (
    <>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {console.log("productList",productList)}
      {productList.map((product) => (
        <div>{product.name}</div>
      ))}
    </>
  )
}

export default HomePage