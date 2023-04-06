import React, { Component } from 'react'
import './Logos.css'

import arizonaTile from '../../assets/arizonaTileLogo.png'
import arizonaTile2 from '../../assets/arizonaTileLogo2.png'
import arizonaTile3 from '../../assets/arizonaTileLogo3.jpg'
import crossvilleStudiosLogo from '../../assets/crossvilleStudiosLogo.png'
import crossvilleStudiosLogo2 from '../../assets/crossvilleStudiosLogo2.jpg'
import daltileLogo from '../../assets/daltileLogo.png'
import ESILogo from '../../assets/ESI-Logo.jpg'
import stoneCollectionLogo from '../../assets/theStoneCollectionLogo.jpg'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Logos extends Component {
    render() {

        // const logoList = [
        //     {
        //         src: '../../assets/arizonaTileLogo.png',
        //         alt: 'arizonaTileLogo providers',
        //         cName: 'arizonaTileLogo provider',

        //     },
        //     {
        //         src: { crossvilleStudiosLogo },
        //         alt: 'crossvilleStudiosLogo',
        //         cName: 'crossvilleStudiosLogo provider',
        //     },
        //     {
        //         src: { ESILogo },
        //         alt: 'ESILogo',
        //         cName: 'ESILogo provider',
        //     },
        //     {
        //         src: { stoneCollection },
        //         alt: 'stoneCollectionLogo',
        //         cName: 'stonecolletionLogo provider',
        //     },
        // ]

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        // infinite: true,
                        // dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div>
                <section className='providers'>
                    <h2 className='graniteProviders'>Our Providers</h2>
                    <Slider {...settings}>
                        <a target='_blank' href='https://www.arizonatile.com/' className='providerLink'>
                            <img src={arizonaTile} className='arizonaLogo provider' /></a>
                        <a target='_blank' href='https://www.crossvillestudios.com/' className='providerLink'>
                            <img src={crossvilleStudiosLogo} className='crossvilleLogo provider' /></a>
                        <a target='_blank' href='https://www.daltile.com/' className='providerLink'>
                            <img src={daltileLogo} className='daltileLogo provider' /></a>
                        <a target='_blank' href='https://edgebanding-services.com/' className='providerLink'>
                            <img src={ESILogo} className='ESILogo provider' /></a>
                        <a target='_blank' href='https://thestonecollection.com/' className='providerLink'>
                            <img src={stoneCollectionLogo} className='stoneCollectionLogo provider' /></a>
                        {/* {logoList.map((item, index) => {
                        return (
                            <li >
                                <img src={item.src}
                                    key={item.src} className={item.cName} alt={item.alt} />
                            </li>


                        )
                    })} */}
                    </Slider>
                </section>
            </div >
        )
    }
}