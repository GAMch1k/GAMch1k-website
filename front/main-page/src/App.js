import logo from './logo.svg';
import './App.css';
import gsap from 'gsap';
// import ReactDOM from 'react-dom';

var curPos = [0, 0];
function App() {

  let _top_div, _bottom_div;

  function find_all() {
    _top_div = document.getElementById('top-label');
    _bottom_div = document.getElementById('bottom-label');
  }

  window.addEventListener('load', (event) => {
    find_all();
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
        <div id='top-label'>TOP SIDE</div>
        <h2 id="main-text">GAMch1k</h2>
        <hr id="line-under-logo"></hr>
        <p id="underline-text">Huppa Mykhailo</p>
        <div id='bottom-label'>BOTTOM SIDE</div>
      </header>
    </div>
  );
}

export default App;
