import './App.css';

import {BrowserRouter,Route,Link} from 'react-router-dom';

import Projects from './components/Projects/Projects.js';
import Articles from './components/Articles/Articles.js';
import Intro from './components/Intro/Intro.js';
import About from './components/About/About.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div id='begin'>
      <div className='background'></div>
      <div className='dropdown'>
        <button class="dropbtn">
          <FontAwesomeIcon icon={faBars} size='2x' style={{color:'white'}} className='nav'></FontAwesomeIcon>
        </button>
        <div class="dropdown-content">
          <a href="#begin" onClick={(event) => { event.preventDefault(); document.getElementById('begin').scrollIntoView()}}>Intro</a>
          <a href="#about-me" onClick={(event) => { event.preventDefault(); document.getElementById('about-me').scrollIntoView() }}>About Me</a>
          <a href="#projects" onClick={(event) => { event.preventDefault(); document.getElementById('projects').scrollIntoView() }}>Projects</a>
        </div>
      </div>
      <div className='content'>
          <Intro></Intro>
          <About></About>
          <Projects></Projects>
          <h1>
          Under construction, come back later :D <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </h1>
      </div>
    </div>
  );
}

export default App;
