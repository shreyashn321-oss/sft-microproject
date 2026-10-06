import { useState } from "react";
import "./Team.css";

import member1 from "../../assets/images/member1.jpeg";
import member2 from "../../assets/images/member2.jpeg";
import member3 from "../../assets/images/member3.jpeg";
import member4 from "../../assets/images/member4.jpg";

function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "Shreyash Naik",
      role: "Frontend Developer",
      image: member1,

      shortDescription:
        "Passionate about creating modern and interactive web experiences.",

      description:
        "I enjoy building clean, responsive and interactive websites. I love working with modern frontend technologies and turning creative ideas into real digital experiences.",

      skills: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
      ],

      education: "Diploma in Computer Engineering",

      projects: [
        "Portfolio Website",
        "Smart Hostel Management",
        "Travel Website",
      ],

      interests: [
        "Web Development",
        "UI Design",
        "Creative Coding",
      ],

      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      email: "yourmail@gmail.com",
    },

    {
      name: "Om Jadhav",
      role: "Backend Developer",
      image: member2,

      shortDescription:
        "Focused on APIs, databases and reliable backend systems.",

      description:
        "Passionate about backend development and building efficient systems. Enjoys working with APIs, databases and server-side technologies.",

      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "REST API",
      ],

      education: "Diploma in Computer Engineering",

      projects: [
        "REST API Project",
        "Hostel Management Backend",
        "Student Management System",
      ],

      interests: [
        "Backend Development",
        "Databases",
        "API Development",
      ],

      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      email: "yourmail@gmail.com",
    },

    {
      name: "Aditya Kshirsagar",
      role: "Full Stack Developer",
      image: member3,

      shortDescription:
        "Building complete web applications from frontend to backend.",

      description:
        "Passionate about developing complete web applications. Enjoys working across frontend and backend technologies to build functional, responsive and user-friendly digital solutions.",

      skills: [
        "React",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "HTML",
        "CSS",
      ],

      education: "Diploma in Computer Engineering",

      projects: [
        "Full Stack Web Application",
        "Hostel Management System",
        "E-Commerce Website",
      ],

      interests: [
        "Full Stack Development",
        "Web Development",
        "Problem Solving",
        "UI Development",
      ],

      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      email: "yourmail@gmail.com",
    },

    {
      name: "Raman Chidrawar",
      role: "Full Stack Developer",
      image: member4,

      shortDescription:
        "Building complete applications from frontend to backend.",

      description:
        "Enjoys developing complete web applications and connecting frontend interfaces with powerful backend systems.",

      skills: [
        "React",
        "Node.js",
        "MongoDB",
        "JavaScript",
      ],

      education: "Diploma in Computer Engineering",

      projects: [
        "Full Stack Application",
        "Hostel Management System",
        "E-Commerce Website",
      ],

      interests: [
        "Full Stack Development",
        "Problem Solving",
        "Web Applications",
      ],

      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      email: "yourmail@gmail.com",
    },
  ];

  return (
    <section className="team-section" id="team">

      <div className="team-container">

        {/* HEADER */}

        <div className="team-header">

          <span className="team-label">
            OUR TEAM
          </span>

          <h2>
            Meet the
            <span> Team.</span>
          </h2>

          <p>
            Meet the people behind our projects.
            Click on a member to explore their profile.
          </p>

        </div>

        {/* TEAM CARDS */}

        <div className="team-grid">

          {teamMembers.map((member, index) => (

            <div
              className="team-card"
              key={index}
              onClick={() => setSelectedMember(member)}
            >

              <div className="team-number">
                0{index + 1}
              </div>

              <div className="team-image-wrapper">

                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />

              </div>

              <div className="team-content">

                <span className="team-role">
                  {member.role}
                </span>

                <h3>
                  {member.name}
                </h3>

                <p>
                  {member.shortDescription}
                </p>

                <div className="team-view">

                  <span>
                    View Profile
                  </span>

                  <span className="team-arrow">
                    →
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* PROFILE MODAL */}

      {selectedMember && (

        <div
          className="profile-overlay"
          onClick={() => setSelectedMember(null)}
        >

          <div
            className="profile-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              className="profile-close"
              onClick={() => setSelectedMember(null)}
              aria-label="Close profile"
            >
              ×
            </button>

            {/* PHOTO */}

            <div className="profile-image-wrapper">

              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="profile-image"
              />

            </div>

            {/* INFO */}

            <div className="profile-info">

              <span className="profile-role">
                {selectedMember.role}
              </span>

              <h2>
                {selectedMember.name}
              </h2>

              <p className="profile-description">
                {selectedMember.description}
              </p>

              {/* EDUCATION */}

              <div className="profile-block">

                <span className="profile-title">
                  EDUCATION
                </span>

                <p>
                  {selectedMember.education}
                </p>

              </div>

              {/* SKILLS */}

              <div className="profile-block">

                <span className="profile-title">
                  SKILLS
                </span>

                <div className="profile-tags">

                  {selectedMember.skills.map(
                    (skill, index) => (
                      <span key={index}>
                        {skill}
                      </span>
                    )
                  )}

                </div>

              </div>

              {/* PROJECTS */}

              <div className="profile-block">

                <span className="profile-title">
                  PROJECTS
                </span>

                <div className="profile-list">

                  {selectedMember.projects.map(
                    (project, index) => (

                      <div key={index}>
                        <span>✦</span>
                        {project}
                      </div>

                    )
                  )}

                </div>

              </div>

              {/* INTERESTS */}

              <div className="profile-block">

                <span className="profile-title">
                  INTERESTS
                </span>

                <div className="profile-tags">

                  {selectedMember.interests.map(
                    (interest, index) => (

                      <span key={index}>
                        {interest}
                      </span>

                    )
                  )}

                </div>

              </div>

              {/* SOCIAL LINKS */}

              <div className="profile-block">

                <span className="profile-title">
                  CONNECT
                </span>

                <div className="profile-social">

                  <a
                    href={selectedMember.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>

                  <a
                    href={`mailto:${selectedMember.email}`}
                  >
                    Gmail
                  </a>

                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Team;