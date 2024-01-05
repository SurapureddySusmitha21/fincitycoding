// Write your JS code here
import './index.css'

const About = () => (
  <div>
    <div className="bg-container1">
      <div className="about-container">
        <h1 className="about-heading">UI/UX DESIGNER</h1>
        <p className="about-paragraph">Hello, my name is Susmitha</p>
        <p className="length-paragraph">I am Full stack developer......</p>
        <div className="btn-conter">
          <button className="project-btn" type="button">
            Prijects
          </button>
          <button className="linkdin-btn" type="button">
            Linkedin
          </button>
        </div>
      </div>

      <img
        src="https://res.cloudinary.com/dbfpqkwko/image/upload/v1704427968/WhatsApp_Image_2024-01-05_at_09.39.39_b2ec2b9b-flwr_jw4vze.jpg"
        alt="flower"
        className="flower-image"
      />
    </div>
    <div className="add-project-container">
      <h1 className="add-projects-heading">Add Projects</h1>
      <form className="form-con">
        <label className="label" htmlFor="projectName">
          Project Name
        </label>
        <input className="user-input" type="text" id="projectNam" />
        <label className="label" htmlFor="projectLink">
          Project Link
        </label>
        <input className="user-input" type="text" id="projectLink" />
        <label className="label" htmlFor="description">
          Description
        </label>
        <input className="user-input" type="text" id="description" />
        <button className="add-btn" type="button">
          Add
        </button>
      </form>
    </div>
  </div>
)

export default About
