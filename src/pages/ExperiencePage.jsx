import './ExperiencePage.css';

const ExperiencePage = () => {
  return (
    <div className="page experience-page">
      <div className="container">
        <h1 className="page-title">My Experience</h1>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2023 - Present</div>
            <div className="timeline-content">
              <h3>System Analyst</h3>
              <h4>CODEMAVS</h4>
              <p>
                Led the development of the company's flagship web application using React and TypeScript.
                Implemented state management with Redux, improved performance by 40%, and mentored junior developers.
              </p>
              <div className="timeline-tech">
                <span>React</span>
                <span>TypeScript</span>
                <span>Redux</span>
                <span>Styled Components</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
