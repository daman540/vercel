import React from "react";
import Card from "react-bootstrap/Card";
import { CgHeadset } from "react-icons/cg";
import { GiRetroController } from "react-icons/gi";
import { RiSwitchFill } from "react-icons/ri";
import { TbMathIntegralX } from "react-icons/tb";
import { TbManualGearbox } from "react-icons/tb";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dhruve Mistry </span>
            from <span className="purple"> Austin, Texas.</span>
            <br />
            I am currently looking for work as a Software Engineer.
            <br />
            I have completed my Bs.C. in Computer Science | Applied Mathematics
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <GiRetroController /> Playing Old Games
            </li>
            <li className="about-activity">
              <RiSwitchFill /> Playing Zelda on Nintendo Switch
            </li>
            <li className="about-activity">
              <TbMathIntegralX /> Teaching others the limitless world of mathematics
            </li>
            <li className="about-activity">
              <TbManualGearbox /> Driving cars
            </li>
            <li className="about-activity">
              <CgHeadset /> Listening to 70s/80s music
              <ul>
                <li>The Eagles</li>
                <li>Pink Floyd</li>
                <li>Metallica</li>
                <li>George Strait</li>
                <li>John Denver</li>
                <li>Rush</li>
              </ul>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", textAlign: "left"}}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer" style={{textAlign: "left", marginLeft: "30px"}}>
            Dhruve
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
