import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

function Header() {
  return (
    <>
      <div className="navbar">
        <div className="logoDescript">
          <img className="logo" src={logo} alt="logo" />
          <h2>Space Travelers Hub</h2>
        </div>
        <nav>
          <div className="navItems">
            <div><NavLink to="/rockets" className={({ isActive }) => (isActive ? 'active' : 'inActive')}>Rocket</NavLink></div>
            <div><NavLink to="/missions" className={({ isActive }) => (isActive ? 'active' : 'inActive')}>Mission</NavLink></div>
            <div className="divider" />
            <div><NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : 'inActive')}>My Profile</NavLink></div>
          </div>
        </nav>
      </div>
      <hr />
    </>
  );
}

export default Header;
