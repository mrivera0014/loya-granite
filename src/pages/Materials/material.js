import React from 'react'
import { materials } from './materialAssets'
import "./material.css"
import { Parallax } from 'react-parallax';

// import quartz from '../../Components/modal/assets/quartz-texture-white.jpg';

const material = () => {
  return (
    <div>
      <div>Material</div>
    <div>{materials.map((item,index)=>{
      return (<>
      <Parallax bgImage={item.itemCoverExample}  bgImageAlt='materialpicture granite' strength={500} className='image'></Parallax>
        <div className='materials_container'>
        <div className='materials_subContainer'>
      <div className='  materials_subContainer-name'>{item.itemName}</div>
      <div className='  materials_subContainer-ideal'>{item.itemIdeal}</div>
      <div className='  materials_subContainer-desc' >{item.itemDesc}</div>
      <div className='  materials_subContainer-seal' >{item.itemSealRequirement}</div>
      <div className='  materials_subContainer-outside'>{item.itemOutsideCapability}</div>
      <div className='  materials_subContainer-value'>{item.itemValue}</div>
      <div className='  materials_subContainer-valueDesc'>{item.itemValueDesc}</div>
      </div>
      <div className='materials_subContainer-example'>
      <div className='materials_subContainer-item '>Example</div>
      <div className='materials_subContainer-item '>Example</div>
      <div className='materials_subContainer-item '>Example</div>
      <div className='materials_subContainer-item '>Example</div>
      <div className='materials_subContainer-item '>Example</div>
      </div>
      </div>
      </>
      )


    })
  }</div>
    </div>
  )
}

export default material