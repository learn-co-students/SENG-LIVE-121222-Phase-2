// Deliverable 2: Click the delete button and make a 
// DELETE request

// DONE - Attach an `onClick` event listener to the delete 
// button

// DONE - Add a `DELETE` fetch request to the event handler 
// for the delete button

// DONE - Update the `projects` state in the parent component
// `App` using the `.filter` function

  //  The goal is to return a new array with the deleted project excluded

// -----------------

  // Deliverable 3: Click the claps button and persist the updated number of claps

  // - Send a `PATCH` request when the `clapsCount` is updated through a click event
  
  // - Update the `projects` state in the parent component `App` using the `.map` function

import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const ProjectListItem = ({ project, enterProjectEditModeFor, onDeleteProject }) => {
  
  const { id, image, about, name, link, phase, claps } = project;

  console.log(claps);

  // If project Has Any Claps, Load That Number Up As Our Initial Value
  // If Not, Load Up "0" As Our Initial Value

    // If "claps" is Not Falsey, Use That As Initial Value
    // If "claps" is Falsey (Undefined), Use "0" As Initial Value
  const [clapCount, setClapCount] = useState(claps || 0);

  // - Send a `PATCH` request when the `clapsCount` is updated through a click event
  const handleClap = () => { 
    
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ claps: clapCount + 1 })
    };

    fetch(`http://localhost:4000/projects/${id}`, configObj)
      .then((resp) => resp.json())
      .then(() => {
        
        // TWO GOALS => Update Data (Back End) + Update State (Front End)
        
        // State Change
        setClapCount(prevCount => prevCount + 1);
      });
  };

  // Inverse Data Flow
    // Updates "projectId" State in Root App
    
    // Helper Function => handleEditClick
    // enterProjectEditModeFor => CB Function Containing State Setter Function
      // Invocation
  const handleEditClick = () => {
    enterProjectEditModeFor(id);
  };

  const handleDeleteClick = () => {
    
    const configObj = {
      method: "DELETE"
    };

    fetch(`http://localhost:4000/projects/${id}`, configObj)
      .then((resp) => resp.json())
      .then(() => {
        
        // TWO GOALS => Update Data (Back End) + Update State Asynchronously (Front End)
        
        // Update the `projects` state in the parent 
        // component `App` using the `.filter` function

        // The goal is to return a new array with the 
        // original project excluded and the newly updated 
        // project included.

        onDeleteProject(project);

        // Reverts "projectId" to "null"
          // App Component Re-Renders With <ProjectForm />
        // completeEditing();
      });
  };

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={handleClap} className="claps">
          👏{clapCount}
        </button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
        <div className="manage">
          <button onClick={handleEditClick}>
            <FaPencilAlt />
          </button>
          <button onClick={handleDeleteClick}>
            <FaTrash />
          </button>
        </div>
      </footer>
    </li>
  );
};

export default ProjectListItem;
