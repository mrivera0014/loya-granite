import React from "react";
import { NavItems } from "../NavItems/NavItems";
import './Nav.css'

function Nav() {


    return (
        <div>
            <main>
                <nav className="fullNav">
                    {NavItems.map((item, index) => {
                        return (
                            <section>
                                <h2> {item.title}</h2>
                                <article>{item.info} </article>
                            </section>
                        )
                    })}
                    <div>
                        About Us
                    </div>
                </nav>
            </main>
        </div>
    )
}

export default Nav