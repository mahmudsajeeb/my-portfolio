import React from 'react';
import { Outlet } from 'react-router-dom';
import NavMenu from '../Nav/NavMenu';
 
 

function Main() {
  return (
    <div className="flex flex-grow">
  
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <div className="flex">
      <div className="flex items-center justify-center h-screen w-1/6">
        <NavMenu />
      </div>
      <Main />
    </div>
  );
}

export default App;
