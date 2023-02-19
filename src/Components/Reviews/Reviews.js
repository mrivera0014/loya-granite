import React from 'react'
import { reviewItems } from '../ReviewItems/ReviewItems'

function Reviews() {
    return (
        <div>
            <article>
                {reviewItems.map((item, index) => {
                    return (
                        <div className={item.cName} key={item.reviewID}>
                            <h4>{item.ratingValue} {item.firstName} {item.lastName}</h4>
                            <h5>{item.reviewTitle}</h5>
                            <p>{item.review}</p>

                        </div>

                    )
                })}
            </article>

        </div>
    )
}

export default Reviews