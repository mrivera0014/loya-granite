import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { NavItems } from "../NavItems/NavItems";
import './Nav.css'


function Navbar() {
    return (
        <div>
            <nav className="nav">
                {/* ------Mapping over NavItems------ */}
                {NavItems.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </nav>
        </div>
    )
}

export default Navbar
