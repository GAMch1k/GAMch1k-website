import logo from './logo.svg';
import './App.css';
import my_photo from './images/my_photo.png'
import gsap from 'gsap';
import ReactDOM from 'react-dom';

function App() {

  let _line_under_logo, _go_back;

  function find_all() {
    _line_under_logo = document.getElementById('line-under-logo');
    _go_back = document.getElementById('go-back');
  }

  function animation_on_start() {
    gsap.to(_line_under_logo, {duration: 0.8, width: 'calc(60px + 4vw)'});
    console.log('animation line');
    ReactDOM.findDOMNode('line-under-logo').style.width = 'width: calc(60px + 4vw)';
    console.log('animation line ended');
    gsap.to(_go_back, {duration: 0.8, color: 'white'});
    console.log('animation color back');
  }

  window.addEventListener('load', (event) => {
    console.log('window loaded');
    find_all();
    animation_on_start();
  });

  return (
    <div className="App">
      <a id='go-back' href='/'>&#60; Go Back</a>
      <header className="App-header">
        {/* <img src={my_photo} id='my-photo'></img> */}
        {/* <div id='about-me-div'> */}
          <h2>About me</h2>
          <hr id="line-under-logo"></hr>
          <p id='about-me-text'>Hello, my name is <strong>Huppa Mykhailo</strong>.</p>
          <p id='about-me-text'>I'm 16 years old programmer from Ukraine.</p>
          <p id='about-me-text'>I was born in Ukraine, Mykolaiv at 25th November 2005</p>
          <p id='about-me-text'>and started programming in 2019.</p>
        {/* </div> */}
      </header>
      <div id='basement'>
        <span className='basement-text'>©2022 GAMch1k</span>
        <p></p>
      </div>
    </div>
  );
}

export default App;
