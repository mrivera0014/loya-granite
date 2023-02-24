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
                        slidesToShow: 3,
                        slidesToScroll: 3,
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
                <Slider {...settings}>
                    {reviewItems.map((item, index) => {
                        return (
                            <div {...settings}>
                                <div className={item.cName} key={item.reviewID}>
                                    <h4 className='reviewName'><BsFillStarFill className='starRating' /> {item.ratingValue} {item.firstName} {item.lastName} {item.date}</h4>
                                    <h5 className='reviewTitle'>{item.reviewTitle}</h5>
                                    <p className='review'>{item.review}</p>
                                    <a target='_blank' src={item.sourceURL}>Home Advisor</a>

                                </div>
                            </div>
                        )
                    })}
                </Slider>

            </div >
        )
    }
}