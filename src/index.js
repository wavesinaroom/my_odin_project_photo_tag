import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import App from './App'
import Game from './components/game'
import LeadBoard from './components/leader-board'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/leadboard' element={<LeadBoard/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

