import '../css/index.css';

export interface projectItem {
    id: number,
    title: string,
    version: string,
    src: string
}


const ProjectItem = ({ id, src, version, title } : projectItem) : JSX.Element => {
  return (
    <div className='project-item'>
      <div className="project-item-description">
        <div style={{backgroundImage: `url(${src})`}} className="logo-wrapper">
        </div>
        <span>{title} </span>{version}
      </div>
      <div className="project-item-buttons">
        <img src="/Assets/3 Dotts workspace.svg" alt="buttons icon" />
      </div>
    </div>
  )
}

export default ProjectItem