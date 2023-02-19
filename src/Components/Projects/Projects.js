import React, { useState, useRef, useEffect } from 'react'
import { assists, itemOne, itemTwo, itemThree } from './projectAssets/projectAssists';
import './projects.css'
import { gsap } from "gsap/all"
import e from 'cors';



const ProjectsView = () => {


  const [projectToggle, setProjectToggle] = useState(false);
  const [modalToggle, setModalToggle] = useState("");
  const [bigPicToggle,setBigPicToggle] = useState("filler");



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
  let bigPicFunction = (item) =>{
  

    setBigPicToggle(item.itemitem);
    
  }

  // useEffect(() => {
  //   gsap.from('.projects', { duration: 2.5, y: '-100', ease: 'power3.out', opacity: 0 })
  // })


  return (

    <div className={`projects`}>
   
     {bigPicToggle == "filler" ? <div className='bigPicture bigPictureDiv' >

  <section className='projectsInfo'>
    <p>At Loya Granite we take pride in our work and are not afraid to take on a challenge. We look forward to collaborating with out customers to develop a plan that will ensure customer satisfaction.</p>
  </section>
  <section className='projectsInfo2'>
    <p>Choose from materials such as granite, quartz, marble, and much more! </p>
  </section>
</div> : <img className='bigPicture'src={bigPicToggle}></img>}
          

      {/* mapping the projects */}

   
      <div className='photoCollection'>
      <div className='photoMenu'>
      {assists.map((item, index) => {

return (
  <div className='projects_photos' key={index}>
    <button className={`projectItems`} onClick={() => openModal(index)}>
      <h1 className={`project_name`}>{item.name}</h1>
    </button>

  </div>
)


})}
     </div>

      <div className={`modal ${projectToggle ? "show" : ""}`}>

        <div className={`modal-pictures`}>


                

          <div className={`${modalToggle == "kitchen" ? "show" : "hide"}`}>

            <div className={`modal-pictures-sub`}>
              {kitchen.map((item, index) => {
                return (
                  <div className={`picture-container`} onClick={() => bigPicFunction(item)}>
                  <img className={`modal-pictures-picture`} src={item.itemitem}  ></img>
                  </div>
                )
              }
              )
              }
            </div>
          </div>
          <div className={` ${modalToggle == "bathroom" ? "show" : "hide"}`}>

            <div className={`modal-pictures-sub`}>

              {bathroom.map((item, index) => {
                return (
                  <div className={`picture-container`} onClick={() => bigPicFunction(item)}>
                  <img className={`modal-pictures-picture`} src={item.itemitem}  ></img>
                  </div>
                )
              }
              )
              } </div>
          </div>
          <div className={` ${modalToggle == "fireplace" ? "show" : "hide"}`}>

            <div className={`modal-pictures-sub`}>

              {firePlace.map((item, index) => {
                return (
                  
                  <div className={`picture-container`} onClick={() => bigPicFunction(item)}>
                  <img className={`modal-pictures-picture`} src={item.itemitem}  ></img>
                  </div>
                )
              }
              )
              }
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default ProjectsView