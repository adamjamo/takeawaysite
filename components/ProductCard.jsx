import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/ProductCard.module.css"

const ProductCard = ({product}) => {



  let theshef = product.shhhef


  if (theshef === undefined ) {

    theshef = '???'
  }

  return (
    <div className={styles.container}>
        <Link href={`/product/${product._id}`} passHref>
        <Image className={styles.image} src={product.img} alt="Pizza Image" width={400} height={400} />
        </Link>
        <h1 className={styles.title}> {product.title}

        </h1>

          <h1 className={styles.Shhhef}>  Shhhef: @{theshef}

        </h1>
        <span className={styles.price} > £{product.prices[0]} </span>
<p className={styles.desc}>
{product.desc}
</p>
    </div>
  )
}

export default ProductCard