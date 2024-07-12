
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Hello from './components/header';
import Body from './components/body'
import Footer from './components/footer';
import Apropos from './pages/apropos';
import Logementpage from './pages/logemetnpage';
import Error from './components/error';
import './fontawesome'



function App() {
  return (
    <div className="App">
      <Hello />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path='/logement/:id' element={<Logementpage />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

 
