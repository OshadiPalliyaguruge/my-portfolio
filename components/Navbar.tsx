'use client';
import { useState } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Oshadi Palliyaguruge</div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
         <a href="#about" onClick={() => setIsOpen(false)}>About Me</a>
        <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
        <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#certification" onClick={() => setIsOpen(false)}>Certifications</a>
        <a href="#volunteer" onClick={() => setIsOpen(false)}>Activities</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
      <div 
        className="hamburger" 
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>
    </nav>
  );
}