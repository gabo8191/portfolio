import React, { useState } from 'react'
import "./services.css"

const Services = () => {
    const [toggleState, setToggleState] = useState(0);


    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className='services section' id='services'>
        <h2 className='section__title'>Services</h2>
        <span className="section__subtitle">What I offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Backend <br/> Developer</h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon" ></i></span>
            <div className={toggleState===1 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Backend Developer</h3>
                    <p className="services__modal-description">
                    I possess a wide range of technical skills and a focus on problem solving, as well as a proactive attitude and a continuous interest in learning and developing myself in the programming field.
                    </p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Knowledge in programming languages such as Java, Python or PHP, which are commonly used in backend development.</p>
                        
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Experience in database design and development, both relational and non-relational, and in the use of database management tools.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Knowledge in API development and in the implementation of communication protocols such as REST and SOAP.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Skills in analysis and troubleshooting, being able to identify and fix errors in the code and database structure.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Knowledge in computer security, ensuring information security and avoiding software vulnerabilities.</p>
                        </li>
                    </ul>
                    </div>
                </div>
            
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Frontend <br /> Developer </h3>
                </div>

                <span onClick={()=>toggleTab(2)} className="services__button">View More  <i className="uil uil-arrow-right services__button-icon" ></i></span>
                <div className={toggleState===2 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Frontend Developer </h3>
                    <p className="services__modal-description">
                    As a frontend developer I have the ability to implement the visual and interactive elements of a website or application. 

                    </p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Knowledge of HTML and CSS, including the ability to write clean, well-structured code and create layouts that are responsive and adapt to different screen sizes</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Proficiency with JavaScript, including the ability to write and debug code, and knowledge of frameworks and libraries such as React or Angular</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Knowledge of web standards and accessibility guidelines, including the ability to create websites and applications that are accessible to users with disabilities</p>
                        </li>

                    </ul>
                    </div>
                </div>
            
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Soft <br /> Skills </h3>
                </div>

                <span onClick={()=>toggleTab(3)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon" ></i></span>
                <div className={toggleState===3 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">My Soft Skills</h3>
                    <p className="services__modal-description">
                    As a professional I have soft skills that can empower your company, these include effective communication, problem solving, collaboration, time management and proactivity. It is also important to highlight a strong attention to detail and adaptation to new technologies and learning new programming languages. Interpersonal skills such as empathy, emotional intelligence and active listening can also be traits that describe me as a person and as a programmer, and can help your company work effectively in teams and resolve conflicts in the workplace.

                    </p>

                   
                
                </div>
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Services