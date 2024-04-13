import React from 'react'
import { Parallax } from 'react-parallax'
import marbleImg from '../../assets/marble-carrara-white.jpg'


function MarbleImg() {
    return (
        <Parallax bgImage={marbleImg} bgImageAlt="carrara-marble" strength={500} className='marbleImg'>
        </Parallax>
    )
}

export default MarbleImg