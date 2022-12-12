import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { NavItems } from "../NavItems/NavItems";
import './Nav.css'

const Nav = () => {

    // clicked = initial state // setClicked function that changes initial change
    const [clicked, setClicked] = useState(0)
    const toggle = index => {

        // console.log('ive been clicked')

        if (clicked === index) {
            // console.log('ive been clicked x2')
            // if clicked and already active then close
            return setClicked(null)
        }
        setClicked(index)
    }

    return (
        <div>
            <main>
                <nav className="fullNav">
                    {NavItems.map((item, index) => {
                        return (
                            <section className="container">
                                <h2 onClick={() => toggle(index)} key={index} className={item.cName}> {item.title}</h2>

                                {clicked === index ? (
                                    <article>
                                        <item.location />
                                    </article>
                                ) : null}

                            </section>
                        )
                    })}
                </nav>
            </main>
        </div>
    )
}

function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" replace>
                Home
            </Link>
            <Link to="/projects" replace>
                Projects
            </Link>
            <Link to="/contact" replace>
                Contact
            </Link>
        </nav>
    )
}
// export default Nav
export default Navbar