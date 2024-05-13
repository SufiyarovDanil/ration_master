import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page from './pages/Page';
import Calculation from './pages/Calculation';
import Ration from './pages/Ration';
import HomePage from './pages/HomePage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap' 

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/calc" element={<Calculation />} />
          <Route path="/ration" element={<Ration />} />
        </Route>
      </Routes>
  );
}

export default App;
