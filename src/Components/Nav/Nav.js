import React, { useState } from "react";
import { NavItems } from "../NavItems/NavItems";
import './Nav.css'

const Nav = () => {

    // clicked = initial state // setClicked function that changes initial change
    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        // console.log('ive been clicked')

        if (clicked === index) {
            // console.log('ive been clicked x2')
            // if clicked and already active then close
            return setClicked(null)
        }
        setClicked(index)
    }

    return (
        <div>
            <main>
                <nav className="fullNav">
                    {NavItems.map((item, index ) => {
                        return (
                            <section className="container">
                                <h2 onClick={() => toggle(index)} key={index} className={item.cName}> {item.title}</h2>

                                {clicked === index ? (
                                    <article>
                                            <item.location />
                                    </article>
                                ) : null}

                            </section>
                        )
                    })}
                </nav>
            </main>
        </div>
    )
}


// const Nav = () => {

//     const [selected, setSelected] = useState(null)

//     const toggle = i => {
//         // if selected is equal to i the close it-null
//         if (selected === i) {
//             return setSelected(null)
//         }
//         //is selected is not equal to i then open 
//         setSelected(i)
//     }

//     return (
//         <div>
//             <main>
//                 <nav className="fullNav">
//                     {NavItems.map((item, i) => (
//                         <section className="container">
//                             {/* toggle will determine if i is equal to selected */}
//                             <h2 key={i} className={item.cName} onClick={() => toggle(i)}>{item.title}</h2>
//                             <article>

//                                 <p className={selected === i ? 'content show' : 'content'}>{item.location}</p>
//                             </article>
//                         </section>
//                     ))}
//                 </nav>
//             </main>
//         </div>
//     )
// }

export default Nav