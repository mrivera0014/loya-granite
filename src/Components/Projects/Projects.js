import React, {useState,useRef,useEffect} from 'react'
import {assists,itemOne,itemTwo,itemThree} from './projectAssets/projectAssists';
import  './projects.css'
import {gsap} from "gsap/all"




const Projects = () => {


  const [projectToggle, setProjectToggle] = useState(false)
  var itemChosen = itemOne;

  const consoleLogged = (item) =>{{
      console.log(item.item)


  }
    setProjectToggle(item)
  }
  const closeModal = (item) =>{
    if (item === false) return;
    return setProjectToggle(null)
  }


  return (
    
  <div className={`projects`}>

{/* mapping the projects */}
   {assists.map((item,index)=>{
    return(
      <>
      <button className={`projectItems`} onClick={() => consoleLogged(item)}>
        <h1>{item.item}</h1>
      </button>
      <div>

        {/* mapping the modal pictures */}
      
        </div>
        </>
    )

   })}

<div className={`modal ${projectToggle ? "show": ""}` }>
  <button className={`close-button`} onClick={()=> closeModal(projectToggle)}>X</button>
      {itemChosen.map((item,index)=>(
        <div className={`modal-pictures-picture`}>
            <div >{item.itemitem}</div>
          </div>
      ))}
      </div>


  </div>








  )
}

export default Projects