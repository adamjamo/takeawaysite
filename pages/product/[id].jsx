import React, {useState} from 'react';
import styles from '../../styles/Product.module.css';
import Image from "next/image";
import axios from 'axios';

import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";


const Product = ({product}) => {

  const [price, setPrice] = useState(product.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();


const changePrice = (number) => {
  setPrice (price + number)
}

  const handleSize = (sizeIndex) => {
    const difference = product.prices[sizeIndex] - product.prices[size]
    setSize(sizeIndex)
    changePrice(difference);

  }


  const handleChange = (e, option) => {
    const checked = e.target.checked;
    if (checked) {
      console.log('check mate')
      changePrice(option.price)
      setExtras((prev) => [...prev, option]);
    } else {

      changePrice(-option.price)
      setExtras(extras.filter((extra) => extra._id !== option._id));
    
    }
  }


  const handleClick = () => {
    dispatch(addProduct({...product, extras, price, quantity}));
  };




  return (
    <div className={styles.container}>
            <div className={styles.left}>
            <div className={styles.imgContainer}>

                <Image src={product.img} layout="fill" alt={product.name}/>
            </div>
            </div>

<div className={styles.right}> 


<h1 className={styles.title}>{product.title}</h1>
<h2 className={styles.shhhef}> Shhhef: 
<div className={styles.shhhefName}> 
   @{product.shhhef}
   </div>
   </h2>
<span className={styles.price}> £{price} </span>
<p className={styles.desc}> {product.desc}</p>

<h3 className={styles.choose}> Choose Size:</h3>
<div className={styles.sizes}>
<div className={styles.size} onClick={()=>handleSize(0)}>
<Image  src="/img/size.png" layout="fill" alt="small" />
<span className={styles.number}>Small</span>
  
</div>
<div className={styles.size} onClick={()=>handleSize(1)}>
<Image  src="/img/size.png" layout="fill" alt="medium" />
<span className={styles.number}>Medium</span>
  
</div>
<div className={styles.size}onClick={()=>handleSize(2)}>
<Image  src="/img/size.png" layout="fill" alt="large" />
<span className={styles.number}>Large</span>
  
</div>
  
</div>
<h3 className={styles.choose}> Extras:</h3>
<div className={styles.ingredients}>
          {product.extraOptions.map((option) => (
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className={styles.checkbox}
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor="double">{option.text}</label>
            </div>
          ))}
        </div>



        <div className={styles.add}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button} onClick={handleClick}>
            Add to Cart
          </button>
        </div>
</div>




</div>



    
    
  )
}

export const getServerSideProps = async ({params}) => {
  const res = await axios.get(`https://delishhhapp.netlify.app/api/products/${params.id}`);

  return {
    props: {
      product: res.data,
    },
  };
};


export default Product



