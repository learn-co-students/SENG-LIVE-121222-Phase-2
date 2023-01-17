import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectEditForm from "./components/ProjectEditForm";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  }, []);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  // Update "projects" State With Newest "project" Object
  const onAddProject = (newProj) => {
    setProjects((projects) => [...projects, newProj]);
  };

  // Update "projects" State With Modified "project" Object
  const onUpdateProject = (updatedProject) => {
    
    // Return a List of "projects" With Updated Project Replacing
    // OriginalProject 
    const updatedProjectsList = projects.map(originalProject => {

      // Compare The Ids of Each "originalProject" Against the 
      // Id of "updatedProject"
      if (updatedProject.id === originalProject.id) {
        
        // When Ids Do Not Match, Return originalProject
        return updatedProject;
      } else {
        
        // In All Other Cases, Return updatedProject
        return originalProject;
      }
    });

    // Modify the "projects" State in Some Way
    setProjects(updatedProjectsList);
  }

  // Updates a State => projectId
    // Initially => null
    // Ultimately => Some Project ID
  const enterProjectEditModeFor = (projectId) => {
    setProjectId(projectId);
  };

  // Update a State => projectId
    // projectId => null
  const completeEditing = () => {
    setProjectId(null);
  };

  // Determines Whether We Will See ProjectEditForm / Project Form
  const renderForm = () => {
    
    // Null => Falsey Value
      // "null" Not Equal to "false"
    if (projectId) {
      return (
        <ProjectEditForm
          projectId={projectId}
          completeEditing={completeEditing}
          onUpdateProject={onUpdateProject}
        />
      );
    } else {
      return <ProjectForm onAddProject={onAddProject} />;
    }
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      {renderForm()}
      <ProjectList
        projects={projects}
        enterProjectEditModeFor={enterProjectEditModeFor}
      />
    </div>
  );
};

export default App;
