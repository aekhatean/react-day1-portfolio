import React from "react";
import { ListGroup } from "react-bootstrap";
import { RangeSkills } from "../components";

export default function Skills() {
  const interests = [
    "Python backend development",
    "Node.js backend developmet",
    "React frontend development",
  ];

  const skills = [
    {
      title: "HTML",
      proficiency: 95,
    },
    {
      title: "CSS",
      proficiency: 95,
    },
    {
      title: "Javascript",
      proficiency: 85,
    },
    {
      title: "React",
      proficiency: 85,
    },
    {
      title: "Node.js",
      proficiency: 65,
    },
  ];

  return (
    <div className="skills-section text-light bg-dark mt-5 pt-5 pb-5">
      <div className="container">
        <div className="row text-center mb-4">
          <h2>Skills Section</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            reprehenderit a iure repellendus ratione illo debitis totam ut
            eligendi. Ducimus obcaecati sapiente, cum vitae asperiores minus
            laboriosam cumque vero explicabo!
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ListGroup variant="flush">
              {interests.map((interest) => (
                <ListGroup.Item
                  variant="dark"
                  key={interest}
                  className="text-center text-light bg-dark mb-1"
                >
                  {interest}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
          <div className="col-md-6">
            {skills.map((skill) => (
              <RangeSkills
                title={skill.title}
                proficiency={skill.proficiency}
                key={skill.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
