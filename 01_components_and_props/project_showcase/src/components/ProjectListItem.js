const ProjectListItem = ({ project }) => {
    
    // Object Destructuring Assignment
    const { name, about, phase, link, image } = project;

    // const myProject = myProps.project;

    return (
        <li>
            <br />
            <p>ProjectListItem</p>
            <p>Name: {name}</p>
            <p>About: {about}</p>
            <p>Phase: {phase}</p>
            <a href={link}>{name}</a>
            <img 
                src={image} 
                // style={{ innerHeight: "10px" }} 
            />
            <br/>
        </li>
    );
}

export default ProjectListItem;