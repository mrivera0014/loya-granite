import React from 'react'
import { Parallax } from 'react-parallax'
import quartziteImg from '../../assets/quartzite-cesari-grey-by-daltile.jpg'


function QuartziteImg() {
    return (
        <Parallax bgImage={quartziteImg} bgImageAlt="cesari-grey-quartzite" strength={500} className='quartziteImg'>
        </Parallax>
    )
}

export default QuartziteImg