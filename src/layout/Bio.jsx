import React from "react";
import { Button } from "react-bootstrap";

export default function Bio() {
  return (
    <div className="bio-section mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1>About me</h1>
          </div>
          <div className="col-md-6">
            <div className="row">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe,
              odit? Maiores recusandae animi laudantium, quas et aliquid facere
              vitae esse consequatur sapiente libero. Qui id eos esse eveniet
              beatae! Dignissimos! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Saepe, odit? Maiores recusandae animi
              laudantium, quas et aliquid facere vitae esse consequatur sapiente
              libero. Qui id eos esse eveniet beatae! Dignissimos!
            </div>
            <div className="row mt-3">
              <a
                href={require("../assets/Adham-Khatean-Python-FS.pdf")}
                download="Adham-khatean-resume"
              >
                <Button variant="dark" className="col-md-4">
                  Download resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
