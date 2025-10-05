'use client';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
  
      <div className="footer-bottom">
        <p>&copy; {currentYear} Oshadi Palliyaguruge. All rights reserved.</p>
      </div>
  
  );
}