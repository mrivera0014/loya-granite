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
            {/* <section className='moreAboutLoyaGranite'>
                <h3 className='loyaGranite'>MORE INFO HERE</h3>
                <p className='aboutLoya'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            </section> */}
            {/* <div className='sidebar'></div> */}
            <img className='logoImage' src={logoImage} alt='loya-granite-logo-without-text' />
            </div>

        </div>
    )
}

export default About