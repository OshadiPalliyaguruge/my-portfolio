'use client'
import { useState } from 'react'
import { 
  Code, 
  Wrench, 
  Database, 
  Monitor, 
  Settings,
  Users,
  MessageCircle,
  Clock,
  Lightbulb,
  Target,
  Brain,
  BookOpen,
  Zap,
  Search,
  Heart,
  BarChart3,
  RefreshCw
} from 'lucide-react'
import '../styles/Skills.css'

export default function Skills() {
  const [activeTab, setActiveTab] = useState('technical')

  const technicalSkills = [
    {
      category: "Languages",
      icon: <Code size={24} />,
      skills: [
        { name: "C", icon: "c/c-original.svg" },
        { name: "C#", icon: "csharp/csharp-original.svg" },
        { name: "C++", icon: "cplusplus/cplusplus-original.svg" },
        { name: "Python", icon: "python/python-original.svg" },
        { name: "Java", icon: "java/java-original.svg" },
        { name: "JavaScript", icon: "javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "typescript/typescript-original.svg" },
        { name: "Dart", icon: "dart/dart-original.svg" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: <Wrench size={24} />,
      skills: [
        { name: "React", icon: "react/react-original.svg" },
        { name: "Bootstrap", icon: "bootstrap/bootstrap-original.svg" },
        { name: "Flutter", icon: "flutter/flutter-original.svg" },
        { name: "Spring", icon: "spring/spring-original.svg" },
        { name: ".NET", icon: "dot-net/dot-net-original.svg" }
      ]
    },
    {
      category: "Databases & Cloud",
      icon: <Database size={24} />,
      skills: [
        { name: "MySQL", icon: "mysql/mysql-original.svg" },
        { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg" },
        { name: "Amazon Web Services", icon: "amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Google Cloud Platform", icon: "googlecloud/googlecloud-original.svg" },
        { name: "Docker", icon: "docker/docker-original.svg" }
      ]
    },
    {
      category: "IDEs & Code Editors",
      icon: <Monitor size={24} />,
      skills: [
        { name: "VS Code", icon: "vscode/vscode-original.svg" },
        { name: "Visual Studio", icon: "visualstudio/visualstudio-original.svg" },
        { name: "Android Studio", icon: "androidstudio/androidstudio-original.svg" },
        { name: "PyCharm", icon: "pycharm/pycharm-original.svg" },
        { name: "IntelliJ IDEA", icon: "intellij/intellij-original.svg" },
        { name: "Jupyter", icon: "jupyter/jupyter-original.svg" }
      ]
    },
    {
      category: "Tools & Platforms",
      icon: <Settings size={24} />,
      skills: [
        { name: "Git", icon: "git/git-original.svg" },
        { name: "GitHub", icon: "github/github-original.svg" },
        { name: "Postman", icon: "postman/postman-original.svg" },
        { name: "Docker", icon: "docker/docker-original.svg" },
        { name: "Linux", icon: "linux/linux-original.svg" },
        { name: "Power BI", icon: "powerbi/powerbi-original.svg" },
        { name: "Figma", icon: "figma/figma-original.svg" }
      ]
    }
  ]

  const softSkillsCards = [
    {
      skill: "Problem Solving",
      icon: <Search size={32} />,
      description: "Analytical approach to complex challenges with innovative and effective solutions"
    },
    {
      skill: "Team Collaboration",
      icon: <Users size={32} />,
      description: "Effective teamwork and communication in diverse and cross-functional environments"
    },
    {
      skill: "Communication",
      icon: <MessageCircle size={32} />,
      description: "Clear and effective verbal, written, and presentation communication skills"
    },
    {
      skill: "Leadership",
      icon: <Zap size={32} />,
      description: "Guiding teams towards success with vision, motivation, and strategic direction"
    },
    {
      skill: "Time Management",
      icon: <Clock size={32} />,
      description: "Efficient prioritization, organization, and meeting deadlines consistently"
    },
    {
      skill: "Adaptability",
      icon: <RefreshCw size={32} />,
      description: "Quickly adjusting to new technologies, methodologies, and changing requirements"
    },
    {
      skill: "Critical Thinking",
      icon: <Brain size={32} />,
      description: "Logical analysis and evaluation of information to make informed decisions"
    },
    {
      skill: "Creativity",
      icon: <Lightbulb size={32} />,
      description: "Innovative thinking and generating novel solutions to complex problems"
    },
    {
      skill: "Attention to Detail",
      icon: <Target size={32} />,
      description: "Meticulous approach ensuring accuracy and quality in all deliverables"
    },
    {
      skill: "Project Management",
      icon: <BarChart3 size={32} />,
      description: "Planning, executing, and delivering projects successfully within constraints"
    },
    {
      skill: "Emotional Intelligence",
      icon: <Heart size={32} />,
      description: "Self-awareness, empathy, and effective interpersonal relationship management"
    },
    {
      skill: "Continuous Learning",
      icon: <BookOpen size={32} />,
      description: "Proactive approach to acquiring new skills and staying updated with industry trends"
    }
  ]

  const getColoredIcon = (iconPath: string) => {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconPath}`;
  }

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My <span className="highlight">Skills</span></h2>
      <p className="section-subtitle">A comprehensive overview of my technical capabilities and interpersonal strengths</p>
      
      <div className="skills-tabs">
        <button 
          className={`tab-button ${activeTab === 'technical' ? 'active' : ''}`}
          onClick={() => setActiveTab('technical')}
        >
          Technical Skills
        </button>
        <button 
          className={`tab-button ${activeTab === 'soft' ? 'active' : ''}`}
          onClick={() => setActiveTab('soft')}
        >
          Soft Skills
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'technical' ? (
          <div className="technical-content-grid">
            {technicalSkills.map((category, index) => (
              <div key={index} className="skills-category">
                <h3>
                  <span className="category-icon">{category.icon}</span>
                  {category.category}
                </h3>
                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <img 
                        src={getColoredIcon(skill.icon)} 
                        alt={skill.name}
                        className="skill-icon colored"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          const parent = (e.target as HTMLImageElement).parentElement;
                          if (parent) {
                            const textFallback = document.createElement('div');
                            textFallback.className = 'skill-fallback';
                            textFallback.textContent = skill.name.charAt(0);
                            parent.appendChild(textFallback);
                          }
                        }}
                      />
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="soft-content">
            <h3 className="soft-title">Soft Skills & Personal Attributes</h3>
            
            {/* Soft Skills Cards Layout */}
            <div className="soft-skills-cards">
              {softSkillsCards.map((skill, index) => (
                <div key={index} className="soft-skill-card">
                  <div className="soft-skill-card-icon">{skill.icon}</div>
                  <h4 className="soft-skill-card-title">{skill.skill}</h4>
                  <p className="soft-skill-card-desc">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}