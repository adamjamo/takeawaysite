import React from 'react'
import Image from 'next/image'

import styles from "../styles/ProductCard.module.css"

const ProductCard = () => {
  return (
    <div className={styles.container}>
        
        <Image className={styles.image} src="/img/BLUEBANG.png" alt="Pizza Logo" width={400} height={250} />
    </div>
  )
}

export default ProductCard