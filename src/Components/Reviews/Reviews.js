import React, { Component } from 'react'
import { reviewItems } from '../ReviewItems/ReviewItems'
import { BsFillStarFill } from 'react-icons/bs'
import "./Reviews.css"

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Reviews extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
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
                <h2>Reviews</h2>
                <Slider {...settings}>
                    {reviewItems.map((item, index) => {
                        return (
                            <div {...settings}>
                                <div className={item.cName} key={item.reviewID}>
                                    <div className='cardTop'>
                                        <a target='_blank' href={item.sourceURL} className='advisorLink'>Home Advisor</a>

                                        <h4 className='reviewName'><BsFillStarFill className='starIcon' /> {item.ratingValue} {item.firstName} {item.lastName}</h4>

                                        <h5 className='reviewTitle'>{item.reviewTitle}</h5>
                                        <p className='reviewDate'>{item.date}</p>
                                    </div>
                                    <div className='cardBody'>
                                        <p className='review'>{item.review}</p>
                                    </div>


                                </div>
                            </div>
                        )
                    })}
                </Slider>

            </div >
        )
    }
}