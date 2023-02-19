import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavItems } from "../NavItems/NavItems";
import logo from "../Modal/assets/LOYA-logo-Color.png";
import { BsFillTelephoneFill, BsFacebook, BsTypeH1 } from "react-icons/bs";
import { AiOutlineMail, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Nav.css";

function Navbar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        //if closed then will open menu
        if (clicked === false) {
            console.log("open");
            return setClicked(true);
            //if open then close menu
        }
        if (clicked === true) {
            console.log("close");
            return setClicked(false);
        }
    };
    return (
        <>
            <nav>
                <Link className="logoLink" to="/">
                    <img className={"logo"} src={logo} alt="loya-granite-logo" />
                </Link>
                <div className={clicked === true ? "navbar active" : "navbar"}>
                    {NavItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.path}>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </div>
                <div className="mobile">
                    {clicked === false ? (
                        //calling handleClick function to open/close
                        <AiOutlineMenu className="menuBars" onClick={handleClick} />
                    ) : (
                        <AiOutlineClose className="menuClose" onClick={handleClick} />
                    )}
                </div>
                {/* <div className="navQuickInfo">
                    <p className="navInfo espanol">Se Habla Español </p>
                    <a className="phoneNumber navInfo icon" href="tel: 303-997-6166">
                        <BsFillTelephoneFill />
                    </a>
                    <a
                        className="facebook icon navInfo"
                        href="https://www.facebook.com/loyagranite"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsFacebook />
                    </a>
                    <Link className="icon navInfo" to="/Contact">
                        <AiOutlineMail />{" "}
                    </Link>
                </div> */}
            </nav>
        </>
    );
}
export default Navbar;