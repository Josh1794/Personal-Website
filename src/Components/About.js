import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var tech = this.props.data.tech;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Joshua Grossman's Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <p>{tech}</p>
            <ul>
              <li>- JavaScript (ES6+)</li>
              <li>- ReactJS</li>
              <li>- Redux.js</li>
              <li>- Node.js</li>
              <li>- Express.js</li>
              <li>- Sequelize.js</li>
              <li>- PostgreSQL</li>
              <li>- React-Native</li>
            </ul>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button">
                    <i className="fa fa-download"></i>
                    My Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
