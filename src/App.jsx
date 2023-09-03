import React from 'react';
import Home from './Components/Pages/Home';
import History from './Components/Pages/History';
import { Route, Routes } from 'react-router-dom';



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  )
}

export default App
