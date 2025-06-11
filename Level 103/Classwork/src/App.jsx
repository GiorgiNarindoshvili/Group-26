import React from 'react'
import { useState } from 'react';
function Contact() { // create new function called contact
  const [authorized, seAu] = useState(false); //create two variables to use our imported statement on it
  function handleSubmit(e){ // nested second function
    e.preventDefault(); //make sure our page shoudn't refresh
    const password = e.target.password.value; //take all the info from password
    if(password === 'swordfish'){ //if this statement true, then our variable seAu should be true
      seAu(true)
    }
  }
 
  const login = //new constant
  //create form and it's elements to let user input their information
  <form action="#" onSubmit={handleSubmit}> 
    <input type="text" placeholder='Enter your name'  name='name'/> 
    <input type="password" name='password' placeholder='Enter Your Password'/>
    <input type="submit" />
  </form>

  //create contact info which will work after login
  const contactInfo = (
    <ul>
      <li>Email: "asjkbdj@gmail.com"</li>
      <li>Phone Number: 123-456-789</li>
    </ul>
  );
  return( //return statement
    //create one outer element div and check that if variable authorized is true, it'll pop up contact on the screen, otherwise enter a pass
    //below that line, check that if auhtorized password is true it's gonna display contact info like an email and phone number, otherwise it'll just freeze screen and do nothing
      <div>
        <h1>{authorized ? "Contact" : "Enter a password"}</h1>
        {authorized ? contactInfo : login}
      </div>
  )
}

export default Contact
 