import React from 'react'
import './Footer.css'
const footer = () => {
  return (
    <div className={`footer`}>
      <div className='footerInfo'>
        <h4 className={`footer-header`}>Loya Granite</h4>
        {/* <p className={`footer-contact`}>contact address</p> */}

        <p className={`footer-phone`}>Phone: (661) 466-3286</p>
        <p className={`footer-email`}>Email: dieguito.loyagranite19@gmail.com</p>
      </div>
      <div className='footer-copyright'>
        <p className={`loyaCopyright`}>&copy; 2022 Loya Granite  </p>
        <p className={`mscCopyright`}>Developed by MSC &copy; </p>

      </div>

    </div>
  )
}

export default footer;