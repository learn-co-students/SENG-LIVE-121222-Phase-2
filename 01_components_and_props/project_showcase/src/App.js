import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

// Why would we want to import "projects" data at
// such a high level? (App.js)
import projects from "./projects";

function App() {
  return (
    <>
      <div>Project Showcase</div>
      
      {/* Header Component */}
      <Header 
        firstName="Louis"
        lastName="Medina"
        age="32"
      />
      
      {/* ProjectForm Component */}
      <ProjectForm />
      
      {/* This component needs to render a list of
      ProjectListItem Components */}
      {/* ProjectListComponent */}
      <ProjectList 
        projects={projects}
      />
    </>
  );
}

export default App;