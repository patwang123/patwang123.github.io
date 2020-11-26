import './Intro.css';
import profile_img from './profile.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope,faPaperclip,faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import resume from './patrickwang_resume.pdf';

export default function About () {
    return (
        <div id='header' className='header'>
            <div id="header-content">
                <div id='header-profile-img' className='header-profile-img'>
                    <img src={profile_img} className="profile-img" alt="me"/>
                </div>
            </div>
            <div className="header-text-container">
                <h1 className='header-text'>Patrick Wang</h1>
                <h5 className='header-text'>UC Berkeley EECS &bull; CS + Math</h5>
                <ul className="links">
                    <li>
                        <a href="mailto:patwang123@berkeley.edu" target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faEnvelope} className='icon'></FontAwesomeIcon>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/patwang1234" target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faTwitter} className='icon'></FontAwesomeIcon>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/patrick-wang-366992193/" target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faLinkedin} className='icon'></FontAwesomeIcon>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/patwang123" target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faGithub} className='icon'></FontAwesomeIcon>
                        </a>
                    </li>
                    <li>
                        <a href={resume} target="_blank" rel='noreferrer'>
                            <FontAwesomeIcon icon={faPaperclip} className='icon'></FontAwesomeIcon>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="down-arrow">
                <FontAwesomeIcon icon={faAngleDown} className='icon' style={{pointerEvents:'none'}}></FontAwesomeIcon>
            </div>
        </div>
    )
}