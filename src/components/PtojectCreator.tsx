import '../css/index.css';

const ProjectCreator  = ():JSX.Element => {
  return (
    <div className="project-creator-wrapper">
      <div className="block-creator">
        <div className="block-creator__icon">
           <img src="/Assets/layer.svg" alt="layer photo" />
        </div>
        <div className="block-creator__text-area">
          <div className="title">New project</div>
          <div className="description">Create your own new project</div>
        </div>
        <div className="block-creator__add-icon">
            <img src="/Assets/Group 24191.svg" alt="group icon" />
        </div>
      </div>
    </div>
  )
}

export default ProjectCreator;