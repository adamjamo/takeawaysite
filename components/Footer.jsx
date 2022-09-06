import React from 'react'
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Footer.module.css";


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image className={styles.photo} src="/img/wood.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
          Real Food, made by Real People, delivered to Your Door!
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            16 Vegan  Lane
            <br /> London, E1 3AJ
            <br /> 0111 867 1010
          </p>
          <p className={styles.text}>
          21 Plant Based Road 
            <br /> London, SE1 2FC
            <br /> 0111 357 4030
          </p>
          
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>OPENING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 00:00
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer