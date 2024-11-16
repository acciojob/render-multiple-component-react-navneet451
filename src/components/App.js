import React from "react";
import '../styles/App.css';

const App = () => {
  // Array of dream projects with names and descriptions
  const projects = [
    { name: "AI Chatbot", description: "A chatbot that uses AI to answer queries." },
    { name: "Fitness Tracker", description: "An app to track your fitness goals." },
    { name: "E-commerce Website", description: "A platform to buy and sell products." }
  ];

  return (
    <div id="main" className="ns-wrapper">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  );
};

export default App;

