import React, { Component } from 'react'
import './Contact.css'

import axios from 'axios'

class Contact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        message: '',
        sent: false
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handlePhone = (e) => {
        this.setState({
            phone: e.target.value
        })
    }
    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }


    contactSend(e) {
        console.log('contact send working')
        e.preventDefault();
        console.log('prevent working')
        let data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message
        }

        axios.post('api/contact', data)
            .then(res => {
                this.setState({
                    sent: true,
                }, this.resetForm())
            }).catch(() => {
                console.log('message not sent')
            })
    }


    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            phone: '',
            message: '',
        })

        setTimeout(() => {
            this.setState({
                sent: false,
            })
        }, 3000);
    }



    render() {
        return (
            <div className='contactContain' >
                {/* creating contact form */}
                <form form id='form' className='form' >
                    <h3 className='formTitle'>Let's talk about your project</h3>
                    <input placeholder='Name' id='name' value={this.state.name} onChange={this.handleName} />
                    <input placeholder='Email' id='email' value={this.state.email} onChange={this.handleEmail} />
                    <input placeholder='Phone Number' id='phone' value={this.state.phone} onChange={this.handlePhone} />
                    <textarea placeholder='Message' id='message' value={this.state.message} onChange={this.handleMessage} />
                    <button id='submit' type='submit' onSubmit={this.contactSend} />
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
            </div >
        )
    }


}

export default Contact