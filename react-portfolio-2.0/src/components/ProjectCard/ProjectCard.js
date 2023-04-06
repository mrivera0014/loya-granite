// import React, { useState } from 'react'
import project from './ProjectList'
import './ProjectCard.css'
import * as FaIcons from 'react-icons/fa'
// import * as FiIcons from 'react-icons/fi'

function ProjectCard() {
    // const [projectDesc, setProjectDesc] = useState(false)
    // const showDesc = () => setProjectDesc(!projectDesc)
    return (
        <div className='body' id='projects'>
            <h1 className='projectsTitle'>Projects</h1>
            <section className='projectSection'>
                {project.map(project => {
                    return (
                        <div key={project.id} className='projectCard'>
                            <h3 className='projectTitle'>{project.title}</h3>
                            <img className='projectImg' src={process.env.PUBLIC_URL + project.image} alt={project.imageAlt} />
                            <p className='projectDesc'>Description: {project.description}</p>
                            <a target='_blank' className='projectLinks rep' href={project.github} ><FaIcons.FaGithub /> Repository</a>
                            <a target='_blank' className='projectLinks app' href={project.deployed}><FaIcons.FaRocket /> Application</a>
                        </div>

                        // <FiIcons.FiMoreVertical onClick={showDesc} /> this will go in line 19 intended to open/close description of each project
                    )
                })}
            </section>
        </div >
    )
}

export default ProjectCard