// import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { NavItems } from "../NavItems/NavItems";
import logo from '../Modal/assets/LOYA-logo-Color.png'
import { BsFillTelephoneFill, BsFacebook } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import './Nav.css'


function Navbar() {

    return (
        <div>
            <nav className="nav">
                <Link to='/'><img className={"logo"} src={logo} alt='loya-granite-logo' /></Link>
                {/* ------Mapping over NavItems------ */}
                {NavItems.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
                <div className="navInfo">
                    <a href="tel: 661-466-3286" className="phoneNumber icon"><BsFillTelephoneFill /> (661) 466-3286</a>
                    <a href="https://www.facebook.com/loyagranite" target='_blank' rel='noreferrer' className="facebook icon"><BsFacebook /></a>
                    <Link className="icon" to='/Contact'><AiOutlineMail /> </Link>
                </div>

            </nav>
        </div>
    )
}

export default Navbar