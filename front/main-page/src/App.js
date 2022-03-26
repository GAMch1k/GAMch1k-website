import logo from './logo.svg';
import './App.css';
import gsap from 'gsap';
import ReactDOM from 'react-dom';

var curPos = [0, 0];
function App() {

  let _top_div, _bottom_div, _line_under_logo;

  function find_all() {
    _top_div = document.getElementById('top-label-link');
    _bottom_div = document.getElementById('bottom-label-link');
    _line_under_logo = document.getElementById('line-under-logo');
  }

  function animation_on_start() {
    let _width = _line_under_logo.offsetWidth;
    gsap.to(_line_under_logo, {duration: 0.8, width: 'calc(60px + 4vw)'});
    ReactDOM.findDOMNode('line-under-logo').style.width = 'width: calc(60px + 4vw)';
  }

  window.addEventListener('load', (event) => {
    find_all();
    animation_on_start();
  });

  document.onmousemove = function(event) {
    curPos[0] = event.pageX;
    curPos[1] = event.pageY;
  }

  function checkCursorPosition() {
    if (curPos[1] < document.documentElement.scrollHeight / 2) {
      // console.log('top!');
      gsap.to(_top_div, {duration: 0.3, color: 'white'});
      gsap.to(_bottom_div, {duration: 0.3, color: 'rgba(255, 255, 255, 0.15)'});
    } else {
      // console.log('bottom!');
      gsap.to(_bottom_div, {duration: 0.3, color: 'white'});
      gsap.to(_top_div, {duration: 0.3, color: 'rgba(255, 255, 255, 0.15)'});
    }
  }

  setInterval(checkCursorPosition, 100);
  // console.log(document.documentElement.scrollHeight);

  return (
    <div className="App">
      <header className="App-header">
        <div id='top-label'><a id='top-label-link' href='/about'>About me</a></div>
        <h2 id="main-text">GAMch1k</h2>
        <hr id="line-under-logo"></hr>
        <p id="underline-text">Huppa Mykhailo</p>
        <div id='bottom-label'><a id='bottom-label-link' href='/projects'>My projects</a></div>
      </header>
      <div id='basement'>
        <span className='basement-text'>©2022 GAMch1k</span>
        <p></p>
      </div>
    </div>
  );
}

export default App;
