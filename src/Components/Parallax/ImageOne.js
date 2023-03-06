import React from 'react'
import { Parallax } from 'react-parallax'
import Img from '../../assets/kitchen1.jpg'

import './ImageOne.css'


function ParallaxImg() {
    return (
        <Parallax bgImage={Img} bgImageAlt="kitchenWhiteGranite" strength={500} className='imageOne'>
        </Parallax>
    )
}

export default ParallaxImg