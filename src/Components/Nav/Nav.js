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
                        <li key={index} >
                            <Link className={item.cName} to={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
                <div className="navQuickInfo">
                    <a className='phoneNumber navInfo icon' href="tel: 303-997-6166"><BsFillTelephoneFill /> 303-997-6166</a>
                    <a className="facebook icon navInfo" href="https://www.facebook.com/loyagranite" target='_blank' rel='noreferrer'><BsFacebook /></a>
                    <Link className="icon navInfo" to='/Contact'><AiOutlineMail /> </Link>
                </div>

            </nav>
        </div>
    )
}

export default Navbar