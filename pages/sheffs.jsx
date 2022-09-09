import React from 'react'

import styles from "../styles/About.module.css";

const sheffs = () => {
  return (
    <div>

      <div className={styles.about}>

<h1>Budding Shhhef? Show us what you got!</h1>


<h2>  Sign up</h2>
<form action="/success  " method="post">

  <div className='chefsignup'>
  <label for="first">First name:</label>
  <input type="text" id="first" name="first" />

  <label for="last">Last name:</label>
  <input type="text" id="last" name="last" />

  <label for="email">Email Address:</label>
  <input type="email" id="email" name="email" />

  <button type="submit">Submit</button>
  </div>
</form>
</div>
</div>
  )
}

export default sheffs