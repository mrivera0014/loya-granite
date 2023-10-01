import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './Form.css'
import { gsap } from 'gsap/all'

import Banner from '../Banner/banner'

const Form = () => {

    useEffect(() => {
        gsap.from('#contactForm', { duration: 2.5, y: '100', ease: 'power3.out', })
        gsap.from('.banner', { duration: 2.5, x: '100', ease: 'power3.out', })

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
            <Banner className='banner' />
            {!sent ? (

                <form id='contactForm' method='POST' action='https://formsubmit.co/88c64532444798a1448f19cc7ca8e7be' encType='multipart/form-data'>
                    {/* <input type="hidden" name="_captcha" value="false"></input> */}
                    <input type="hidden" name="_autoresponse" value="Loya Granite has received your message and will reply as soon as possible. We look forward to working with you! "></input>
                    <input type="hidden" name="_subject" value="Loya Granite Submission"></input>
                    <div className="nameSection">
                        <p className="formText">Name (Nombre):</p>
                        <input type="text" className="userInput inputName" name='name' required />
                    </div>
                    <div className="emailSection">
                        <p className="formText">Email (Correo Electronico):</p>
                        <input type="email" className="userInput inputEmail" name='email' required />
                    </div>
                    <div className="phoneSection">
                        <p className="formText">Phone Number (Numero de Telefono):</p>
                        <input type="text" className="userInput inputPhone" name='phone' required />
                    </div>
                    <div className="messageSection">
                        <p className="formText commentSection">Questions/Comments(Preguntas):</p>
                        <textarea className="userInput inputText" name='message' required></textarea>
                    </div>
                    <button type="submit" className="button" value="submit">Submit</button>
                    <input type="hidden" name="_next" value="https://loyagranite.com/"></input>
                </form>



            ) : (
                <h1>Email Sent</h1>


            )}
        </div>

    )
}





export default Form