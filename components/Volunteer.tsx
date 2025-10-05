'use client'
import Image from 'next/image'
import '../styles/Volunteer.css'

export default function Volunteer() {
  return (
    <section id="volunteer" className="section-wrapper">
      <h2 className="section-title">Volunteer <span className="highlight">Experience</span></h2>
      <p className="section-subtitle">My contributions to the community and extracurricular activities</p>
      
      <div className="activities-container">
        <div className="activity-item">
          <div className="activity-logo-wrapper">
            <Image 
              src="/logos/seds.png" 
              alt="SEDS J'pura Logo" 
              width={80} 
              height={80} 
              className="activity-logo"
              priority={false}
            />
          </div>
          <div className="activity-details">
            <h3>Executive Board | Assistant Secretary</h3>
            <p className="organization">SEDS J'pura • Jun 2022 - Aug 2023 · 1 yr 3 mos</p>
            <p className="activity-description">Worked as an Assistant Secretary of SEDS J'pura Executive Board 22/23.</p>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-logo-wrapper">
            <Image 
              src="/logos/seds.png" 
              alt="SEDS J'pura Logo" 
              width={80} 
              height={80} 
              className="activity-logo"
              priority={false}
            />
          </div>
          <div className="activity-details">
            <h3>Leader | Infinitum Space</h3>
            <p className="organization">SEDS J'pura • Aug 2023 - Present · 2 yrs 2 mos</p>
            <p className="activity-description">Leading a WhatsApp post series about astronomy, astrophysics, astrobiology, robotics, and rocketry.</p>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-logo-wrapper">
            <Image 
              src="/logos/seds.png" 
              alt="SEDS J'pura Logo" 
              width={80} 
              height={80} 
              className="activity-logo"
              priority={false}
            />
          </div>
          <div className="activity-details">
            <h3>Member</h3>
            <p className="organization">SEDS J'pura • Jun 2021 - Present · 4 yrs 4 mos</p>
            <p className="activity-description">Active member of SEDS J'pura, contributing to space-related student activities.</p>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-logo-wrapper">
            <Image 
              src="/logos/seds-srilanka.png" 
              alt="SEDS Sri Lanka Logo" 
              width={80} 
              height={80} 
              className="activity-logo"
              priority={false}
            />
          </div>
          <div className="activity-details">
            <h3>SEDS Magnetar Member - Content Writer</h3>
            <p className="organization">SEDS Sri Lanka • Feb 2022 - Jun 2023 · 1 yr 5 mos</p>
            <p className="activity-description">Created content for astronomy and space-related outreach under SEDS Magnetar.</p>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-logo-wrapper">
            <Image 
              src="/logos/rotaract.png" 
              alt="Rotaract Logo" 
              width={80} 
              height={80} 
              className="activity-logo"
              priority={false}
            />
          </div>
          <div className="activity-details">
            <h3>Organizing Committee | Editorial Team Member</h3>
            <p className="organization">Rotaract Club of University of Sri Jayewardenepura • Feb 2022 - Apr 2022 · 3 mos</p>
            <p className="activity-description">Contributed to the editorial team of Project Be Professionally Equipped 4.0.</p>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-logo-wrapper">
            <Image 
              src="/logos/rotaract.png" 
              alt="Rotaract Logo" 
              width={80} 
              height={80} 
              className="activity-logo"
              priority={false}
            />
          </div>
          <div className="activity-details">
            <h3>Member - Club Service Avenue</h3>
            <p className="organization">Rotaract Club of University of Sri Jayewardenepura • Dec 2021 - Aug 2023 · 1 yr 9 mos</p>
            <p className="activity-description">Served in the Club Service Avenue, organizing and supporting Rotaract initiatives.</p>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-logo-wrapper">
            <Image 
              src="/logos/censoc.png" 
              alt="CENSOC Logo" 
              width={80} 
              height={80} 
              className="activity-logo"
              priority={false}
            />
          </div>
          <div className="activity-details">
            <h3>Committee Member</h3>
            <p className="organization">CENSOC - Computer Engineering Society of FOE USJ • Dec 2024 - Present · 10 mos</p>
            <p className="activity-description">Serving as a committee member for the Computer Engineering Society OB 24/25.</p>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-logo-wrapper">
            <Image 
              src="/logos/censoc.png" 
              alt="CENSOC Logo" 
              width={80} 
              height={80} 
              className="activity-logo"
              priority={false}
            />
          </div>
          <div className="activity-details">
            <h3>Member - Content Writer</h3>
            <p className="organization">CENSOC - Computer Engineering Society of FOE USJ • Feb 2022 - Present · 3 yrs 8 mos</p>
            <p className="activity-description">Content writer contributing to CENSOC publications and initiatives.</p>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-logo-wrapper">
            <Image 
              src="/logos/astronomy.png" 
              alt="J'pura Astronomy Club Logo" 
              width={80} 
              height={80} 
              className="activity-logo"
              priority={false}
            />
          </div>
          <div className="activity-details">
            <h3>Member - Content Writer</h3>
            <p className="organization">J'pura Astronomy Club • Jun 2021 - Present · 4 yrs 4 mos</p>
            <p className="activity-description">Content writer for astronomy and astrophysics related posts and events.</p>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-logo-wrapper">
            <Image 
              src="/logos/gavel.png" 
              alt="Gavel Club Logo" 
              width={80} 
              height={80} 
              className="activity-logo"
              priority={false}
            />
          </div>
          <div className="activity-details">
            <h3>Member</h3>
            <p className="organization">Gavel Club of University of Sri Jayewardenepura • Apr 2021 - Nov 2022 · 1 yr 8 mos</p>
            <p className="activity-description">Active member of the Gavel Club, developing communication and leadership skills.</p>
          </div>
        </div>
      </div>
    </section>
  )
}