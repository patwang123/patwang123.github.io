import './About.css';
import {faPython, faCss3, faJs, faHtml5} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function About () {
    return (
        <div id='about-me' className='about-me main-section'>
            <h1 className='about-title'>
                About me
            </h1>
            <p>
                I'm Patrick Wang, a sophomore at UC Berkeley, class of 2023. Nice to meet you! As of now, I am looking for an intern position in a variety of technical fields in CS and math, varying from software engineering to machine learning to quant trading. If you want to learn more about me or contact me, check out my social links above!
            </p>
            <div className='double-column'>
                <div className='column'>
                    <h3>Profile</h3>
                    <div className='profile'>
                        To be implemented!
                    </div>
                </div>
                <div className='column'>
                    <h3>Skills</h3>
                    <div className='skills'>
                        To be implemented!
                        <h6>HTML</h6>
                        <div className="container">
                            <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
                            <div className="skill html">90%</div>
                        </div>

                        <h6>CSS</h6>
                        <div className="container">
                            <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
                            <div className="skill css">80%</div>
                        </div>

                        <h6>JavaScript</h6>
                        <div className="container">
                            <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
                            <div className="skill js">65%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}