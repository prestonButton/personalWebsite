import React from 'react';
import './Icons.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Icons() {
  return (
    <div className="icons">
      <a href="#home">
        <FaTwitter className="icon" />
      </a>
      <a href="#home">
        <FaGithub className="icon" />
      </a>
      <a href="#home">
        <FaLinkedin className="icon" />
      </a>
    </div>
  );
}
