import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import OtherRoute from './Pages/OtherRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<OtherRoute />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/otherRoute' element={<OtherRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;