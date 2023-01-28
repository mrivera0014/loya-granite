import React, { useEffect } from 'react'
import { gsap } from 'gsap/all'
import './banner.css'
import { _config } from 'gsap/gsap-core'

const Banner = () => {

    useEffect(() => {
        //creating my own effect
        gsap.registerEffect({
            name: 'spanish',
            effect: (targets, config) => {
                let tl = gsap.timeline({ delay: 2 });
                tl.to(targets, { opacity: 0, duration: config.duration / 2 });
                tl.add(() => targets[0].innerText = config.text);
                tl.to(targets, { opacity: 1, duration: config.duration });
                return tl
            },
            defaults: { duration: 1 },
            extendTimeline: true

        })
        //create timeline that will continue repeatedly 
        var languageSwap = gsap.timeline({ repeat: -1 });
        //swaps text to spanish
        languageSwap.spanish('.title', { text: 'Preguntas?' })
            .spanish('.questions', { text: 'Por favor, envienos un mensaje o llamenos por telefono.' })
            //swap text back to english
            .spanish('.title', { text: 'Lets talk about your project' })
            .spanish('.questions', { text: 'Have questions about materials? Pricing? Reach out to us, we would love to discuss your options!' });

    });


    return (
        <div>
            <header className='banner'>
                <section className=' sections sectionEnglish'>
                    <h2 className='title englishHeader'>Lets talk about your project</h2>
                    <p className='questions englishHeader'> Have questions about materials? Pricing? Reach out to us, we would love to discuss your options!</p>
                </section>
                {/* <section className='sections sectionEspanol'>
                    <h2 className='title espanolhHeader'>Preguntas?</h2>
                    <p className='questions espanolHeader'> Por favor, envienos un mensaje or llamenos por telefono. </p>
                </section> */}
            </header>
        </div>
    )
}

export default Banner