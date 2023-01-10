// Components
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

// Data
import projects from "./projects";

// Hooks
import { useState } from 'react';

const App = () => {

  // Inverse Data Flow

    // We Have Lifted State (isDarkMode) to App
    const [isDarkMode, setIsDarkMode] = useState(true);

    // We have brought over our Helper Function as well 
    const handleClick = () => {
      
      // Not Directly Mutating State, using Setter Function 
      // setDarkMode(!isDarkMode);
      // setDarkMode(() => !isDarkMode);
      
      // Preferred Approach
      setIsDarkMode(prevValue => !prevValue);
      
      // return !isDarkMode;
    }

  return (
    <div className={ isDarkMode ? "App" : "App light"}>
      <Header 
        isDarkMode={isDarkMode}
        handleClick={handleClick}
      />
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
