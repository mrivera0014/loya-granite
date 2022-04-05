import React, {useState,useRef,useEffect} from 'react'
import {assists,itemOne,itemTwo,itemThree} from './projectAssets/projectAssists';
import  './projects.css'
import {gsap} from "gsap/all"




const Projects = () => {


  const [projectToggle, setProjectToggle] = useState(false)
  var itemChosen = itemOne;

  const consoleLogged = (item) =>{{
      console.log(item.item)
      if (projectToggle === item){
         return setProjectToggle(null)
      }
      if(item.item == "One"){
        itemChosen = itemOne
      }
      if(item.item == "Two"){
        itemChosen = itemTwo
      }
      if(item.item == "Three"){
        itemChosen = itemThree
      }

  }


    setProjectToggle(item)

    return(
      <div className={`modal ${projectToggle ? "": "show"}` }>
      {itemChosen.map((item,index)=>(
        <div className={`modal-pictures-picture`}>
            <div >{item.itemitem}</div>
          </div>
      ))}
      </div>

    )
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

  </div>








  )
}

export default Projects