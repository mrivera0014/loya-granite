import React, { useState } from 'react'
import './Contact.css'

function Contact(props) {

    //this is what nodemailer is looking for when we are sending the email
    const [mailState, setMailState] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    // this will handle the change when typing into the input boxes
    function handleStateChange(e) {
        setMailState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    //function that will post to nodemailerAPI route
    const submitEmail = async (e) => {
        // console.log('Email being submitted')
        e.preventDefault();
        // console.log('prevent default worked')
        console.log({ mailState });
        await fetch("/", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ mailState }),
            body: JSON.parse({ mailState }),
        })
            // .then(res => res.text)
            // .then(text => console.log(text))
            .then((res) => res.json())
            .then(async (res) => {
                const resData = await res;
                console.log(resData);
                if (resData.status === "success") {
                    alert("Message Sent!");
                } else if (resData.status === "fail") {
                    alert("Message failed to send")
                }
            })

            .then(() => {
                setMailState({
                    email: "",
                    name: "",
                    phone: "",
                    message: "",
                });
            });
    };

    return (
        <div className='contactContain'>
            {/* creating contact form */}
            <form id='form' className='form' onSubmit={submitEmail}>
                <h3 className='formTitle'>Let's talk about your project</h3>
                <input placeholder='Name' id='name' name="name" onChange={handleStateChange} value={mailState.name} />
                <input placeholder='Email' id='email' name="email" onChange={handleStateChange} value={mailState.email} />
                <input placeholder='Phone Number' id='phone' name="phone" onChange={handleStateChange} value={mailState.phone} />
                <textarea placeholder='Message' id='message' name="message" onChange={handleStateChange} value={mailState.message} />
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