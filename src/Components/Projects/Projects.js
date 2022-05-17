import React, {useState,useRef,useEffect} from 'react'
import {assists,itemOne,itemTwo,itemThree} from './projectAssets/projectAssists';
import  './projects.css'
import {gsap} from "gsap/all"



const Projects = () => {


  const [kitchenState,setKitchenState] = useState(itemOne);
  const [bathroomState,setBathroomState] = useState(itemTwo);
  const [firePlaceState,setFirePlaceState] = useState(itemThree);
  const [projectToggle, setProjectToggle] = useState(false);
  const [modalToggle,setModalToggle] = useState("");



    let kitchen = kitchenState;
    let bathroom = bathroomState;
    let firePlace = firePlaceState;
  
  



  const closeModal = (item) =>{

    setProjectToggle(false)
  }
  
const openModal = (item) => {
  let modalToggleValue = ++item;
  setProjectToggle(true)
  if(modalToggleValue == 1){
    setModalToggle("kitchen")
  }
  if(modalToggleValue == 2){
    setModalToggle("bathroom")
  }
  if(modalToggleValue == 3){
    setModalToggle("fireplace")
  }
  
}


  return (
    
  <div className={`projects`}>

{/* mapping the projects */}
   {assists.map((item,index)=>{

    return(
      <div className='projects_photos' key={index}>
        <button className={`projectItems`} onClick={() =>openModal(index) }>
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
      
<div className={`modal-pictures`}>
    <div class={`modal-pictures-kitchen ${modalToggle == "kitchen" ? "show": "hide"}`}>  
      {kitchen.map((item,index)=>{
            return(
              <img className={`modal-pictures-picture`} src={item.itemitem}  onClick={()=> closeModal(projectToggle)   }></img>
            )
          }
        )
      }
    </div>
    <div class={`modal-pictures-bathroom ${modalToggle == "bathroom" ? "show": "hide"}`}>   
       {bathroom.map((item,index)=>{
          return(
            <img className={`modal-pictures-picture`} src={item.itemitem}  onClick={()=> closeModal(projectToggle)   }></img>
          )
        }
      )
    }
    </div>
    <div class={`modal-pictures-fireplace ${modalToggle == "fireplace" ? "show": "hide"}`}>
    {firePlace.map((item,index)=>{
          return(
            <img className={`modal-pictures-picture`} src={item.itemitem}  onClick={()=> closeModal(projectToggle)   }></img>
          )
        }
      )
    }
    </div>
</div>

  <button className={`close-button`} onClick={()=> closeModal(projectToggle)   }>X</button>

      </div>
        


  </div>








  )
}

export default Projects