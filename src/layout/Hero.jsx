import React from "react";
import { Button } from "react-bootstrap";

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6"
            style={{
              color: "#fff",
              position: "relative",
              top: "10rem",
              textAlign: "left",
            }}
          >
            <h1>Adham Khatean</h1>
            <h3>Full-stack web developer using React & Python</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Button
              variant="outline-light"
              size="lg"
              style={{
                position: "relative",
                top: "370%",
              }}
            >
              Contact me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
