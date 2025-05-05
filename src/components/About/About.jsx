import './About.css';
// Remove or comment out this line
// import profileImage from '../../assets/images/profile.jpg';

const About = () => {
  // Use a placeholder image URL instead
  const profileImage = "/fe.jpeg"; // Replace with your actual image URL
  
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <img src={profileImage} alt="Profile" />
            </div>
          </div>
          <div className="about-text">
            <p>
              Hello! I'm a passionate frontend developer with a keen eye for design and a love for creating
              intuitive, responsive user interfaces. With a background in Frontend Development, I bring a unique
              perspective to every project I work on.
            </p>
            <p>
              My journey in web development started in CCS. Since then, I've been constantly learning
              and improving my skills to stay up-to-date with the latest technologies and best practices.
            </p>
            <p>
              When I'm not coding, you can find me jogging, walking. These activities help me maintain
              a creative mindset and bring fresh ideas to my development work.
            </p>
            <div className="skills">
              <h3>My Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Responsive Design</span>
                <span className="skill-tag">UI/UX</span>
                {/* Add more skills as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
