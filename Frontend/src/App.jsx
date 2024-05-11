// eslint-disable-next-line no-unused-vars
import React from 'react';
import Home from './home/Home';

import{ Route, Routes } from 'react-router-dom';
import Course from './Courses/Courses';
import Signup from './componants/Signup';
import Login from './componants/Login';


function App() {
 
  return (
    <>
   
  
    {/* <Home/>
    <Course/> */}
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={ <Course/> } />
    <Route path='/signup' element={ <Signup/> } />
    <Route path='/login' element={ <Login/> } />
    </Routes>
    </>
  

  );
}

export default App