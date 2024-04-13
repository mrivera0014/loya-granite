import React from 'react'
import { Photos } from '../Photos/Photos'
import GraniteImg from '../Parallax/GraniteImg'
import MarbleImg from '../Parallax/MarbleImg'
import QuartziteImg from '../Parallax/QuartziteImg'

import './MaterialsInfo.css'
import '../Parallax/ImageOne.css'

function MaterialsInfo() {



    let materials = [
        {
            type: "Granite",
            desc: "Granite, a natural stone of exceptional beauty and durability, stands as a timeless choice for interior and exterior projects. With medium maintenance requirements, it maintains its stunning appearance with just a recommended sealer application every six months. Ideal for a range of applications, from kitchens and bathrooms to elegant fireplaces, granite's versatility shines. Its weather-resistant nature makes it a dependable option for outdoor projects, including grills and outer countertops. The pricing structure varies depending on the highest grade of granite design and color, offering options to suit a range of budgets, with an average slab cost of approximately $1500.00. Elevate your space with the enduring elegance of granite.",
        },
        {
            type: "Marble",
            desc: "Marble, a natural stone synonymous with luxury and sophistication, boasts timeless beauty with its distinctive veining patterns. However, it demands diligent care, with a high maintenance requirement that includes sealer application approximately every six months. While marble is an ideal choice for adding elegance to bathrooms, walls, and fireplaces, it is not recommended for use in kitchens due to its susceptibility to staining and etching. This exquisite stone is not suitable for outdoor projects. Marble's exclusivity comes at a price, as it ranks among the highest-priced natural stones, with an average slab cost of approximately $2200.00. Embrace the opulence of marble in your interior design for a touch of enduring elegance."
        },
        {
            type: "Quartzite",
            desc: "Quartzite, a remarkable natural stone derived from natural quartz, epitomizes beauty and resilience. This stone, while requiring medium maintenance and a recommended sealer application every six months, is highly versatile. Ideal for enhancing the charm of kitchens, bathrooms, and fireplaces, it excels in both interior and exterior projects. Its durability and resistance to the elements make it suitable for grills and outdoor countertops. Notably, the allure of quartzite comes at a premium, as its prices rank among the highest in the realm of natural stone, with an average slab cost of approximately $2300.00. Elevate your living spaces with the enduring grace of quartzite."
        },
        {
            type: "Quartz",
            desc: "Quartz, a meticulously engineered stone, redefines versatility and ease of maintenance. Crafted in laboratories, it boasts a low-maintenance quality, requiring nothing more than regular cleaning. Ideal for elevating bathrooms, walls, and kitchens, its non-porous nature ensures a hygienic environment. However, it's not recommended for fireplaces due to heat sensitivity and is unsuitable for outdoor projects, lacking weather resistance. The beauty of quartz is its flexibility in pricing, which varies depending on the brand or design, making it accessible to diverse budgets. The average slab cost for quartz stands at approximately $1300.00, making it a smart choice for interior design that's both practical and stylish."
        }

    ]



    const getPhotosByMaterialType = (materialType) => {
        return Photos.filter((photo) => photo.materialType === materialType)
    }

    return (
        <div>

            <main>

                <h4>If you’re considering investing on stone countertops or other stone installations, there are several options available, including granite, marble, quartzite, and quartz. </h4>
                {materials.map((item, index) => {
                    const photosByMaterialType = getPhotosByMaterialType(item.type);
                    return (


                        <li key={index} className={item.type} id='materialsList'>
                            {/* {item.type === 'Granite' && <GraniteImg />} */}
                            {/* {item.type === 'Marble' && <MarbleImg />} */}

                            <h4>{item.type}</h4>
                            <section>{item.desc}</section>
                            <figure className='diffMaterials'>
                                {photosByMaterialType.map((photo, photoIndex) => (
                                    <img key={photoIndex} src={photo.image} alt={item.type} className={item.type} />

                                ))}
                            </figure>
                        </li>


                    )
                })}
            </main>

        </div>
    )
}

export default MaterialsInfo