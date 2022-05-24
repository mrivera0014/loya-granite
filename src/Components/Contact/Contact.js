import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {




    return (
        <div className='contactContain'>
            {/* creating contact form */}
            <form id='form' className='form'>
                <h3 className='formTitle'>Let's talk about your project</h3>
                <input placeholder='Name' id='name' />
                <input placeholder='Email' id='email' />
                <input placeholder='Phone Number' id='phone' />
                <textarea placeholder='Message' id='message' />
                <button id='submit' type='submit'>Send</button>
            </form>

            <section className='contactInfo'>
                <h3>Contact Info</h3>
                <p>Phone: (661) 466-3286</p>
                <p>Email: dieguito.loyagranite19@gmail.com</p>
            </section>
            <section className='loyaHours'>
                <h3>Hours of Operation</h3>
                <p>Monday-Friday: 9am- 5pm</p>
                <p>Saturday: Closed</p>
                <p>Sunday: Closed</p>
            </section>
        </div>
    )
}

export default Contact