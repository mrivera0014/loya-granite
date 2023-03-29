import React, { useEffect, useState } from 'react'
import './About.css'

// import logoImage from './assets/LOYA-Logo-Color-WO-Text.png'
import fireplace from '../../assets/fireplace4.jpg'
import { gsap } from 'gsap/all'
import Reviews from '../Reviews/Reviews'

const About = () => {

    useEffect(() => {

        // gsap.from('.granite', { duration: 2.5, x: '100', ease: 'power3.out', opacity: 0 })
        // gsap.from('.logoImage', { duration: 2.5, x: '-100', ease: 'power3.out', opacity: 0 })
        gsap.from('.aboutLoyaGraniteSection', { duration: 2.5, x: '-100', opacity: 0 })
        // gsap.from('.reachUs', { duration: 2.5, x: '-100', opacity: 0 })
        // gsap.from('.moreAboutLoyaGranite', { duration: 2.5, x: '-100', opacity: 0 })
    })

    const [spanish, setSpanish] = useState(false)

    const toggleText = () => {

        if (spanish === false) {
            // console.log('switch to spanish')
            return setSpanish(true)
        }
        else {
            return setSpanish(false)
        }
    }

    return (

        <div className='aboutContain'>
            <div className='granite' alt='kitchen-white-counters'  >
            </div>

            <h1 className='aboutTitle'>About Us</h1>
            <div className='aboutbottom'>
                <section className='aboutLoyaGraniteSection'>
                    {spanish === false ? (
                        <p className='spanishToggle' onClick={toggleText}>Español</p>
                    ) : (
                        <p className='spanishToggle' onClick={toggleText}>English</p>

                    )}

                    {spanish === false ? (
                        <div>
                            <h3 className='loyaGranite'>WHO IS LOYA GRANITE?</h3>
                            <p className='loyaGraniteName'>Loya Granite</p><p className='aboutLoya'> is a family-owned and operated granite installation business that boasts almost two decades of invaluable experience in the industry. Our establishment is conveniently situated in Thornton, CO, allowing us to deliver our exceptional services to the Denver Metro area. We take immense pride in our ability to cater to a vast range of clients, extending our reach as far as Nebraska. </p>
                            <br></br>
                            <br></br>
                            <h3>OUR WORK</h3>
                            <p>
                                At Loya Granite, we deeply value the importance of high-quality materials, fair pricing, and excellent craftsmanship. We prioritize maintaining clear and open channels of communication with our clients, starting from the selection of materials and extending all the way to the finished product. We understand that home renovation is a significant investment that demands great attention to detail. Our commitment to establishing lasting relationships with our clients ensures that we consistently exceed expectations and bring their visions to life.
                            </p>
                            <br />
                            <p>
                                Our business caters to a diverse clientele that includes homeowners, real estate agents, and more. We specialize in an extensive range of materials, including but not limited to, marble, granite, quartz, and the newest addition to our collection, porcelain. Our expertise extends to a variety of projects, such as kitchen countertops, backsplashes, bathrooms, fireplaces, and more, ensuring that our clients receive top-notch results for every aspect of their home design needs.
                            </p>
                        </div>

                    ) : (
                        <div>
                            <h3 className='loyaGranite'>ACERCA DE LOYA GRANITE</h3>
                            <p className='loyaGraniteName'>Loya Granite</p><p className='aboutLoya'> es un negocio familiar con casi dos décadas de experiencia. Estamos ubicados en Thornton, Colorado y servimos en el área de Denver. </p>
                            <br></br>
                            <br></br>
                            <h3>NUESTRO TRABAJO</h3>
                            <p>
                                Como microempresa, entendemos la importancia de ofrecer materiales de alta calidad a precios justos, y de proporcionar un trabajo artesanal con excelencia. En Loya Granite, nos aseguramos de guiarlos en la selección del mejor material para su proyecto, ya que sabemos que renovar un hogar es una gran inversión que requiere mucha atención y cuidado.

                            </p>
                            <br />
                            <p>
                                Trabajamos con una variedad de clientes, incluyendo dueños de casa, agentes de bienes y raíces, y contratistas, entre otros. Ofrecemos una amplia gama de materiales de alta calidad, como mármol, granito, cuarzo y más recientemente porcelana. Contamos con una amplia experiencia en trabajos de remodelación y diseño de interiores, nuestra especialidad son cocinas, baños y chimeneas, aunque podemos trabajar en otros espacios según las necesidades de nuestros clientes.
                            </p>
                            <br />
                            <p>
                                Estamos comprometidos en brindar un servicio personalizado y de alta calidad, nos esforzamos por cumplir con sus expectativas en todo momento.
                            </p>
                        </div>
                    )}

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