import React from 'react'
import styles from '../styles/Navbar.module.css'
import '../styles/Navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.container}>
   <div className={styles.item}>
   <div className={styles.pizzaSlice}>
  <Image src="/img/logo2.png"  alt="Pizza Logo" width={50} height={50} />
  </div>



<div className={styles.texts}>
<div className={styles.text}> Call Us!</div>
<div className={styles.text}>0171 284 3845 </div>
<div className={styles.text}>100% Vegan Delivery </div>
</div>
</div>


<div className={styles.item}>
<ul className={styles.list} >

<li className={styles.listItem}>Food</li>
<li className={styles.listItem}>Drink</li>
<li className={styles.listItem}>Deals</li>
<Image  src="/img/mainlogopink.png" alt="" width="160px" height="80px" />
<li className={styles.listItem}>FAQ</li>
<li className={styles.listItem}>About</li>
<li className={styles.listItem}>Contact</li>
</ul>



</div>
   <div className={styles.item}>   
     <div className={styles.cart}>
     <Image  src="/img/cart.png" alt="" width="40px" height="40px" />
     <div className={styles.counter}> 20 </div>
</div>
</div>  
</div>  


 
    
  
  )
}

export default Navbar