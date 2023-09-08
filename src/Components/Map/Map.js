import React from 'react'

import './Map.css'

function Map() {
    return (
        <div className='container'>
            <h3>Our Location</h3>
            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.233441533008!2d-104.97892368824327!3d39.82418349137177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c777cf4552809%3A0x33e24bace1d2a33c!2s851%20E%2070th%20Ave%2C%20Denver%2C%20CO%2080229!5e0!3m2!1sen!2sus!4v1683741155554!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Map