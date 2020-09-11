import { Button } from "antd";
import React, { Component } from "react";
import Particles from "react-particles-js";
import { DownOutlined, RightOutlined } from "@ant-design/icons";

import "./Hero.css";

export class Hero extends Component {
  render() {
    return (
      <div className="tc">
        <Particles
          className="bckgrd"
          height="100vh"
          params={{
            particles: {
              number: {
                value: 200,
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
                speed: 0.5,
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
          Hello, I'm <span className="hero-content-2">Vaibhav Sethia</span>,{" "}
          <br /> I'm a full-stack developer.
          <br />
          <Button onClick={this.props.View}>
            <span className="button-text">View My Work</span>
            <RightOutlined className="button-right"/>
            <DownOutlined className="button-down"/>
          </Button>
        </div>
      </div>
    );
  }
}

export default Hero;