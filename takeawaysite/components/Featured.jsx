import React from 'react'
import Image from 'next/image'
import styles from '../styles/Featured.module.css';



function Featured() {
return (
<div className = {styles.container}>
<Image src = "/img/arrow1.png" alt="" />
 <div className = {styles.wrapper}>
<div className = {styles.imgContainer}>
 <Image src = "/img/featured.png" alt="" />
</div>
</div>
<Image src = "/img/arrow4.png" alt="" />
</div>
  )
}

export default Featured