import '../../css/index.css';
import ProjectItem from './ProjectItem';
import {projectItem} from './ProjectItem';

interface projectProps {
  projects : projectItem[]
}

const Projects = ({ projects } : projectProps) : JSX.Element => {
  return (
  <div className="project-wrapper">
    <div className='project-header'>
    <div><span>Recent projects</span></div> 
    <div><input placeholder='Find project' type="text" /></div>
    </div>
    {projects.map((el:projectItem) => {
      return (
        <ProjectItem
        key = {el.id}
        id = {el.id}
        title = {el.title}
        version = {el.version}
        src = {el.src}
        />
      )
    })}
  </div>
  )
}

export default Projects