// Deliverable 2: Add createGlobalStyle and ThemeProvider Components

  // createGlobalStyle => https://styled-components.com/docs/api#createglobalstyle
  // ThemeProvider => https://styled-components.com/docs/api#themeprovider

  import { createGlobalStyle, ThemeProvider } from 'styled-components';

  import { useState, useEffect } from "react";
  import { Switch, Route } from "react-router-dom";
  
  
  import Header from "./components/Header";
  import ProjectForm from "./components/ProjectForm";
  import ProjectList from "./components/ProjectList";
  import ProjectEditForm from "./components/ProjectEditForm";
  import ProjectDetail from "./components/ProjectDetail";
  import Home from "./components/Home";
  import About from "./components/About";
  
  // CSS-in-JS Follows Idea of Encapsulation
  const GlobalStyle = createGlobalStyle`
    :root { 
      --turquoise: #00efe1;
      --mid-turquoise: #14d5c9;
      --dark-turquoise: #00333f;
      --black: #030416;
      --white: #f1f1f1;
      --grey: #d6e2e7;
      --dark-grey: #7f8a8e;
      --yellow: #f9c51a;
      --orange: #ff5c00;
      --fuschia: #e80352;
      --blue: #338fff;
      --blue-dark: #145cb3;
      --purple: #cda2ff;
      --green: #00ef7c;
      --color: var(--white);
      --background: var(--black);
      --primary: var(--turquoise);
    }

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body {
      font-family: "Fira Code", monospace;
      font-size: 16px;
      color: var(--color);
      background-color: var(--background);
    }

    .App {
      color: var(--color);
      background-color: var(--background);
      min-height: 100vh;
    }

    .App.light {
      --color: var(--black);
      --background: var(--white);
      --primary: var(--dark-turquoise);
    }

    section {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `

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
      setIsDarkMode(!isDarkMode);
    };
  
    const onAddProject = (newProj) => {
      setProjects((projects) => [...projects, newProj]);
    };
  
    const onUpdateProject = (updatedProj) => {
      const updatedProjects = projects.map((ogProject) => {
        if (ogProject.id === updatedProj.id) {
          return updatedProj;
        } else {
          return ogProject;
        }
      });
      setProjects(updatedProjects);
    };
  
    const onDeleteProject = (deletedProj) => {
      const updatedProjects = projects.filter(
        (project) => project.id !== deletedProj.id
      );
      setProjects(updatedProjects);
    };
  
    const completeEditing = () => {
      setProjectId(null);
    };
  
    const enterProjectEditModeFor = (projectId) => {
      setProjectId(projectId);
    };
  
  
    return (
      <div className={isDarkMode ? "App" : "App light"}>
        <GlobalStyle />
        
        <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
        <Switch>
          
          {/* / => Root URL */}
          <Route exact path="/">
            <Home />
          </Route>
  
          {/* /about */}
          <Route path="/about">
            <About />
          </Route>
  
          {/* /projects/new */}
          <Route path="/projects/new">
            <ProjectForm onAddProject={onAddProject} />
          </Route>
          
          {/* /projects/:id/edit */}
          {/* Dynamic URL => Uses the :id Symbol */}
          <Route path="/projects/:id/edit">
            <ProjectEditForm 
              projectId={projectId}
              completeEditing={completeEditing}
              onUpdateProject={onUpdateProject} 
            />
          </Route>
          
          {/* /projects/:id */}
          {/* Dynamic URL => Uses the :id Symbol */}
          <Route path="/projects/:id">
            <ProjectDetail />
          </Route>
          
          {/* /projects */}
          <Route path="/projects">
            <ProjectList
              projects={projects}
              onDeleteProject={onDeleteProject}
              enterProjectEditModeFor={enterProjectEditModeFor}
            />
          </Route>
        </Switch>
      </div>
    );
  };
  
  export default App;