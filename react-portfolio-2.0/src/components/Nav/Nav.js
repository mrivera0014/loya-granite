import React from 'react'
import './Nav.css'

function Nav() {
    return (
        <>
            <nav className='navbar'>
                <ul className='navItems'>
                    {/* <a className='navItem' href={`#home`}>Home</a> */}
                    <a className='navItem' href={`#about`}>About Me</a>
                    <a className='navItem' href={`#projects`}>Projects</a>
                    <a className='navItem' href={`#contact`}>Contact Me</a>
                </ul>
            </nav>
        </>
    )
}

export default Nav

// When Link is added Error: You should not use Link outside a Router appears and when router added in app.js got Error: Cannot ready property location of undefined