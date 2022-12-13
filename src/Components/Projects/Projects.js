import React, { useState, useRef, useEffect } from 'react'
import { assists, itemOne, itemTwo, itemThree } from './projectAssets/projectAssists';
import './projects.css'
import { gsap } from "gsap/all"



const ProjectsView = () => {


  const [projectToggle, setProjectToggle] = useState(false);
  const [modalToggle, setModalToggle] = useState("");



  let kitchen = itemOne;
  let bathroom = itemTwo;
  let firePlace = itemThree;





  const closeModal = (item) => {

    setProjectToggle(false)
  }

  const openModal = (item) => {
    let modalToggleValue = ++item;
    setProjectToggle(true)
    if (modalToggleValue == 1) {
      setModalToggle("kitchen")
    }
    if (modalToggleValue == 2) {
      setModalToggle("bathroom")
    }
    if (modalToggleValue == 3) {
      setModalToggle("fireplace")
    }

  }

  useEffect(() => {
    gsap.from('.projects', { duration: 2.5, y: '-100', ease: 'power3.out', opacity: 0 })
  })


  return (

    <div className={`projects`}>
      <section className='projectsInfo'>
        <p>At Loya Granite we take pride in our work and are not afraid to take on a challenge. We look forward to collaborating with out customers to develop a plan that will ensure customer satisfaction.</p>
      </section>
      <section className='projectsInfo2'>
        <p>Choose from materials such as granite, quartz, marble, and much more! </p>
      </section>

      {/* mapping the projects */}
      {assists.map((item, index) => {

        return (
          <div className='projects_photos' key={index}>
            <button className={`projectItems`} onClick={() => openModal(index)}>
              <h1 className={`project_name`}>{item.name}</h1>
              <img src={item.item} className={`project_item-img`}></img>
            </button>
            <div>
              {/* mapping the modal pictures */}
            </div>
          </div>
        )


      })}

      <div className={`modal ${projectToggle ? "show" : ""}`}>

        <div className={`modal-pictures`}>
          <button className={`close-button`} onClick={() => closeModal(projectToggle)}>X</button>

          <div className={`${modalToggle == "kitchen" ? "show" : "hide"}`}>
            <h2 className={`modal-header`}>Kitchens</h2>
            <div className={`modal-pictures-sub`}>
              {kitchen.map((item, index) => {
                return (
                  <img className={`modal-pictures-picture`} src={item.itemitem}  ></img>
                )
              }
              )
              }
            </div>
          </div>
          <div className={` ${modalToggle == "bathroom" ? "show" : "hide"}`}>
            <h2 className={`modal-header`}>Bathroom</h2>
            <div className={`modal-pictures-sub`}>

              {bathroom.map((item, index) => {
                return (
                  <img className={`modal-pictures-picture`} src={item.itemitem}  ></img>
                )
              }
              )
              } </div>
          </div>
          <div className={` ${modalToggle == "fireplace" ? "show" : "hide"}`}>
            <h2 className={`modal-header`}>Fire Places</h2>
            <div className={`modal-pictures-sub`}>

              {firePlace.map((item, index) => {
                return (
                  <img className={`modal-pictures-picture`} src={item.itemitem}  ></img>
                )
              }
              )
              }
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}

export default ProjectsView