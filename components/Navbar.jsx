import React from 'react'
import styles from '../styles/Navbar.module.css'
import '../styles/Navbar.module.css'
import Image from 'next/image'
import { useSelector } from "react-redux";

import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
   <div className={styles.item}>
   <Link href="/" passHref> 
   <div className={styles.pizzaSlice}>
<Image src="/img/logo2.png"  alt="Pizza Logo" width={50} height={50} />
  </div>
  </Link>


<div className={styles.texts}>
<div className={styles.text}> Call Us!</div>
<div className={styles.text}>0171 284 3845 </div>
<div className={styles.text}>100% Vegan </div>
</div>
</div>


<div className={styles.item}>
<ul className={styles.list} >

<Link href="/" passHref><li className={styles.listItem}>Hot Deals</li></Link>
<Link href="/sheffs" passHref><li className={styles.listItem}>Become A Shhhef!</li></Link>

<Link href="/" passHref><Image  src="/img/mainlogopink.png" className={styles.listItem} alt="" width="160px" height="80px" /></Link>
<Link href="/about" passHref><li className={styles.listItem}>About</li></Link>

<Link href="/contact" passHref><li className={styles.listItem}>Contact</li></Link>
<Link href="/login" passHref><li className={styles.listItem}>Log In</li></Link>
</ul>



</div>
<Link href="/cart" passHref>
   <div className={styles.item}>   
     <div className={styles.cart}>
     <Image  src="/img/cart.png" alt="" width="40px" height="40px" />
     <div className={styles.counter}> {quantity} </div>
</div>

</div> 
</Link > 
</div>  


 
    
  
  )
}

export default Navbar