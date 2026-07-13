import { useState } from 'react';
import { BrowserRouter, Routes ,Route } from "react-router-dom";

import PersonalInfo from './pages/PersonalInfo';
import Education from './pages/Education';
import WorkExperience from './pages/WorkExperience';
import Review from './pages/Review';

function App() {

  return (
    
      <Routes>
        <Route path = '/' element={<PersonalInfo/>}/>
        <Route path = '/education' element={<Education/>}/>
        <Route path = '/workexperience' element={<WorkExperience/>}/>
        <Route path = '/review' element={<Review/>}/>
      </Routes>

      
    
  
  )
}

export default App
