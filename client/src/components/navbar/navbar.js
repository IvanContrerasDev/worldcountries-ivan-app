import React from 'react';
import { Link, Route } from 'react-router-dom';
import './Navbar.css';


export function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <Route exact path='/'>
            Welcome to the Country App
        </Route>
        
      </nav>
    </div>
  )
};

export default Navbar;