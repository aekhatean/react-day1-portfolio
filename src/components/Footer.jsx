import React from "react";
import { Button } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light p-4">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-4">
            <h3 className="mb-4">Get in touch</h3>
            <p>aekhatean@gmail.com</p>
            <p>+201066702235</p>
          </div>
          <div className="col-md-4">
            <Button variant="outline-light">Contact me</Button>
          </div>
          <div className="col-md-4">
            <p>On Facebook</p>
            <p>On Twitter</p>
            <p>On Linkedin</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
