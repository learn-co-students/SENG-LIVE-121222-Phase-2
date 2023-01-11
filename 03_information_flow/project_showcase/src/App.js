import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

// Previous Approach
// import { projects } from "./projects";

const App = () => {

  // We Want to Load Up Our Data into "projects" State
    // Why? By storing our "projects" data in State,
    // We Can Now Work with Our Data More Flexibly
    // Via Inverse Data Flow
  const [projects, setProjects] = useState([]);  
  
  // Lifting isDarkMode to App
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Moving Up Our CB Function to Update isDarkMode State
  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // # Deliverable 1: Configure a <button> in our App 
  // that will use json-server to fetch projects 
  // and store them in state

  // - Add an onClick event listener to the "Load Projects" 
  // button

  const fetchProjects = () => {

    // specify our request URL, no second argument
    // no need for config object
    fetch("http://localhost:4000/projects")
      
      // convert JSON response into JS
      .then(res => res.json())

      // take data (Array), set as new value for projects
      // state
      .then(projects => setProjects(projects))
      
      // add some error handling
      .catch(error => console.error(error));
  }

  // Set appTheme Based Upon Value of isDarkMode Value
  const appTheme = isDarkMode ? "App" : "App light";

  return (
    <div className={appTheme}>
      <Header 
        isDarkMode={isDarkMode}
        onToggleDarkMode={onToggleDarkMode}
      />
      <ProjectForm/>
      <button onClick={fetchProjects}>Load Projects</button>
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
