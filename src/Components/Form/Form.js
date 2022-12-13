import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './Form.css'
import { gsap } from 'gsap/all'

const Form = () => {

    useEffect(() => {
        gsap.from('.contactContain', { duration: 2.5, x: '100', ease: 'power3.out', })

    })


    const [sent, setSent] = useState(false);
    const [text, setText] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    const handleSend = async (e) => {
        e.preventDefault();
        setSent(true)
        try {
            await axios.post("/", {
                text, name, email
            })
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='contactContain'>

            {!sent ? (

                <form id='contactForm' method='POST' action='https://formsubmit.co/88c64532444798a1448f19cc7ca8e7be' encType='multipart/form-data'>
                    {/* <input type="hidden" name="_captcha" value="false"></input> */}
                    <input type="hidden" name="_autoresponse" value="Loya Granite has received your message and will reply as soon as possible. We look forward to working with you! "></input>
                    <input type="hidden" name="_subject" value="Loya Granite Submission"></input>
                    <div className="nameSection">
                        <p className="formText">Name:</p>
                        <input type="text" className="userInput" name='name' required />
                    </div>
                    <div className="nameSection">
                        <p className="formText">Phone Number:</p>
                        <input type="text" className="userInput" name='phone' required />
                    </div>
                    <div className="emailSection">
                        <p className="formText">Email:</p>
                        <input type="email" className="userInput" name='email' required />
                    </div>
                    <input type="hidden" name="_next" value="https://loyagranite.com/"></input>
                    <div className="messageSection">
                        <p className="formText">Message:</p>
                        <textarea className="userInput" name='message' required></textarea>
                    </div>
                    <button type="submit" className="button" value="submit">Submit</button>
                </form>

            ) : (
                <h1>Email Sent</h1>


            )}

            <div className='contactForm sub_section'>
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
        </div>
    )
}





export default Form