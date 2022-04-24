import React, { useEffect } from 'react'
import './About.css'

import logoImage from '../About/assets/LOYA-Logo-Color-WO-Text.png'
import { gsap } from 'gsap/all'

const About = () => {

    useEffect(() => {
        gsap.from('.logoImage', { duration: 2.5, y: '-100', ease: 'power3.out', opacity: 0 })
        gsap.from('.aboutLoyaGraniteSection', { duration: 2.5, x: '-100', opacity: 0 })
        gsap.from('.whoIsLoyaGranite', { duration: 2.5, x: '-100', opacity: 0 })
        gsap.from('.moreAboutLoyaGranite', { duration: 2.5, x: '-100', opacity: 0 })
    })

    return (
        <div className='aboutContain'>
            <section className='aboutLoyaGraniteSection'>
                <h3 className='loyaGranite'>ABOUT LOYA GRANITE</h3>
                <p className='loyaGraniteName'>Loya Granite</p><p className='aboutLoya'> is located in the Denver, Co. We strive to provide Colorado with affordable and professional granite installation. </p>

                <p className='aboutLoya'>We cover everything from kitchens, baths, fireplaces, reception areas and more!</p>

                <p className='aboutLoya'>We provide granite stone, quartz, marble, solid stone, etc. If you have any questions please do not hesitate to contact us! </p>
            </section>
            <section className='whoIsLoyaGranite'>
                <h3 className='loyaGranite'>WHO IS LOYA GRANITE?</h3>
                <p className='aboutLoya'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
            </section>
            <section className='moreAboutLoyaGranite'>
                <h3 className='loyaGranite'>MORE INFO HERE</h3>
                <p className='aboutLoya'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            </section>
            {/* <div className='sidebar'></div> */}
            <img className='logoImage' src={logoImage} alt='loya-granite-logo-without-text' />

        </div>
    )
}

export default About