import React from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import './App.css'

import Navbar from "./components/Navbar"

import Connect from './pages/Connect'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Connect/>} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
