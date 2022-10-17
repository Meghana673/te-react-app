
import React from 'react';
import './App.css';

import Funcomp  from './components/home';
import NavBar from './components/nav';
import Care from './components/skincare';
//Configure the routing paths 
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
       <Routes>
      <Route path="Home" element={<Funcomp/>}></Route>
      <Route path="care" element={<Care/>}></Route>
      {/* <Route path="*" element={<PageNotFound/>}></Route> */}
     </Routes>
    

    </div>
  );
}

export default App;
