import React from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Navbar from "./components/navbar"

import Connect from './pages/connect'
import Cats from './pages/cats'
import Sheeps from './pages/sheeps'
import Goats from './pages/goats'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Connect/>} />
        <Route path="/cats" element={<Cats/>} />
        <Route path="/sheeps" element={<Sheeps/>} />
        <Route path="/goats" element={<Goats/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
