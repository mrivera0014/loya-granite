import React from 'react'
import { Link } from "react-router-dom";

import { BsFillTelephoneFill, BsFacebook, BsTypeH1 } from "react-icons/bs";
import { NavItems } from '../NavItems/NavItems';
import './Footer.css'


const footer = () => {
  return (
    <div className={`footer`}>
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
      <section className='socialMedia'>
        <p>Follow us on Facebook :</p>
        <a
          className="facebook icon navInfo"
          href="https://www.facebook.com/loyagranite"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook className='facebookLogo' />
        </a>
      </section>
      <br></br>
      <div className='footer-copyright'>
        <p className={`loyaCopyright`}>&copy; 2022 Loya Granite  </p>
        <p className={`mscCopyright`}>Developed by MSC &copy; </p>

      </div>

    </div>
  )
}

export default footer;