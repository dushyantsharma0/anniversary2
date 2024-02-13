import logo from './logo.svg';
import './App.css';
import Home from './home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Images from './image';
import audio from './imgs/6.mp3'
import { useState } from 'react';

function App() {

     
  return (
    
    <div className="App">
       <audio src={audio}  autoPlay />
      <Router >
     
        
     
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/images' element={<Images/>}/>
         
      </Routes>
     </Router>
    </div>
  );
}

export default App;
