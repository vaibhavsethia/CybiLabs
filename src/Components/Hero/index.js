import { Button } from "antd";
import React, { Component } from "react";
import Particles from "react-particles-js";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import Fade from "react-reveal/Fade";

import "./Hero.css";

const HeroQuote = [
  <div>
    <Fade left big cascade>
      Turn your <span className="hero-content-2">Ideas</span>
    </Fade>
    <Fade right big cascade>
      into reality !
    </Fade>
  </div>,
  <div>
    <Fade left big cascade>
      Innovative solutions for a 
    </Fade>
    <Fade right big cascade>
      <span className="hero-content-2">Better tomorrow!</span>
    </Fade>
  </div>,
  <div>
    <Fade left big cascade>
      Change to <span className="hero-content-2">Streamline</span>
    </Fade>
    <Fade right big cascade>
      your tech operations !
    </Fade>
  </div>,
  <div>
    <Fade left big cascade>
      Enabling Tech <span className="hero-content-2">Transformations</span>
    </Fade>
    <Fade right big cascade>
      for your business.
    </Fade>
  </div>,
  <div>
    <Fade left big cascade>
      Innovating <span className="hero-content-2">Beyond</span>
    </Fade>
    <Fade right big cascade>
      Horizon.      
    </Fade>
  </div>
]

export class Hero extends Component {
  render() {
    return (
      <div className="tc">
        <Particles
          className="bckgrd"
          height="100vh"
          params={{
            particles: {
              color: '#3f918d',
              number: {
                value: 400,
                density: {
                  enable: true,
                  value_area: 1200,
                },
              },
              line_linked: {
                enable: true,
                opacity: 0.02,
              },
              move: {
                direction: "right",
                speed: 0.6,
              },
              size: {
                value: 1.5,
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05,
                },
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                push: {
                  particles_nb: 1,
                },
              },
            },
            retina_detect: true,
          }}
        />
        <div className="hero-content tc">
          {HeroQuote[Math.floor(Math.random()*5)]}
          <Button onClick={() => this.props.MoveToSection('about-section')} >
            <span className="button-text">Learn More </span>
            <RightOutlined className="button-right" />
            <DownOutlined className="button-down" />
          </Button>
        </div>
      </div>
    );
  }
}

export default Hero;
