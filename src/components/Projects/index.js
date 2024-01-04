import './index.css'

const Projects = () => (
  <div className="bg-container">
    <h1 className="project-heading">Projects</h1>
    <div className="container1">
      <div className="con">
        <h1 className="heading">Project Name</h1>
        <p className="paragraph">
          I created this personal project in order to show how to create an
          interface in Figma using a portfolio as an example.
        </p>
        <button className="btn" type="button">
          View Project
        </button>
      </div>
      <img src="" alt="yoga" className="" />
    </div>
    <div className="container1">
      <img src="" alt="Calender" className="" />
      <div className="con1">
        <h1 className="heading">Project Name</h1>
        <p className="paragraph">
          What was your role, your deliverables, if the project was personal,
          freelancing.
        </p>
        <button className="btn" type="button">
          View Project
        </button>
      </div>
    </div>
    <div className="container1">
      <div className="con">
        <h1 className="heading">Project Name</h1>
        <p className="paragraph">
          You can also add in this description the type of the project, if it
          was for web, mobile, electron.
        </p>
        <button className="btn" type="button">
          View Project
        </button>
      </div>
      <img src="" alt="yoga" className="" />
    </div>
  </div>
)

export default Projects
