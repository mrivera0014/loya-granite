import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './Form.css'
import { gsap } from 'gsap/all'
import logoImage from '../../assets/LOYA-Logo-Color-WO-Text.png'

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

            <header className='title'>Contact Us</header>

            {!sent ? (

                <form id='contactForm' method='POST' action='https://formsubmit.co/88c64532444798a1448f19cc7ca8e7be' encType='multipart/form-data'>
                    {/* <input type="hidden" name="_captcha" value="false"></input> */}
                    <input type="hidden" name="_autoresponse" value="Loya Granite has received your message and will reply as soon as possible. We look forward to working with you! "></input>
                    <input type="hidden" name="_subject" value="Loya Granite Submission"></input>
                    <div className="nameSection">
                        <p className="formText">Name:</p>
                        <input type="text" className="userInput inputName" name='name' required />
                    </div>
                    <div className="emailSection">
                        <p className="formText">Email:</p>
                        <input type="email" className="userInput inputEmail" name='email' required />
                    </div>
                    <div className="phoneSection">
                        <p className="formText">Phone Number:</p>
                        <input type="text" className="userInput inputPhone" name='phone' required />
                    </div>
                    <div className="messageSection">
                        <p className="formText commentSection">Questions/Comments:</p>
                        <textarea className="userInput inputText" name='message' required></textarea>
                    </div>
                    <button type="submit" className="button" value="submit">Submit</button>
                    <input type="hidden" name="_next" value="https://loyagranite.com/"></input>
                </form>

            ) : (
                <h1>Email Sent</h1>


            )}


            <div className='contactForm sub_section'>
                <img className='formLogo' src={logoImage} alt='loya-grantie-logo' />
                <section className='questionsEnglish'>
                    <p> Have questions? Shoot us a message or give us a call! We can get you an estimate and are always willing to work with your budget. We work with many materials such as granite, marble, quartz, and porcelain.</p>
                </section>
                <section className='spanish'>
                    <p>Preguntas? Envienos un mensaje o llamenos por telefono!
                    </p>
                </section>
                {/* <section className='contactInfo'>
                    <h3>Contact Info</h3>
                    <a href="tel: 303-997-6166" className='contact number'>Phone: 303-997-6166</a>
                    <p className='contact'>Email: dieguito.loyagranite19@gmail.com</p>
                </section>
                <section className='loyaHours'>
                    <h3>Hours of Operation</h3>
                    <p>Monday-Friday: 9am- 5pm</p>
                    <p>Saturday: Closed</p>
                    <p>Sunday: Closed</p>
                </section> */}
            </div>
        </div>
    )
}





export default Form