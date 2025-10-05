'use client'
import { useState, useEffect } from 'react'
import '../styles/Education.css'

// Icon components
const UniversityIcon = () => (
  <svg className="category-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <line x1="12" y1="14" x2="12" y2="20" />
    <line x1="12" y1="14" x2="12" y2="20" />
  </svg>
);

const SchoolIcon = () => (
  <svg className="category-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 20h16" />
    <path d="M6 16l-2 4" />
    <path d="M18 16l2 4" />
    <path d="M8 10h8" />
    <path d="M8 14h8" />
    <path d="M12 6l6-4v18H6V2l6 4z" />
  </svg>
);

const GraduationCapIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

const BuildingIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// Study Area Icons
const DataIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9a9 9 0 00-9 9" />
  </svg>
);

const CodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const AlgorithmIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2l4 4-4 4" />
    <path d="M10 22l-4-4 4-4" />
    <path d="M16 8l4 4-4 4" />
    <path d="M8 16l-4-4 4-4" />
  </svg>
);

const SystemIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const SecurityIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12" y2="16" />
  </svg>
);

const MathIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19l4-4m0 4l-4-4" />
    <path d="M12 5v14" />
    <path d="M18 5v14" />
  </svg>
);

export default function Education() {
  const [activeArea, setActiveArea] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const studyAreas = [
    {
      title: "Data Management & Analytics",
      icon: <DataIcon />,
      courses: [
        "Database Systems",
        "Data Mining",
        "Data Management Project",
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision and Image Processing"
      ]
    },
    {
      title: "Software Engineering",
      icon: <CodeIcon />,
      courses: [
        "Software Engineering",
        "Software Architecture and Design",
        "Object-Oriented Programming",
        "Quality Engineering"
     
      ]
    },
    {
      title: "Algorithms & Programming",
      icon: <AlgorithmIcon />,
      courses: [
        "Data Structures & Algorithms",
        "Advanced Algorithms",
        "Parallel Programming",
        "Compilers",
        "Distributed Systems"
      ]
    },
    {
      title: "Systems & Infrastructure",
      icon: <SystemIcon />,
      courses: [
        "Operating Systems",
        "Computer Networks",
        "Cloud Computing and Applications",
        "Computer Organization",
        "Embedded Systems",
        "Microcontrollers and Applications",
        "Circuit Theory",
        "Theory of Control Systems",
        "Robotic Design"
      ]
    },
    {
      title: "Security",
      icon: <SecurityIcon />,
      courses: [
        "Computer Security",
        "Information Security",
        "Intelligent Systems"
      ]
    },
    {
      title: "General",
      icon: <MathIcon />,
      courses: [
        "Engineering Mathematics",
        "Discrete Mathematics",
        "Quantitative Methods",
        "Ethics in Engineering",
        "Sustainability and Disaster Management",
        "Ethnic Cohesion and Social Harmony",
        "Introduction to Philosophy",
        "Management for Engineers",
        "Industrial Law",
        "Sri Lankan History and Culture",
        "Intellectual Property",
        "Economics and Management",
        "Accounting for Engineers"

      ]
    }
  ];

  const handleAreaClick = (index: number) => {
    // Only handle clicks on mobile
    if (mounted && typeof window !== 'undefined' && window.innerWidth <= 768) {
      setActiveArea(activeArea === index ? null : index);
    }
  };

  const handleAreaHover = (index: number | null) => {
    // Only handle hover on desktop
    if (mounted && typeof window !== 'undefined' && window.innerWidth > 768) {
      setActiveArea(index);
    }
  };


  if (!mounted) {
    return (
      <section id="education" className="section-wrapper">
        <h2 className="section-title">Academic <span className="highlight">Education</span></h2>
        <p className="section-subtitle">My formal education journey from school to university</p>
        
        <div className="education-container">
          <div className="education-category">
            <h3 className="category-title">
              <UniversityIcon />
              University Education
            </h3>
            <div className="education-list">
              <div className="education-item">
                <div className="education-logo">
                  <img src="/logos/usj.png" alt="University of Sri Jayewardenepura" />
                  <div className="logo-fallback">
                    <GraduationCapIcon />
                  </div>
                </div>
                <div className="education-details">
                  <h4>BSc. Eng (Hons) in Computer Engineering - First Class</h4>
                  <p className="institution">Faculty of Engineering, University of Sri Jayewardenepura • 2020 - 2024</p>
                  <p className="gpa">GPA: 3.73/4.00</p>
                  <div className="achievements">
                    <span className="achievement">First Class Honors</span>
                    <span className="achievement">Minor Specialization: Data Management</span>
                  </div>
                  <p className="description">Comprehensive engineering education with focus on computer systems, software development, and data management principles. Specialized in data-driven solutions and engineering applications.</p>
                  
                  {/* Loading state for study areas */}
                  <div className="study-areas">
                    <h5 className="study-areas-title">Key Study Areas</h5>
                    <p className="study-areas-subtitle">Loading interactive courses...</p>
                    
                    <div className="study-areas-grid">
                      {studyAreas.map((area, index) => (
                        <div key={index} className="study-area">
                          <div className="study-area-header">
                            <div className="study-area-icon">
                              {area.icon}
                            </div>
                            <h6 className="study-area-title">{area.title}</h6>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* School Education remains the same */}
          <div className="education-category">
            <h3 className="category-title">
              <SchoolIcon />
              School Education
            </h3>
            <div className="education-list">
              <div className="education-item">
                <div className="education-logo">
                  <img src="/logos/rbv.png" alt="Rathnawali Balika Vidyalaya" />
                  <div className="logo-fallback">
                    <BuildingIcon />
                  </div>
                </div>
                <div className="education-details">
                  <h4>G.C.E. Advanced Level - Physical Science Stream</h4>
                  <p className="institution">Rathnawali Balika Vidyalaya - Gampaha • 2019</p>
                  <p className="gpa">Results: 2As & 1B</p>
                  <div className="achievements">
                    <span className="achievement">Physical Science Stream</span>
                    <span className="achievement">Excellent Academic Performance</span>
                  </div>
                  <p className="description">Completed Advanced Level education with focus on Mathematics, Physics, and Chemistry, laying strong foundation for engineering studies.</p>
                </div>
              </div>

              <div className="education-item">
                <div className="education-logo">
                  <img src="/logos/rbv.png" alt="Rathnawali Balika Vidyalaya" />
                  <div className="logo-fallback">
                    <BuildingIcon />
                  </div>
                </div>
                <div className="education-details">
                  <h4>G.C.E. Ordinary Level</h4>
                  <p className="institution">Rathnawali Balika Vidyalaya - Gampaha • 2016</p>
                  <p className="gpa">Results: 9As</p>
                  <div className="achievements">
                    <span className="achievement">Outstanding Performance</span>
                    <span className="achievement">All Subjects: A Grades</span>
                  </div>
                  <p className="description">Excellent academic performance across all subjects, demonstrating strong foundation in comprehensive education.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <section id="education" className="section-wrapper">
      <h2 className="section-title">Academic <span className="highlight">Education</span></h2>
      <p className="section-subtitle">My formal education journey from school to university</p>
      
      <div className="education-container">
        <div className="education-category">
          <h3 className="category-title">
            <UniversityIcon />
            University Education
          </h3>
          <div className="education-list">
            <div className="education-item">
              <div className="education-logo">
                <img src="/logos/usj.png" alt="University of Sri Jayewardenepura" />
                <div className="logo-fallback">
                  <GraduationCapIcon />
                </div>
              </div>
              <div className="education-details">
                <h4>BSc. Eng (Hons) in Computer Engineering - First Class</h4>
                <p className="institution">Faculty of Engineering, University of Sri Jayewardenepura • 2020 - 2024</p>
                <p className="gpa">GPA: 3.73/4.00</p>
                <div className="achievements">
                  <span className="achievement">First Class Honors</span>
                  <span className="achievement">Minor Specialization: Data Management</span>
                </div>
                <p className="description">Comprehensive engineering education with focus on computer systems, software development, and data management principles. Specialized in data-driven solutions and engineering applications.</p>
                
                {/* Interactive Study Areas Section */}
                <div className="study-areas">
                  <h5 className="study-areas-title">Key Study Areas</h5>
                  <p className="study-areas-subtitle">
                    {isMobile 
                      ? 'Click on each area to see relevant courses' 
                      : ''
                    }
                  </p>
                  
                  <div className="study-areas-grid">
                    {studyAreas.map((area, index) => (
                      <div 
                        key={index} 
                        className={`study-area ${activeArea === index ? 'active' : ''}`}
                        onClick={() => handleAreaClick(index)}
                        onMouseEnter={() => handleAreaHover(index)}
                        onMouseLeave={() => handleAreaHover(null)}
                      >
                        <div className="study-area-header">
                          <div className="study-area-icon">
                            {area.icon}
                          </div>
                          <h6 className="study-area-title">{area.title}</h6>
                        </div>
                        
                        <div className="study-area-courses">
                          <ul>
                            {area.courses.map((course, courseIndex) => (
                              <li key={courseIndex}>{course}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* School Education remains the same */}
        <div className="education-category">
          <h3 className="category-title">
            <SchoolIcon />
            School Education
          </h3>
          <div className="education-list">
            <div className="education-item">
              <div className="education-logo">
                <img src="/logos/rbv.png" alt="Rathnawali Balika Vidyalaya" />
                <div className="logo-fallback">
                  <BuildingIcon />
                </div>
              </div>
              <div className="education-details">
                <h4>G.C.E. Advanced Level - Physical Science Stream</h4>
                <p className="institution">Rathnawali Balika Vidyalaya - Gampaha • 2019</p>
                <p className="gpa">Results: 2As & 1B</p>
                <div className="achievements">
                  <span className="achievement">Physical Science Stream</span>
                  <span className="achievement">Excellent Academic Performance</span>
                </div>
                <p className="description">Completed Advanced Level education with focus on Mathematics, Physics, and Chemistry, laying strong foundation for engineering studies.</p>
              </div>
            </div>

            <div className="education-item">
              <div className="education-logo">
                <img src="/logos/rbv.png" alt="Rathnawali Balika Vidyalaya" />
                <div className="logo-fallback">
                  <BuildingIcon />
                </div>
              </div>
              <div className="education-details">
                <h4>G.C.E. Ordinary Level</h4>
                <p className="institution">Rathnawali Balika Vidyalaya - Gampaha • 2016</p>
                <p className="gpa">Results: 9As</p>
                <div className="achievements">
                  <span className="achievement">Outstanding Performance</span>
                  <span className="achievement">All Subjects: A Grades</span>
                </div>
                <p className="description">Excellent academic performance across all subjects, demonstrating strong foundation in comprehensive education.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}