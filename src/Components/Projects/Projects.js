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
E
{/* mapping the projects */}
   {assists.map((item,index)=>{
    return(
      <div className='projects_photos'>
      <button className={`projectItems`} onClick={() => consoleLogged(item)}>
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
            <div >{item.itemitem}</div>
          </div>
      ))}
  <button className={`close-button`} onClick={()=> closeModal(projectToggle)}>X</button>

      </div>
        


  </div>








  )
}

export default Projects