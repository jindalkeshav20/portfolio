import React from "react";

const Skills = ({ colorstyle }) => {
  // const SkillData = [
  //     {
  //         img: "images/html.svg",
  //         number: "95%",
  //         title: "HTML, SCSS, JavaScript",
  //     },
  //     {
  //         img: "images/bootstrap.svg",
  //         number: "90%",
  //         title: "Bootstrap",
  //     },
  //     {
  //         img: "images/react.svg",
  //         number: "60%",
  //         title: "React.js",
  //     },
  //     {
  //         img: "images/php.svg",
  //         number: "70%",
  //         title: "PHP, MySQL",
  //     },
  //     {
  //         img: "images/wp.svg",
  //         number: "90%",
  //         title: "WordPress",
  //     },
  //     {
  //         img: "images/laravel.svg",
  //         number: "75%",
  //         title: "Laravel",
  //     },
  // ];

  const SkillData = [
    {
      img: "images/node.svg",
      title: "Node Js",
    },
    {
      img: "images/expressjs.svg",
      title: "Express Js",
    },
    {
      img: "images/api_inte.png",
      title: "Api Integration",
    },
    {
      img: "images/rest_api.png",
      title: "RestFul Api",
    },
    {
      img: "images/authentication.png",
      title: "Authentication & Security",
    },
    {
      img: "images/react.svg",
      title: "React Js",
    },
    {
      img: "images/state_manage.png",
      title: "State Management (Redux)",
    },
    {
      img: "images/react-hooks.png",
      title: "React Hooks",
    },
    {
      img: "images/js.svg",
      title: "Javascript",
    },
    {
      img: "images/mysql.png",
      title: "SQL Database",
    },
    {
      img: "images/mongoo.svg",
      title: "MongoDB",
    },
    {
      img: "images/tailwind.svg",
      title: "Tailwind Css",
    },
    {
      img: "images/html.svg",
      title: "Html",
    },
    {
      img: "images/css.png",
      title: "Css",
    },
    {
      img: "images/bootstrap.svg",
      title: "Bootstrap",
    },
    {
      img: "images/responsive.png",
      title: "Responsive Design",
    },
    {
      img: "images/python.svg",
      title: "Python",
    },
  ];

  return (
    <>
      {/* SKILLS SECTION START */}
      <section className={`skills-section ${colorstyle}`} id="skills-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center">
                <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                  My Skills
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  A strong full-stack skill set focused on building scalable,
                  secure, and performance-driven applications using modern
                  technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="skills-widget d-flex flex-wrap justify-content-center align-items-center">
                {SkillData.map((skill, index) => (
                  <div
                    className="skill-item wow fadeInUp"
                    data-wow-delay={`.${index + 3}s`}
                    key={index}
                  >
                    <div className="skill-inner">
                      <div className="icon-box">
                        <img src={skill.img} alt={`${skill.title} Icon`} />
                      </div>
                      {/* <div className="number">{skill.number}</div> */}
                    </div>
                    <p>{skill.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SKILLS SECTION END */}
    </>
  );
};

export default Skills;
