import React, { useState } from "react";
import Navbar from "./Navbar";
import "./About.css";

const About = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <>
      <Navbar />
      <section className="about">
        <div className="about-content">
          <div className="about-text">
            <h2 className="name">ABOUT ME</h2>
            <h1>LYRRA FE BAUTISTA</h1>
            <p>
              Halu! I'm a 22-year-old, highly motivated Bachelor of Science in Information Technology student with adaptable and resilient personality.
              Committed in pursuing careers within the Information Technology field. Also, trying hard to know myself more and exploring new hobbies such as outdoor
              workouts, testing my alcohol tolerance, and beginning a new diet. How ironic! 
            </p>
            
            {/* Buttons */}
            <div className="buttons">
              <button onClick={() => toggleSection("education")} className="btn">EDUCATION</button>
              <button onClick={() => toggleSection("experience")} className="btn">EXPERIENCE</button>
              <button onClick={() => toggleSection("skills")} className="btn">SKILLS</button>
            </div>

            {/* Info Section */}
            <div className={`info-section ${activeSection ? "active" : ""}`}>
              {activeSection === "education" && (
                <div className="slide-content">TERTIARY: Western Mindanao State University 2021-2025  SECONDARY: Claret School of Zamboanga City 2015-2021 </div>
              )}
              {activeSection === "experience" && (
                <div className="slide-content">Experience in Web Development, UI/UX Design, and Software Development</div>
              )}
              {activeSection === "skills" && (
                <div className="slide-content">Skills in React, JavaScript, CSS, and UI/UX Design</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;



