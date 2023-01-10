import ProjectListItem from "./ProjectListItem";

import { useState } from 'react';

const ProjectList = ({ projects }) => {

  // Set Up State / State Setter Function to Manage searchQuery
  const [ searchQuery, setSearchQuery ] = useState("");

  // Set Up Helper Function to Handle onChange Event
  const handleInput = (e) => {
    // console.log(e.target.value);

    // Every Time the User Makes a Keystroke
    // Change, searchQuery is Updated With
    // That Latest Value
    setSearchQuery(e.target.value);
  }

  // We Need This to Be an Array Just
  // Like "projects"
  const filteredProjects = projects.filter(project => {
    
    // Filter Out Projects By Name
    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
    // return project.name.toUpperCase().includes(searchQuery.toUpperCase());
  });

  const projectListItems = filteredProjects.map(project => (
    <ProjectListItem key={project.id} {...project} />
  ));

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input onChange={handleInput} type="text" placeholder="Search..."/>

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
