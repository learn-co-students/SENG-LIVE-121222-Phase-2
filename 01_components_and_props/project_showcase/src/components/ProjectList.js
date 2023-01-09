// This component is responsible for rendering a list
// of ProjectListItem components.

import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects }) => {
    // const { projects } = props;

    // console.log(projects);

    // Should contain a "list" of ProjectListITem
    // components
    const ProjectListItems = projects.map(project => {
        return <ProjectListItem key={project.id} project={project} />
    });
    
    return (
        <ul>{ProjectListItems}</ul>
    );
}

export default ProjectList;