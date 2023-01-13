import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import Timer from "./components/Timer";

// Deliverable 1: Implement useEffect in App component 
// to load projects

  // DONE - Import the `useEffect` hook from the React library

  // DONE - Invoke `useEffect` and make a `GET` request using 
  // the `fetch` method

  // DONE - Update `projects` state upon successful response 
  // from the server

// Deliverable 2: Demonstrate the order of operations 
// between rendering a component and running the side 
// effect

  // DONE - Place a console.log() inside the `App` component as 
  // well as the `useEffect` method

  // DONE - Open up the devtools to observe when each phase of 
  // the component will occur 

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isTimerVisible, setIsTimerVisible] = useState(false);

  const onAddProject = newProject => {
    const newProjectCollection = [...projects, newProject];
    setProjects(newProjectCollection);
  }

  const toggleTimer = () => {
    setIsTimerVisible(!isTimerVisible);
  }

  // useEffect(EFFECT(CB), DEPENDENCY ARRAY)

    // Dependency Array Options

      // Omit Entirely => No Constraint, Fire Off "Side Effect"
        // Each Time Component Re-Renders
      // [] => Fire Off "Side Effect" Once and Only Once (Initial Render)
      // [some, other, variables] => Fire Off "Side Effect"
        // Each Time "some", "other", "variables" Are Changed

  // 1. Invoke App Component Function
  // 2. Invoke useEffect Hook
  // 3. Invoke App Component Function Again

  useEffect(() => {
    
    // console.log("Side Effect Fired Off!");
    
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
  }, []);

  // console.log("Component Rendered!");
  
  // BAD!
    // });
    // }, [projects]);

  // const handleClick = () => {
    // fetch("http://localhost:4000/projects")
    //   .then((res) => res.json())
    //   .then((projects) => setProjects(projects));
  // };

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Update "projects" State With Filtered List When Error Occurs
  // With POST Request
  const onError = filteredList => { setProjects(filteredList) };

  const toggleTimerText = isTimerVisible ? "Hide Timer" : "Show Timer";

  const timerComponent = isTimerVisible ? <Timer /> : null

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <button onClick={toggleTimer}>{toggleTimerText}</button>
      {timerComponent}
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <ProjectForm 
        onAddProject={onAddProject} 
        onError={onError}
        projects={projects}
      />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;