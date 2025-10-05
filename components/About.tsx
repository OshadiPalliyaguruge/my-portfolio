'use client';
import { useState } from 'react';
import '../styles/About.css';

// Icon components
const GraduationIcon = () => (
  <svg className="stat-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

const TrophyIcon = () => (
  <svg className="stat-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 21l4-4 4 4" />
    <path d="M7 17l-2.5 2.5" />
    <path d="M17 17l2.5 2.5" />
    <circle cx="12" cy="8" r="6" />
    <path d="M6.5 11.5l1 1" />
    <path d="M17.5 11.5l-1 1" />
  </svg>
);

const DataIcon = () => (
  <svg className="stat-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9a9 9 0 00-9 9" />
  </svg>
);

const CodeIcon = () => (
  <svg className="stat-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);


type StatDetails = {
  [key: number]: string;
};

export default function About() {
  const [activeStat, setActiveStat] = useState<number | null>(null);

  const statDetails: StatDetails = {
    0: "Achieved 3.73 GPA in Computer Engineering program with consistent academic excellence.",
    1: "Graduated with First Class Honors, ranking among top performers in the department.",
    2: "Specialized in Data Management with advanced coursework in database systems and analytics.",
    3: "Completed comprehensive 4-year engineering curriculum with hands-on project experience."
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About <span className="highlight">Me</span></h2>
            <p className="about-description">
              I am Oshadi Palliyaguruge, Computer Engineering graduate with <span className="text-highlight">First Class Honors</span> from the University of Sri Jayewardenepura, specializing in <span className="text-highlight">Data Management</span>. Possess a strong foundation in software & full stack development, data science & data engineering, and engineering principles.
            </p>
            <p className="about-description">
              Demonstrated expertise in developing <span className="text-highlight">scalable solutions</span> through academic projects and practical applications. Proficient in modern technologies with a focus on creating efficient, maintainable systems that address complex challenges.
            </p>
            <p className="about-description">
              Seeking opportunities to contribute technical skills in <span className="text-highlight">software engineering, data engineering, security engineering, machine learning roles within innovative organizations.</span>
            </p>
          </div>
          
          <div className="about-stats">
            {[0, 1].map((index) => (
              <div 
                key={index}
                className={`stat-item ${activeStat === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveStat(index)}
                onMouseLeave={() => setActiveStat(null)}
                onClick={() => setActiveStat(activeStat === index ? null : index)}
              >
                {index === 0 && <GraduationIcon />}
                {index === 1 && <CodeIcon />}
                
                <div className="stat-number">
                  {index === 0 && '3.73'}
                  {index === 1 && '4+'}
                </div>
                <div className="stat-label">
                  {index === 0 && 'CGPA'}
                  {index === 1 && 'YEARS'}
                </div>
                <div className="stat-description">
                  {index === 0 && 'First Class Honors'}
                  {index === 1 && 'Engineering Education'}
                </div>

                {activeStat === index && (
                  <div className="stat-tooltip">
                    {statDetails[index]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}