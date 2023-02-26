import React from 'react'
import { Link } from "react-router-dom";

import { BsFillTelephoneFill, BsFacebook, BsTypeH1 } from "react-icons/bs";
import { NavItems } from '../NavItems/NavItems';
import './Footer.css'


const footer = () => {
  return (
    <div>
      <div className='footer'>
        <section className='footerInfo'>
          <h4 className={`footer-header`}>Loya Granite</h4>
          <p className={`footer-address`}>851 E. 70th Ave, Thornton, CO.</p>
          <a className={`footer-phone`} href="tel: 303-997-6166"> <BsFillTelephoneFill /> 303-977-6166</a>
          <p className={`footer-email`}>Email: dieguito.loyagranite19@gmail.com</p>
        </section>

        <section >
          {NavItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className='footerLinks' to={item.path}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </section>
        <a className='haLogo' href="http://www.homeadvisor.com/rated.Loyagranite.109184108.html" target='_blank'><img alt="Loya Granite & Design - Reviews on Home Advisor" src="http://www.homeadvisor.com/images/sp-badges/soap-solid-border.png?sp=109184108&key=e9fdc08ab40001e2c4515b1539c8e690" /></a>
        <section className='socialMedia'>
          <p className='facebook'>Follow us on Facebook :</p>
          <a
            className="facebook facebookIcon"
            href="https://www.facebook.com/loyagranite"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook className='facebookLogo' />
          </a>
        </section>
        <br></br>

      </div>
      <div>
        <div className='footer-copyright'>
          <p className={`loyaCopyright`}>&copy; 2023 Loya Granite </p>
          {/* <p className={`mscCopyright`}>Developed by MSC &copy; </p> */}

        </div>
      </div>
    </div>
  )
}

export default footer;