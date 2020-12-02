import './App.css';

import Projects from './components/Projects/Projects.js';
import Intro from './components/Intro/Intro.js';
import About from './components/About/About.js';
import Academics from './components/Academics/Academics.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div id='begin'>
      <div className='background'></div>
      <div className='dropdown'>
        <button className="dropbtn">
          <FontAwesomeIcon icon={faBars} size='2x' style={{color:'white'}} className='nav'></FontAwesomeIcon>
        </button>
        <div className="dropdown-content">
          <a href="#begin" onClick={(event) => { event.preventDefault(); document.getElementById('begin').scrollIntoView()}}>Intro</a>
          <a href="#about-me" onClick={(event) => { event.preventDefault(); document.getElementById('about-me').scrollIntoView() }}>About Me</a>
          <a href="#projects" onClick={(event) => { event.preventDefault(); document.getElementById('projects').scrollIntoView() }}>Projects</a>
          <a href="#coursework" onClick={(event) => { event.preventDefault(); document.getElementById('academics').scrollIntoView() }}>Coursework</a>
        </div>
      </div>
      <div className='content'>
          <Intro></Intro>
          <About></About>
          <Projects></Projects>
          <Academics></Academics>
          <h1>
          Under construction, come back later :D - Updated as of 12/2/2020<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </h1>
      </div>
    </div>
  );
}

export default App;
