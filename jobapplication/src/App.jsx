import { useState } from 'react';
import { BrowserRouter, Routes ,Route } from "react-router-dom";

import PersonalInfo from './pages/PersonalInfo';
import Education from './pages/Education';

function App() {

  return (
    
      <Routes>
        <Route path = '/' element={<PersonalInfo/>}/>
        <Route path = '/education' element={<Education/>}/>
      </Routes>

      
    
  
  )
}

export default App
