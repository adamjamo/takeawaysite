import React from 'react'
import Image from 'next/image'

import styles from "../styles/ProductCard.module.css"

const ProductCard = () => {
  return (
    <div className={styles.container}>
        
        <Image className={styles.image} src="/img/BLUEBANG.png" alt="Pizza Logo" width={400} height={250} />

        <h1 className={styles.title}> THE FEISTY VEGAN

        </h1>
        <span className={styles.price} > £5.99 </span>
<p className={styles.desc}>
 Firey Hot Vegan Cheeze and Tomato Pizza with Chipotle Chillis. 
</p>
    </div>
  )
}

export default ProductCard