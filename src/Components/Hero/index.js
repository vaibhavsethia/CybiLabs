import { Button } from "antd";
import React, { Component } from "react";
import Particles from "react-particles-js";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import Fade from "react-reveal/Fade";

import "./Hero.css";
import { Link } from "react-router-dom";

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
                value: 300,
                density: {
                  enable: true,
                  value_area: 1500,
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
                value: 1,
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
          <Fade left big cascade>
            Turn your <span className="hero-content-2">Ideas</span>
          </Fade>
          <Fade right big cascade>
            into reality !
          </Fade>
          <Link to="/Portfolio_new/">
            <Button onClick={this.props.View}>
              <span className="button-text">This is how ?</span>
              <RightOutlined className="button-right" />
              <DownOutlined className="button-down" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Hero;
