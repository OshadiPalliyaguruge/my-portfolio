'use client';
import { useEffect, useState } from 'react';
import '../styles/Hero.css';

// Icon components
const DownloadIcon = () => (
  <svg className="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const UserIcon = () => (
  <svg className="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MessageIcon = () => (
  <svg className="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export default function Hero() {
  const [text, setText] = useState('');
  const [isClient, setIsClient] = useState(false);
  const phrases = ["Computer Engineer", "Data Specialist", "Full-Stack Developer", "Problem Solver"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    let i = 0;
    const typing = setInterval(() => {
      if (i < phrases[currentIndex].length) {
        setText(phrases[currentIndex].substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          setText('');
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }, 1000);
      }
    }, 100);
    return () => clearInterval(typing);
  }, [currentIndex, isClient]);

  // Generate stable particle positions on client side only
  const particlePositions = isClient ? 
    [...Array(30)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`
    })) : [];

  return (
    <section id="home" className="hero animate-fade">
      {isClient && (
        <div className="particles">
          {particlePositions.map((style, i) => (
            <div key={i} className="particle" style={style} />
          ))}
        </div>
      )}
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">
            Hi, I'm <span className="name-highlight">Oshadi Palliyaguruge</span>
          </h1>
          <h2 className="hero-subtitle">
            And I'm a <span className="typewriter">{text}</span>
          </h2>
          <p className="hero-description">
            A Computer Engineering graduate specializing in <span className="text-highlight">Data Management</span>, passionate about creating innovative solutions through <span className="text-highlight">Software Engineering</span>, <span className="text-highlight">Data Science</span>, and <span className="text-highlight">Machine Learning</span>.
          </p>
          <div className="hero-buttons">
            <a 
              href="https://drive.google.com/file/d/17ZH6QN__z9RaH6p0yrVjKloYitHY4qLG/view"
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button primary-button"
            >
              <DownloadIcon />
              DOWNLOAD CV
            </a>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="cta-button secondary-button"
            >
              <UserIcon />
              About Me
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="cta-button secondary-button"
            >
              <MessageIcon />
              Contact
            </button>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="profile-image-container">
            <img src="/logos/me.jpg" alt="Oshadi Palliyaguruge" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
}