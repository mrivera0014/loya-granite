import React, {useRef,useEffect} from 'react'
import {assists} from './projectAssets/projectAssists';
import  './projects.css'
import {gsap} from "gsap/all"




const Projects = () => {




  const projectElRef = gsap.utils.toArray(".projectItems")

  projectElRef.map((item,index)=>{
    item.anim = gsap.to(item,{
      height:100
    }).reversed(true);
    item.addEventlistener("click",doStuff)
  })

  function doStuff(){
    this.anim.reversed(!this.anim.reversed())
  }

  return (
  <div className={`projects`}>
   {assists.map((item,index)=>{
    return(
      <button className={`projectItems`}  >
        <h1>{item.item}</h1>
      </button>
    )
   })}
  </div>








  )
}

export default Projects