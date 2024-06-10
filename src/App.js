
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';
import Hello from './components/header';
import Body from './components/body'
import Footer from './components/footer';
import Apropos from './pages/apropos';

function App() {
  return (
    <div className="App">
      <Hello />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

 
