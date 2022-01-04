import React from "react";
import { Card } from "react-bootstrap";

export default function StudyCases() {
  const niches = [
    "Web design",
    "Mobile design",
    "Logo design",
    "Web application development",
    "Mobile application development",
    "PWA development",
  ];
  return (
    <div className="study-cases-section mt-5">
      <div className="container">
        <div className="row">
          <h2>Study case section</h2>
        </div>
        <div className="row justify-content-center m-5">
          {niches.map((niche) => (
            <Card
              bg="dark"
              key={niche}
              text="light"
              style={{ height: "9rem" }}
              className="col-md-3 m-1 text-center"
            >
              <Card.Body>
                <Card.Title>{niche}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
