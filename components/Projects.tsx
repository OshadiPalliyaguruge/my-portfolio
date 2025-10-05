'use client';
import { useState, useRef, useEffect } from 'react';
import '../styles/Projects.css';
import ProjectModal from './ProjectModal';

// GitHub SVG Icon Component
const GitHubIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="github-icon"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  details?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  { 
    id: 1, 
    title: "Aduwa - University Canteen Food Ordering App",
    category: "mobile",
    description: "Mobile app to streamline canteen food ordering, reduce waste, and save time.",
    tags: ["Flutter", "Python", "Firebase", "Google Cloud", "Docker", "MySQL", "Google Maps API"],
    image: "/logos/aduwa1.png",
    details: "Aduwa is a university canteen food ordering app that improves efficiency, reduces food waste, and enhances the student dining experience. It includes features like student/owner login, real-time food availability updates, ordering system, and Google Maps integration.",
    liveUrl: "https://github.com/OshadiPalliyaguruge/Aduwa_UniCanteen-Mobile-App_FrontEnd",
    githubUrl: "https://github.com/OshadiPalliyaguruge/Aduwa_UniCanteen-Mobile-App_FrontEnd"
  },
  {
    id: 2,
    title: "CogniCare - Assistive Communication App",
    category: "mobile",
    description: "Mobile app for non-verbal individuals, translating text into animated sign language and offering learning resources.",
    tags: ["Flutter", "Dart", "Python", "FastAPI", "Firebase", "NLP", "REST APIs"],
    image: "/logos/cognicare.png",
    details: `CogniCare is designed for non-verbal individuals, especially the Deaf and Dumb community, enabling communication through animated sign language translations. 
    Built with Flutter (Dart) for frontend and Python with FastAPI for backend, it integrates Firebase Storage for scalable asset management. 
    Beyond real-time communication, it provides sign language learning resources, fostering inclusivity and empowerment.`,
    liveUrl: "https://github.com/OshadiPalliyaguruge/CogniCare-Mobile-App_FrontEnd",
    githubUrl: "https://github.com/OshadiPalliyaguruge/CogniCare-Mobile-App_FrontEnd"
  },
  { 
    id: 3, 
    title: "E-Doc Medical Centre Management System",
    category: "web",
    description: "Web app to digitize university medical center records, enhancing accessibility and efficiency.",
    tags: ["HTML5", "CSS", "JavaScript", "Bootstrap", "Python", "Firebase"],
    image: "/logos/edoc.jpg",
    details: `E-Doc is a university medical center management system designed to replace traditional paper-based patient records. 
    It enables secure access to medical history, uploading scanned documents for verification, and real-time notifications for approvals. 
    Staff can track medicine stock updates, improving operational efficiency. 
    Built with HTML, CSS, Bootstrap (frontend), Python and JavaScript (backend), and Firebase for authentication and storage.`,
    liveUrl: "https://github.com/OshadiPalliyaguruge/E-DOC_Medical-Center-Web-Application",
    githubUrl: "https://github.com/OshadiPalliyaguruge/E-DOC_Medical-Center-Web-Application"
  },
  { 
    id: 4, 
    title: "Hospital Management and Telemedicine System",
    category: "console",
    description: "Console-based C++ system for managing hospital operations and providing telemedicine services.",
    tags: ["C++", "Object-Oriented Programming (OOP)", "Console Application", "Hospital Management", "Telemedicine"],
    image: "/logos/hospital.png",
    details: "This console-based project implements a comprehensive hospital management and telemedicine system using C++ and object-oriented programming principles.",
    liveUrl: "",
    githubUrl: "https://github.com/OshadiPalliyaguruge/OOP_MiniProject"
  },
  {
    id: 5,
    title: "ITCare Insight: ML-Powered IT Helpdesk Incident Analytics Platform",
    category: "web",
    description: "Full-stack analytics platform optimizing IT helpdesk operations with predictive modeling, semantic search, and interactive dashboards.",
    tags: ["Python", "ML", "NLP", "BERT", "SBERT", "PyTorch", "React", "Node.js", "Flask", "MySQL", "Power BI"],
    image: "/logos/ITHelpdesk.png",
    details: `ITCare Insight is a full-stack analytics platform for IT helpdesk operations. 
    Provides interactive dashboards for incident trends and SLM compliance, predicts assigned groups using ML models with BERT embeddings, and suggests resolutions using a hybrid search engine combining TF-IDF and semantic embeddings.`,
    liveUrl: "",
    githubUrl: "https://github.com/OshadiPalliyaguruge/ITCare-Insight-Backend"
  },
  {
    id: 6,
    title: "PathFinders: Maze Solver Application",
    category: "desktop",
    description: "Desktop application to generate and solve mazes using advanced pathfinding algorithms with real-time visualizations.",
    tags: ["Python", "Tkinter", "Algorithms", "Data Structures", "BFS", "DFS", "Dijkstra", "A* Search", "Kruskal MST", "Union-Find"],
    image: "/logos/maze.png",
    details: `PathFinders is an intelligent desktop application that generates and solves mazes using advanced pathfinding algorithms. 
    Users can input maze size or upload an image to generate a maze, then visualize solutions in real-time using BFS, DFS, Dijkstra, or A* algorithms.`,
    liveUrl: "",
    githubUrl: "https://github.com/Final-Year-Group-Projects/Maze-solver"
  },
  {
    id: 7,
    title: "Attendance and Payroll Management System",
    category: "web",
    description: "A distributed microservices-based system for managing employee attendance, leave, and payroll processing with secure, role-based access.",
    tags: ["Java", "Spring Boot", "Microservices", "Docker", "PostgreSQL", "NGINX", "Eureka", "JWT", "REST API"],
    image: "/logos/payroll-system.png", 
    details: `The Attendance and Payroll Management System is a scalable, containerized application built on a microservices architecture. It separates concerns into independent services for User Management, Authentication, Attendance Tracking, and Payroll Processing. The system features an API Gateway for routing, a Eureka Discovery Server for dynamic service registration, and secure JWT-based authentication. Each service maintains its own PostgreSQL database, ensuring data isolation and integrity.`,
    liveUrl: "", 
    githubUrl: "https://github.com/Final-Year-Group-Projects/Attendance-and-Payroll-Management-System"
  },
  {
    id: 8,
    title: "Building DataLake Using Camera Footages",
    category: "web",
    description: "An on-premises data lake solution that processes, stores, and analyzes video footage to extract actionable insights using object detection and big data tools.",
    tags: ["Python", "YOLO", "Apache Spark", "MinIO", "Elasticsearch", "Kibana", "Microservices", "Docker", "Computer Vision"],
    image: "/logos/datalake.png",
    details: `This project presents an end-to-end pipeline for building a modular and scalable data lake from camera footage. It uses YOLO-based object detection models to identify and track objects (vehicles, people, animals, etc.), stores raw and processed data in a MinIO object store, and leverages Apache Spark for large-scale data preprocessing. Insights are visualized through interactive Kibana dashboards powered by Elasticsearch. A novel feature includes camera-based object geolocation estimation.`,
    liveUrl: "",
    githubUrl: "https://github.com/DataLake-FYP-Project"
  }

];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const filteredProjects = projects.filter(p => filter === 'all' || p.category === filter);

  return (
    <section id="projects" className="section-wrapper">
      <h2 className="section-title">My <span className="highlight">Projects</span></h2>
      <p className="section-subtitle">A collection of my recent work and contributions</p>
      
      <div className="filters">
        {['all', 'web', 'mobile', 'console', 'desktop'].map((category) => (
          <button
            key={category}
            className={filter === category ? 'active' : ''}
            onClick={() => setFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="projects-scroll-container">
        {/* Always render scroll buttons - CSS will handle visibility */}
        <button className="scroll-button scroll-left" onClick={scrollLeft}>
          &#8249;
        </button>
        
        <div className="projects-scroll-wrapper" ref={scrollContainerRef}>
          <div className="projects-horizontal-scroll">
            {filteredProjects.length > 0 ? (
              filteredProjects.map(project => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <button 
                        className="view-details-btn"
                        onClick={() => openModal(project)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="project-actions">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="github-link"
                          title="View on GitHub"
                        >
                          <GitHubIcon />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-projects-message">
                <h3>No {filter} projects found</h3>
                <p>Try selecting a different category or check back later for new projects.</p>
              </div>
            )}
          </div>
        </div>

        <button className="scroll-button scroll-right" onClick={scrollRight}>
          &#8250;
        </button>
      </div>

      {filteredProjects.length > 0 && (
        <div className="scroll-indicator">
          {/* Use CSS to show different text based on screen size */}
          {/* <span className="desktop-text">Scroll horizontally to view more projects</span>
          <span className="mobile-text">Swipe horizontally to view more projects</span>
          <div className="scroll-arrow">→</div> */}
        </div>
      )}

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </section>
  );
}