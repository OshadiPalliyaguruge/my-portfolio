'use client'
import '../styles/Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper">
      <h2 className="section-title">Work <span className="highlight">Experience</span></h2>
      <p className="section-subtitle">My professional journey and career accomplishments</p>
      
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="experience-header">
              <div className="company-logo">
                <img src="/logos/lseg.png" alt="London Stock Exchange Group" />
              </div>
              <div className="company-info">
                <h3>Software Engineering Intern - Application Security</h3>
                <p className="company">London Stock Exchange Group (LSEG) • April 2024 - October 2024</p>
              </div>
            </div>
            
            <div className="experience-section">
              <h4 className="section-subheader">Automating Security Tools</h4>
              <ul>
                <li>Automated vulnerability scanning workflows using various security tools to streamline and speed up manual testing processes</li>
                <li>Integrated multiple tools into a unified automation pipeline using Python, Bash scripts, and Docker to ensure consistency across test environments (Windows, Ubuntu, Red Hat Linux)</li>
                <li>Enhanced the efficiency and accuracy of the security assessment process by automating report generation to visualize scan results for improved risk analysis and reporting</li>
              </ul>
            </div>

            <div className="experience-section">
              <h4 className="section-subheader">Pentesting Tasks</h4>
              <ul>
                <li>Performed penetration testing on critical applications to identify vulnerabilities and assess security posture in user/view-only mode</li>
              </ul>
            </div>

            <div className="experience-section">
              <h4 className="section-subheader">Tools & Technologies Used</h4>
              <div className="tech-tags">
                <div className="tech-category">
                  <h5>Security Tools:</h5>
                  <div className="tags">
                    <span>Burp Suite</span>
                    <span>OWASP ZAP</span>
                    <span>SSLScan</span>
                    <span>Sslyze</span>
                    <span>Nikto</span>
                    <span>Nmap</span>
                    <span>cURL</span>
                    <span>Wget</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h5>Programming & Frameworks:</h5>
                  <div className="tags">
                    <span>Python</span>
                    <span>Shell Scripting</span>
                    <span>JavaScript</span>
                    <span>React.js</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h5>Containerization & Others:</h5>
                  <div className="tags">
                    <span>Docker</span>
                    <span>OWASP WSTG</span>
                    <span>OWASP TOP 10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}