import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Contact from './routes/Contact';

import Home from './routes/Home'
import Event from './routes/Event'
import Training from './routes/Training';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/event' element={<Event />} />
        <Route path='/training' element={<Training />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;