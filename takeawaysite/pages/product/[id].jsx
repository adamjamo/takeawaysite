import React, {useState} from 'react';
import styles from '../../styles/Product.module.css';
import Image from "next/image";

const Product = () => {

  const [size, setSize] = useState(0);

    const pizza = {

        id: 1,
        img: '/img/BANGBANG.png',
        shhhef: 'HannyB',
        name: 'Bang Bang Cauliflower',
        price: ['5.99 [Serves 1]', '7.99 [Serves 2]', '9.99 [Serves 4]'],
        desc: 'Delishhhus Vegan Bang Bang Cauliflower Pizza On Thick Crust Sourdough Base... Oooo Go On!🤤 '

    };

  return (
    <div className={styles.container}>
            <div className={styles.left}>
            <div className={styles.imgContainer}>

                <Image src={pizza.img} layout="fill" alt={pizza.name}/>
            </div>
            </div>

<div className={styles.right}> 


<h1 className={styles.title}>{pizza.name}</h1>
<h2 className={styles.shhhef}> Shhhef:
<div className={styles.shhhefName}> 
   @{pizza.shhhef}
   </div>
   </h2>
<span className={styles.price}> £{pizza.price[size]}</span>
<p className={styles.desc}> {pizza.desc}</p>

<h3 className={styles.choose}> Choose Size:</h3>
<div className={styles.sizes}>
<div className={styles.size} onClick={()=>setSize(0)}>
<Image  src="/img/size.png" layout="fill" alt="small" />
<span className={styles.number}>Small</span>
  
</div>
<div className={styles.size} onClick={()=>setSize(1)}>
<Image  src="/img/size.png" layout="fill" alt="medium" />
<span className={styles.number}>Medium</span>
  
</div>
<div className={styles.size}onClick={()=>setSize(2)}>
<Image  src="/img/size.png" layout="fill" alt="large" />
<span className={styles.number}>Large</span>
  
</div>
  
</div>
<h3 className={styles.choose}> Extras:</h3>
<div className={styles.ingredients}>
<div className={styles.option}>



  




<input type='checkbox' 
id='mushrooms'
name='mushrooms'
className={styles.checkbox}


/>


<label htmlFor="mushrooms"> Mushrooms </label> 




<input type='checkbox' 
id='facon'
name='facon'
className={styles.checkbox}


/>
<label htmlFor="facon"> 'Facon' </label> 



<input type='checkbox' 
id='cheeze'
name='cheeze'
className={styles.checkbox}


/>
<label htmlFor="cheeze"> Extra Cheeze </label> 


<input type='checkbox' 
id='olives'
name='olives'
className={styles.checkbox}


/>
<label htmlFor="olives"> Olives </label> 

<input type='checkbox' 
id='jalepenos'
name='jalepenos'
className={styles.checkbox}


/>
<label htmlFor="jalepenos"> Jalepenos </label>

<input type='checkbox' 
id='chillisauce'
name='chillisauce'
className={styles.checkbox}


/>
<label htmlFor="chillisauce"> Chilli Sauce </label >

<input type='checkbox' 
id='aioli'
name='aioli'
className={styles.checkbox}


/>
<label htmlFor="aioli"> Vegan Aioli </label >


</div>


<div className={styles.add}>

  <input type="number" defaultValue={1} className={styles.quantity}>

    
  </input>
  <button className={styles.button}>  Add To Basket</button>
</div>
</div>




</div>


    </div>
    
    
  )
}

export default Product