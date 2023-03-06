import React from 'react';
import Icons from './Icons';
import './Overlay.css';

export default function Overlay() {
  return (
    <div className="overlay">
      <div className="overlay--Header_Text">
        <p className="Header--name">Preston Button</p>
        <p className="Header--title">Frontend Developer</p>
      </div>
      <Icons />
    </div>
  );
}
