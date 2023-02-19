import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="Navbar">
      <h1>PB</h1>
      <ul className='Navbar--links_list'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Blog</a></li>
        <li><a href='#'>Projects</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
    </nav>
  );
}
