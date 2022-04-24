import React, { useState } from "react";
import { NavItems } from "../NavItems/NavItems";
import './Nav.css'

const Nav = () => {

    // clicked = initial state // setClicked function that changes initial change
    const [clicked, setClicked] = useState(false)

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
                                        <p>
                                            <p className={item.title}>{item.info}</p>
                                            <item.location />
                                        </p>
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

export default Nav