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
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        }
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