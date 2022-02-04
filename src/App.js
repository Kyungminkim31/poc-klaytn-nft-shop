import React from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import './App.css'

import Navbar from "./components/navbar"

import Connect from './pages/connect'
import Cats from './pages/cats'
import Sheeps from './pages/sheeps'
import Goats from './pages/goats'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Connect/>} />
          <Route path="/cats" element={<Cats/>} />
          <Route path="/sheeps" element={<Sheeps/>} />
          <Route path="/goats" element={<Goats/>} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
