import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Game from './components/game'
import LeadBoard from './components/leader-board'
import Home from './components/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/leadboard' element={<LeadBoard/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

