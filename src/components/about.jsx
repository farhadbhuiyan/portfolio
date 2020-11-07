import React from "react";
import myImage from "../img/mypic.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "70%",
          value: "70"
        },
        { 
          id: "HTML5_skill", 
          content: "HTML5", 
          porcentage: "80%", 
          value: "80" 
        },
        { 
          id: "CSS3_skill", 
          content: "CSS3",
           porcentage: "75%",
            value: "75" 
        },
        { 
          id: "PHP_skill", 
          content: "PHP", 
          porcentage: "70%", 
          value: "70" 
        },
        {
          id: "Bootstrap_skill",
          content: "Bootstrap",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "MaterialUI_skill",
          content: "MaterialUI",
          porcentage: "60%",
          value: "60"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            `A hardworking and energetic programmer who cherishes a dream to change the world through coding,
            comfortable with JavaScript, C, C++, and PHP, seeking an opportunity from a reputed company to explore
            latent talent and nourish skills.`
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            src={myImage}
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skill</p>
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-striped bg-success"
                                role="progressbar"
                                style={{ width: skill.porcentage}}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
