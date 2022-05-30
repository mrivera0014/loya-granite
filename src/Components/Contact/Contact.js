import axios from 'axios'
import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {




    const[sent,setSent] = useState(false);
    const[text,setText] = useState("");
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");


    const handleSend = async() => {
        setSent(true)
        try{
            await axios.post("http://localhost:4000/send_mail",{
                text,name,email
            })
        } catch(error){
            console.log(error);
        }
    }


    return (
        <div className='contactContain'>

            {!sent ? (
            
            <form id='form' onSubmit={handleSend} className='form'>
                <h3 className='formTitle'>Let's talk about your project</h3>
                <input placeholder='Name' id='name' value={name} onChange={(e)=> setName(e.target.value)} />
                <input placeholder='Email' id='email'value={email} onChange={(e)=> setEmail(e.target.value)} />
                <input placeholder='Phone Number' id='phone' />
                <textarea placeholder='Message' id='message'  value={text} onChange={(e)=> setText(e.target.value)}/>
                <button id='submit' type='submit'>Send</button>
            </form>

):(
    <h1>email Sent</h1>


)}


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