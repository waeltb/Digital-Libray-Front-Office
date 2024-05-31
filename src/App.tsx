import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import Login from './page/login';

import Signup from './page/signup';
import Home from './page/home';
import Editprofile from './page/profile/edit';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/editprofile' element={<Editprofile/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
