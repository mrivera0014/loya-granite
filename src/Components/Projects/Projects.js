import React, {useState,useRef,useEffect} from 'react'
import {assists,itemOne,itemTwo,itemThree} from './projectAssets/projectAssists';
import  './projects.css'
import {gsap} from "gsap/all"



const Projects = () => {
  var itemChosen = itemTwo;


  const [projectToggle, setProjectToggle] = useState(false)


  const closeModal = (item) =>{
    let values = (item + 1);

    if (values === false) return;
    return setProjectToggle(null)
  }
  const chosenModal  = (item) =>{
    let values = (item + 1);

    setProjectToggle(values)

  }
 

  return (
    
  <div className={`projects`}>

{/* mapping the projects */}
   {assists.map((item,index)=>{

    return(
      <div className='projects_photos' key={index}>
        <button className={`projectItems`} onClick={() =>  chosenModal(index) }>
          <h1 className={`project_name`}>{item.name}</h1>
          <img src={item.item} className={`project_item-img`}></img>
        </button>
        <div>
          {/* mapping the modal pictures */}
        </div>
      </div>
    )

   })}

<div className={`modal ${projectToggle ? "show": ""}` }>
      {itemChosen.map((item,index)=>(
        <div className={`modal-pictures-picture`}>
            <img className={`modal-pictures-picture`} src={item.itemitem}></img>
          </div>
      ))}
  <button className={`close-button`} onClick={()=> closeModal(projectToggle)  }>X</button>

      </div>
        


  </div>








  )
}

export default Projects