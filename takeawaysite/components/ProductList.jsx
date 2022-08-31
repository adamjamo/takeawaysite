import React from 'react'
import styles from "../styles/ProductList.module.css"
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div className={styles.container} >






        <p className={styles.desc}>

Real Food, made by Real People, delivered to Your Door!        </p>


<h1 className={styles.title} > Late Night Munchies?</h1>

<p>Delishhh... we won't tell ;)</p>



        <div className={styles.wrapper}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
             </div>
    </div>
  )
}

export default ProductList