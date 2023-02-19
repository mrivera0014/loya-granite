import React, { useEffect } from 'react'
import './About.css'

// import logoImage from './assets/LOYA-Logo-Color-WO-Text.png'
import fireplace from '../../assets/fireplace4.jpg'
import { gsap } from 'gsap/all'
import Reviews from '../Reviews/Reviews'

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
            <div className='granite' alt='kitchen-white-counters'  ></div>
            <h1 className='aboutTitle'>About Us</h1>
            <div className='aboutbottom'>
                <section className='aboutLoyaGraniteSection'>
                    <h3 className='loyaGranite'>WHO IS LOYA GRANITE?</h3>
                    <p className='loyaGraniteName'>Loya Granite</p><p className='aboutLoya'> is a family-owned and operated business with nearly two decades of experience . We are located in Thornton, CO. and proudly serve the Denver Metro area and have gone as far as Nebraska! </p>
                    <br></br>
                    <br></br>
                    <h3>OUR WORK</h3>
                    <p>
                        When you choose Loya Granite we make sure to communicate with you every step of the way, from choosing the correct material to the finished product. As a small business we understand the importance of high quality materials, fair pricing, and fine craftsmanship .  We also know that renovating one's home is a major investment that requires the utmost attention.  Unlike other installers we will never take shortcuts, instead at Loya Granite we look to create connections with our customers and look forward to bringing their ideas to life.
                    </p>
                    <br />
                    <p>We provide service to home-owners, real estate agents, … etc. Some of our materials include but are not limited to marble, granite, quartz, and most recently porcelain.
                    </p>
                    <br />
                    <p>
                        Some of our work includes kitchen countertops, backsplash, bathrooms, fireplaces, and more! Our turnaround time varies from 3 days to a week and if your material is ready we will work hard to finish your project in less than two weeks!
                    </p>
                </section>
                <img src={fireplace} alt='graniteFireplace' className='fireplace' />
                {/* <section className='reachUs'>
                    <h3 className='loyaGranite'>Ready for the next step?</h3>
                    <p className='aboutLoya'>Let's talk about your ideas! Feel free to reach out to us, we will gladly answer any questions you have and our estimates are free of charge. Our business hours are 9-5 Monday through Friday. Give us a call or send us an email and we will get back to you as soon as possible. We can't wait to get started on your project!  </p>
                </section> */}
                {/* <img className='logoImage' src={logoImage} alt='loya-granite-logo-without-text' /> */}
            </div>
            <Reviews />
        </div>
    )
}

export default About