import logo from './logo.svg';
import './App.css';
import Home from './home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Images from './image';
import audio from './imgs/6.mp3'
import { useState } from 'react';
import React, { useRef } from 'react';
function App() {
  const [yes, setyes] = useState(true);
    const audioRef = useRef(null);
  
    const handleButtonClick = () => {
      audioRef.current.play();
      setyes(false)
    };

  return (
    
    <div className="App">
       
      <Router >
      <audio ref={audioRef} src={audio} />
      {
          yes?<button className='btn' style={{  fontSize:"15vh", zIndex:"10000",width:"100%",height:"100vh",position:"fixed", top:"0px",left:"0px"}}  onClick={handleButtonClick}>
               Click To show 
            </button>:null
      }
     
     
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/images' element={<Images/>}/>
         
      </Routes>
     </Router>
    </div>
  );
}

export default App;
