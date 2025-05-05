import './ProjectsPage.css';

const ProjectsPage = () => {
  return (
    <div className="page projects-page">
      <div className="container">
        <h1 className="page-title">My Projects</h1>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src="/REACT (1).jpeg" alt="Scholarship Information Management System" />
            </div>
            <div className="project-content">
              <h2>Scholarship Information Management System</h2>
              <p className="project-description">
                A comprehensive web-based system designed to streamline scholarship application processes, 
                track applicant information, and manage scholarship disbursements. The platform provides 
                an intuitive interface for both administrators and scholarship applicants.
              </p>
              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>PHP</span>
                <span>MySQL</span>
              </div>
              <div className="project-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn">View Code</a>
                <a href="https://simscms.online" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Live Demo</a>
              </div>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src="/REACT (2).jpeg" alt="CVDJMS" />
            </div>
            <div className="project-content">
              <h2>CVDJMS</h2>
              <p className="project-description">
                A specialized management system for document operations. 
                Features include room allocation, maintenance requests, inventory management, 
                staff scheduling, and comprehensive reporting tools.
              </p>
              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>PHP</span>
                <span>MySQL</span>
              </div>
              <div className="project-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn">View Code</a>
                <a href="https://cvdjms.online" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
