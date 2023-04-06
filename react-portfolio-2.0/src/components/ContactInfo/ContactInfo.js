import React from "react";
import * as FaIcons from 'react-icons/fa'
import Form from '../Form/Form'
import './ContactInfo.css'

function ContactInfo() {
    return (
        <div className="body">
            <h1 className="projectsTitle"> Contact Me</h1>
            <Form />
            <section className="contactBtnHome">
                <form className="contactBtns" action="https://www.linkedin.com/in/marblerivera/" method="get" target="_blank">
                    <button className="linkedBtn" type="submit"><FaIcons.FaLinkedin className='liIcon' />LinkedIn</button>
                </form>
                <form className="contactBtns" action="https://github.com/mrivera0014" method="get" target="_blank">
                    <button className="gitBtn" type="submit"> <FaIcons.FaGithub className='ghIcon' />GitHub</button>
                </form>
                <form className="contactBtns" action="https://drive.google.com/file/d/14prWGh1MwMsED8Jh8WG93YCji29t9167/view?usp=sharing" method="get" target="_blank">
                    <button className="resumeBtn" type="submit"> <FaIcons.FaRegFilePdf className='pdfIcon' />Resume</button>
                </form>
            </section>
        </div >



    )
}

export default ContactInfo