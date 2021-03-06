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
        <button className="dropbtn" onClick={() => drop_down()} id='dropbtn'>
          <FontAwesomeIcon icon={faBars} size='2x' style={{color:'white',pointerEvents: 'none'}} className='nav' ></FontAwesomeIcon>
        </button>
        <div className="dropdown-content" id='dropdown-content'>
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
          
          <div class="containerz">
          <div class='box' style={{ justifyContent: 'left', paddingTop: '5px', paddingBottom: '5px'}}>
              <img class='countbox' src="https://hitcounter.pythonanywhere.com/count/tag.svg?url=https%3A%2F%2Fpatwang123.github.io%2F" alt="Hits"/>
            </div>
            <h5 class='box' style={{ color: 'white' }}>Updated 2/25/2020</h5>
            <div class="box"></div>
          </div>
      </div>
    </div>
  );
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function drop_down() {
  document.getElementById("dropdown-content").classList.toggle("show");
}

window.onclick = function (event) {
  console.log(event.target)
  if (event.target.id !== 'dropbtn' && event.target.id !== 'dropdown-content') {
    console.log('hoi!')
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

export default App;