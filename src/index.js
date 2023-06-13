import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routes, Route, HashRouter} from 'react-router-dom'
import Game from './components/game'
import LeadBoard from './components/leader-board'
import Home from './components/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/leaderboard' element={<LeadBoard/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

