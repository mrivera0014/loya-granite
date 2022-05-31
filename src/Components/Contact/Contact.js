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
                <h3  className='form-title'>Let's talk about your project</h3>
                <input className='form_input form_name' placeholder='Name' id='name' value={name} onChange={(e)=> setName(e.target.value)} />
                <input className=' form_input form_email' placeholder='Email' id='email'value={email} onChange={(e)=> setEmail(e.target.value)} />
                <input className='form_input' placeholder='Phone Number' id='phone' />
                <textarea className='form_textarea form_message' placeholder='Message' id='message'  value={text} onChange={(e)=> setText(e.target.value)}/>
                <button className='form_button' id='submit' type='submit'>Send</button>
            </form>

):(
    <h1>email Sent</h1>


)}

    <div className='contact sub_section'>
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





export default Contact