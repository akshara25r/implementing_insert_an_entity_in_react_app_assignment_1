// src/App.jsx
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import './App.css'; // Import global styles
import BookForm from './components/BookForm';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/bookform' element={<BookForm/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
