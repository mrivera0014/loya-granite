import React from 'react'
import { Parallax } from 'react-parallax'
import graniteImg from '../../assets/granite-black-pearl.jpg'


function GraniteImg() {
    return (
        <Parallax bgImage={graniteImg} bgImageAlt="black-pearl-granite" strength={500} className='graniteImg'>
        </Parallax>
    )
}

export default GraniteImg