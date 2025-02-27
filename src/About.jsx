import React from "react";
import Navbar from "./Navbar";
import "./About.css"; 

const About = () => {
  return (
    <>
      <Navbar />
      <section className="about">
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Halu! Im Lyrra, a 22 year old Bachelor of Science in Information Technology student in 
            Western Mindanao State University. Finished High School and Senior High School at Claret School of Zamboanga City.
            Currently suffering and surviving this semester. Also, trying hard to know myself more and explored new hobbies such as outdoor
            workouts, testing my alcholo tolerance and began a new diet. How ironic! 
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
