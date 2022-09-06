import React from 'react'
import styles from "../styles/ProductList.module.css"
import ProductCard from './ProductCard'

const ProductList = ({ productList }) => {
  return (
    <div className={styles.container} >






        <p className={styles.desc}>

Real Food, made by Real People, delivered to Your Door!        </p>


<h1 className={styles.title} > Late Night Munchies?</h1>

<p>Delishhh...</p>



        <div className={styles.wrapper}>

        {productList.map((product) => (

<ProductCard key = {product.id} product={product}/>

       ) )}
              
    
             </div>
    </div>
  )
}

export default ProductList