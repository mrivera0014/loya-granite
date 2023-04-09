import React from 'react'
// import * as FaIcons from 'react-icons/fa'
// import * as DiIcons from 'react-icons/fa'

import AboutMePic from '../../assets/Images/AboutMePic.jpg'
import './ProfileCard.css'

function ProfileCard() {
    return (
        <div className='body'>
            <h1 className='aboutTitle'>About Me</h1>
            <figure className='aboutMe'>
                <img className='profileImg profile' src={AboutMePic} alt='maribel-rivera'></img>
                <p className='aboutMePar profile'>
                    <p>
                        Hello, my name is Maribel Rivera although I do prefer to go by Marble!
                    </p>
                    <p>
                        My goal for the past few years is to learn code to the best of my ability and become a programmer. In 2021 I took the first step towards that goal by taking University of Denver's Coding Bootcamp and in April I received my Full Stack Web Development certificate. During this time I learned HTML, CSS, Javascript, React.js, and Node.js. The more I learned the more excited I became to put my new skills to the test. I love learning, problem solving, teaching others, and cannot wait to use my passion for coding in my new role as a web developer.
                    </p>
                </p>

            </figure>

        </div>
    )
}

export default ProfileCard