// Write your JS code here
import './index.css'

const About = () => (
  <div>
    <div className="bg-container1">
      <div className="about-container">
        <h1 className="about-heading">UI/UX DESIGNER</h1>
        <p className="about-paragraph">Hello, my name is Madelyn Torff</p>
        <p className="length-paragraph">
          Short text with details about you, what you do or your professional
          carees. You can add more information on the about page.
        </p>
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
        src="https://www.freepik.com/free-photo/young-woman-holding-bunch-flowers_1211898.htm#query=girl%20with%20flower%20image%20for%20protofile&position=9&from_view=search&track=ais&uuid=a64661a4-4709-48dc-b451-f55c4c6541d7"
        alt="flower"
        className=""
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
