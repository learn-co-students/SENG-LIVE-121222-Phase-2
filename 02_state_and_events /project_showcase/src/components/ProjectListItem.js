import { useState } from 'react';

const ProjectListItem = ({ id, about, image, link, name, phase }) => {
  
  // Set Up State / State Setter Function to Manage clapCount
  const [ clapCount, setClapCount ] = useState(0);
  
  // Set Up Helper Function to Handle Click Event
  const handleClaps = (e) => {
    
    // console.log(e);

    // Pre-Built Setter Function From useState Hook
    // setClapCount(clapCount => clapCount + 1);
    setClapCount(prevCount => prevCount + 1);
  }

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={handleClaps} className="claps">👏{clapCount}</button>
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
      </footer>
    </li>
  );
};

export default ProjectListItem;
