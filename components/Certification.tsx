'use client'

import { JSX, useRef } from 'react'
import '../styles/Certification.css'
import {
  Cloud,
  Shield,
  Code2,
  Brain,
  Cpu,
  Lock,
  Palette,
  Zap,
  BookOpen,
  Database,
  Server,
  Layout,
  Container,
  Settings,
  Globe,
  BarChart3,
  Award
} from 'lucide-react'

export default function Certification() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const getCertificateIcon = (badge: string, category: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      'AWS': <Cloud size={32} />,
      'Security': <Shield size={32} />,
      'Python': <Code2 size={32} />,
      'ML': <Brain size={32} />,
      'AI': <Cpu size={32} />,
      'AR': <Cpu size={32} />,
      'Cybersecurity': <Lock size={32} />,
      'CSS': <Palette size={32} />,
      'JS': <Zap size={32} />,
      'TS': <BookOpen size={32} />,
      'React': <Layout size={32} />,
      'Node.js': <Server size={32} />,
      'UX Design': <Palette size={32} />,
      'Adobe': <Palette size={32} />,
      'Figma': <Layout size={32} />,
      'Docker': <Container size={32} />,
      'K8s': <Settings size={32} />,
      'GCP': <Globe size={32} />,
      'IDF': <BarChart3 size={32} />
    };

    return iconMap[badge] || getCategoryIcon(category);
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      'Cloud': <Cloud size={32} />,
      'Software': <Code2 size={32} />,
      'Programming': <Code2 size={32} />,
      'AI': <Cpu size={32} />,
      'XR': <Cpu size={32} />,
      'Security': <Shield size={32} />,
      'Frontend': <Layout size={32} />,
      'Backend': <Server size={32} />,
      'Design': <Palette size={32} />,
      'DevOps': <Settings size={32} />,
      'Data': <Database size={32} />
    };

    return iconMap[category] || <Award size={32} />;
  };

  const certificates = [
    {
      title: "AWS SimuLearn: Cloud Practitioner",
      institution: "Amazon Web Services (AWS)",
      year: "Aug 2025",
      description: "Skills: Amazon Web Services (AWS) · Cloud Computing · Amazon VPC · Amazon EC2",
      badge: "AWS",
      category: "Cloud",
      credentialUrl: "https://www.credly.com/badges/aws-cloud-practitioner"
    },
    {
      title: "Developing Secure Software",
      institution: "LinkedIn",
      year: "May 2024",
      description: "Skills: Software Development Security",
      badge: "Security",
      category: "Software",
      credentialUrl: "https://www.linkedin.com/learning/certificates/1e5484c5bc4d04580671770af963ce34b39a624ac44e479a7f1839f27ed4fbec"
    },
    {
      title: "Python Essential Training",
      institution: "LinkedIn",
      year: "May 2024",
      description: "Skills: Python (Programming Language)",
      badge: "Python",
      category: "Programming",
      credentialUrl: "https://www.linkedin.com/learning/certificates/a9e0ae7b3ced3f0b5f29adc495d841b4a1331818d8050ec5cb7cc82cb9a0e67a"
    },
    {
      title: "Machine Learning Specialization",
      institution: "DeepLearning.AI",
      year: "Feb 2024",
      description: "Skills: Machine Learning · Credential ID: L6P8KJ7VFDRP",
      badge: "ML",
      category: "AI",
      credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/L6P8KJ7VFDRP?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=s12n"
    },
    {
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      institution: "DeepLearning.AI",
      year: "Feb 2024",
      description: "Skills: k-means clustering · Reinforcement Learning · Anomaly Detection",
      badge: "AI",
      category: "AI",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/93ZRXKMXEJNC?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
    },
    {
      title: "Advanced Learning Algorithms",
      institution: "DeepLearning.AI",
      year: "Jan 2024",
      description: "Skills: Decision Trees · Neural Networks · Softmax Regression",
      badge: "AI",
      category: "AI",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/PRA443LJ752S?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      institution: "DeepLearning.AI",
      year: "Jan 2024",
      description: "Skills: Supervised Learning · Logistic Regression · Gradient Descent",
      badge: "AI",
      category: "AI",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/VHSHQV3ADNBV?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
    },
    {
      title: "Foundations of AR",
      institution: "Meta",
      year: "Jan 2024",
      description: "Skills: AR characteristics · XR spectrum · Credential ID: H4L8PTE5J2EN",
      badge: "AR",
      category: "XR",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/H4L8PTE5J2EN?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
    },
    {
      title: "Introduction to Cybersecurity Tools & Cyber Attacks",
      institution: "IBM",
      year: "Jan 2024",
      description: "Skills: Malware · Cybersecurity · Cyber Attacks",
      badge: "Cybersecurity",
      category: "Security",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/7WPKGYZ9R28W?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
    },
    {
      title: "Advanced Styling with Responsive Design",
      institution: "University of Michigan | Coursera",
      year: "Feb 2023",
      description: "Skills: JavaScript · Bootstrap · Responsive Web Design",
      badge: "CSS",
      category: "Frontend",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/6CZ6S3TLEWFR?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },
    {
      title: "Interactivity with JavaScript",
      institution: "University of Michigan | Coursera",
      year: "Jan 2023",
      description: "Skills: JavaScript · Web Development",
      badge: "JS",
      category: "Frontend",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/EVR4VVA9J2FU?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },
    {
      title: "Introduction to CSS3",
      institution: "University of Michigan | Coursera",
      year: "Jan 2023",
      description: "Skills: Web Development · Style Sheets · Web Design",
      badge: "CSS",
      category: "Frontend",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/VFUZKPWZM5HG?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },
    {
      title: "Introduction to HTML",
      institution: "University of Michigan | Coursera",
      year: "Jan 2023",
      description: "Skills: Web Development · HTML · Web Design",
      badge: "HTML",
      category: "Frontend",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/URXSTRQ46VFT?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    }
  ];

  return (
    <section id="certification" className="section-wrapper">
      <h2 className="section-title">
        Professional <span className="highlight">Certifications</span>
      </h2>
      <p className="section-subtitle">
        Industry-recognized credentials that validate my expertise
      </p>

      <div className="certifications-scroll-container">
        <button className="scroll-button scroll-left" onClick={scrollLeft}>
          &#8249;
        </button>

        <div className="certifications-scroll-wrapper" ref={scrollContainerRef}>
          <div className="certificates-horizontal-scroll">
            {certificates.map((cert, i) => (
              <div key={i} className="certificate-card">
                <div className="certificate-icon">
                  {getCertificateIcon(cert.badge, cert.category)}
                </div>
                <div className="certificate-content">
                  <h3>{cert.title}</h3>
                  <p className="institution">{cert.institution}</p>
                  <div className="certificate-meta">
                    <span className="year">{cert.year}</span>
                    <span className="category">{cert.category}</span>
                  </div>
                  <p className="description">{cert.description}</p>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-certificate"
                  >
                    View Credential
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="scroll-button scroll-right" onClick={scrollRight}>
          &#8250;
        </button>
      </div>

      <div className="scroll-indicator">
        {/* <span>Scroll horizontally to view more certifications</span>
        <div className="scroll-arrow">→</div> */}
      </div>
    </section>
  )
}
