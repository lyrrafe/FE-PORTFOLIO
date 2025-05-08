import { useState, useEffect } from 'react';
import './CertificationPage.css';

const CertificationPage = () => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    // For now, we'll use mock data
    const fetchCertifications = () => {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        const mockCertifications = [
          {
            id: 1,
            title: "SQL for Data Analysis",
            issuer: "Simplilearn",
            date: "May 2025",
            credentialUrl: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0ODU5IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODMwMTgxNl84NjE0MTgyMTc0NjU3NzM2NDk2NS5wbmciLCJ1c2VybmFtZSI6IkxZUlJBIEZFIEMuIEJBVVNUSVNUQSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F7823%2FSQL%2520for%2520Data%2520Analysis%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1448858933494496840&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FV9ygyNPSMMDazDE6yrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUA9v2cKD8AAAA%3D",
            image: "/fee (1).jpg",
            description: "Comprehensive certification covering SQL fundamentals, data querying, analysis techniques, and database management for effective data analysis."
          },
          {
            id: 2,
            title: "Python for Data Analysis",
            issuer: "Simplilearn",
            date: "May 2025",
            credentialUrl: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0NzUzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODMwMTg1NF84NjE0MTgyMTc0NjU3NzI3NjI2OS5wbmciLCJ1c2VybmFtZSI6IkxZUlJBIEZFIEMuIEJBVVNUSVNUQSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F7747%2FPython-for-Data-Analysis%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1448858933494496840&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVLzAqzzbLjzCzDE6yrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAOob4Mz8AAAA%3D",
            image: "/fee (2).jpg",
            description: "Mastery of Python programming for data analysis, including pandas, NumPy, data visualization, and statistical analysis techniques."
          },
          {
            id: 3,
            title: "SQL Projects",
            issuer: "Simplilearn",
            date: "May 2025",
            credentialUrl: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0ODcxIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODMwMTU2M184NjE0MTgyMTc0NjU3NzQxOTk5OS5wbmciLCJ1c2VybmFtZSI6IkxZUlJBIEZFIEMuIEJBVVNUSVNUQSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F7842%2FSQL%2520Projects%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1448858933494496840&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVz05zrgo3MDezDE6yrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUARrgvjz8AAAA%3D",
            image: "/fee (3).jpg",
            description: "Hands-on experience with real-world SQL projects, database design, optimization, and implementation of complex queries for business solutions."
          },
          {
            id: 4,
            title: "Project Management 101",
            issuer: "Simplilearn",
            date: "May 2025",
            credentialUrl: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMjUxIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODI2MDU5M184NjEwOTg2MTc0NjYzNDc1MjE3NC5wbmciLCJ1c2VybmFtZSI6bnVsbH0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6032%2FProject%2520Management%2520101%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1448858933494496840&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FV97coLXJ2LEhJCkmyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUACsLKxD8AAAA%3D",
            image: "/fee (4).jpg",
            description: "Fundamental project management principles, methodologies, and best practices for planning, executing, and monitoring successful projects."
          },
          {
            id: 5,
            title: "Introduction to Front End Development",
            issuer: "Simplilearn",
            date: "May 2025",
            credentialUrl: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxOTMzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODI1OTE2Ml84NjEwOTg2MTc0NjYzNDkxNDA1Ny5wbmciLCJ1c2VybmFtZSI6IkxZUlJBIEZFIEMuIEJBVVRJU1RBIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4511%2FIntroduction-to-Front-End-Development%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1448858933494496840&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVT81LNzV3dUpJCkmyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAX0ucQT8AAAA%3D",
            image: "/fee (5).jpg",
            description: "Essential skills in HTML, CSS, and JavaScript for building responsive and interactive web interfaces and user experiences."
          },
          {
            id: 6,
            title: "Introduction to Cybersecurity",
            issuer: "Simplilearn",
            date: "April 2025",
            credentialUrl: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxMjEzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODI1MzcwMV84NjEwOTg2MTc0NTU5MzMzMzQwNS5wbmciLCJ1c2VybmFtZSI6IkxZUlJBIEZFIEMuIEJBVVRJU1RBIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F3736%2FIntroduction%2520to%2520Cyber%2520Security%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1448858933494496840&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVT0spK3BzK0tJCkmyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAP%2BCYdz8AAAA%3D",
            image: "/fee (6).jpg",
            description: "Foundational knowledge of cybersecurity principles, threat detection, risk management, and security best practices for protecting digital assets."
          }
        ];
        setCertifications(mockCertifications);
        setLoading(false);
      }, 1000);
    };

    fetchCertifications();
  }, []);

  return (
    <div className="certification-page">
      <div className="container">
        <h1 className="page-title">My Certifications</h1>
        
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading certifications...</p>
          </div>
        ) : (
          <div className="certification-grid">
            {certifications.map(cert => (
              <div className="certification-card" key={cert.id}>
                <div className="certification-image">
                  <img src={cert.image} alt={cert.title} />
                </div>
                <div className="certification-content">
                  <h2>{cert.title}</h2>
                  <div className="certification-meta">
                    <span className="issuer">{cert.issuer}</span>
                    <span className="date">{cert.date}</span>
                  </div>
                  <p className="certification-description">{cert.description}</p>
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline view-credential"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificationPage;
