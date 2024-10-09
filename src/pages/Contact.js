import React from 'react'
import PizzaLeft from "../asserts/pizzaLeft.jpg";
import "../components/styles/Contact.css";

function Contact() {
  return (
    <div className='contact'>
        <div
         className='leftSide' style={{backgroundImage:`url(${PizzaLeft})`}}
        >
           
        </div>
        <div className='rightSide'>
            <h1> Contact Us</h1>
            <form id ="contact-form " method ="POST">
                <label htmlFor='name'>Full Name</label>
                <input name="name" placeholder='Enter your Full Name..' type="text"/>
                <label htmlFor='email'>Email</label>
                <input name="email" placeholder='Enter your Full Name..' type="email"/>
                <label htmlFor='message'>Message</label>
                <textarea rows="6" name="message" required></textarea>
               <button type="submit">Send Message</button>

            </form>
        </div>
      
    </div>
  );
}

export default Contact
