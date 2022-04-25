import React, { useEffect } from 'react';
import './Modal.css';
import { gsap } from 'gsap/all';
import logo from './assets/LOYA-logo-Color.png'

const Modal = () => {
  useEffect(() => {
    gsap.to(".divImage", { opacity: 0 })
    let pictureTimeLine = gsap.timeline({ repeat: Infinity })
    pictureTimeLine
      .to('.divBlackMarblePattern', { opacity: 50, duration: 3.5 })
      .to('.divBlackMarblePattern', { opacity: 0, duration: 3 })

      .to('.divCloseUpBlackMarble', { opacity: 50, duration: 3.5 })
      .to('.divCloseUpBlackMarble', { opacity: 0, duration: 3 })
      .to('.divStoneFloorTexture', { opacity: 50, duration: 3.5 })
      .to('.divStoneFloorTexture', { opacity: 0, duration: 3 })
    let logoTimeline = gsap.timeline({ repeat: Infinity })
    logoTimeline
      .to('.logo', { color: "white", duration: 3.5, })
      .to('.logo', { color: "white", duration: 3, })
      .to('.logo', { color: "black", duration: 3.5, })
      .to('.logo', { color: "black", duration: 3, })
      .to('.logo', { color: "grey", duration: 3.5, })
      .to('.logo', { color: "gray", duration: 3, })


  }, [])
  return (
    <div className={"Modal"}>
      <div className='divBlackMarblePattern divImage'></div>
      <div className='divCloseUpBlackMarble divImage'></div>
      <div className='divStoneFloorTexture divImage'></div>
      <h2 className={"logo"}>logo</h2>
      {/* <img className={"logo"} src={logo} /> */}


    </div>
  )
}

export default Modal