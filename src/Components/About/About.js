import React, { useEffect } from 'react'
import './About.css'

import logoImage from './assets/LOYA-Logo-Color-WO-Text.png'
import graniteImage from '../Projects/projectAssets/assets/kitchen_counter_island_counters_lighter_black_cabinet.jpg'
import { gsap } from 'gsap/all'

const About = () => {

    useEffect(() => {

        // gsap.from('.granite', { duration: 2.5, x: '100', ease: 'power3.out', opacity: 0 })
        gsap.from('.logoImage', { duration: 2.5, x: '-100', ease: 'power3.out', opacity: 0 })
        gsap.from('.aboutLoyaGraniteSection', { duration: 2.5, x: '-100', opacity: 0 })
        gsap.from('.reachUs', { duration: 2.5, x: '-100', opacity: 0 })
        // gsap.from('.moreAboutLoyaGranite', { duration: 2.5, x: '-100', opacity: 0 })
    })

    return (

        <div className='aboutContain'>
            <div className='granite' src={graniteImage}  ></div>
            <div className='aboutbottom'>
                <section className='aboutLoyaGraniteSection'>
                    <h3 className='loyaGranite'>ABOUT LOYA GRANITE</h3>
                    <p className='loyaGraniteName'>Loya Granite</p><p className='aboutLoya'> is a family owned and operated business located in Thornton, CO. We proudly serve the Denver Metro area and have done projects as far as Nebraska! As a small business we understand the importance of high quality granite and fair pricing. We proudly stand behind our work and are committed to bring our customers' ideas to life. We have experience in kitchen counters, bathrooms, fireplaces, and more! </p>
                </section>
                <section className='reachUs'>
                    <h3 className='loyaGranite'>Ready for the next step?</h3>
                    <p className='aboutLoya'>Let's talk about your ideas! Feel free to reach out to us, we will gladly answer any questions you have and our estimates are free of charge. Our business hours are 9-5 Monday through Friday. Give us a call or send us an email and we will get back to you as soon as possible. We can't wait to get started on your project!  </p>
                </section>
                <img className='logoImage' src={logoImage} alt='loya-granite-logo-without-text' />
            </div>

        </div>
    )
}

export default About