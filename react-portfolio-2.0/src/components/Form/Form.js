import React from 'react'
// import { useState } from 'react'
import './Contact.css'

function Contact() {

    return (
        <div className='contactBody' id='contact'>
            <form id='contactForm' method='POST' action='https://formsubmit.co/c799a25d254aa7540f4b89c8318163c9' encType='multipart/form-data'>
                <input type="hidden" name="_captcha" value="false"></input>
                <div className="nameSection">
                    <p className="formText">Name:</p>
                    <input type="text" className="userInput" name='name' required />
                </div>
                <div className="emailSection">
                    <p className="formText">Email:</p>
                    <input type="email" className="userInput" name='email' required />
                </div>
                <input type="hidden" name="_next" value="https://mrivera0014.github.io/react-portfolio-2.0/"></input>
                <div className="messageSection">
                    <p className="formText">Message:</p>
                    <textarea className="userInput" name='message' required></textarea>
                </div>
                <button type="submit" className="button" value="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact
