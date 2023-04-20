import React, { Component } from "react";
import {
  GithubOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  UpOutlined
} from "@ant-design/icons";
import { BackTop } from "antd";

import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer-section tc">
        <BackTop>
          <div className="back-top-footer">
            <UpOutlined />
          </div>
        </BackTop>
        <br />
        <a
          href=""
          className="icons-footer pa2 f3 fw1 pt2 pb1"
          style={{ color: "white" }}
          target="_blank"
        >
          <GithubOutlined />
        </a>
        <a
          href=""
          className="icons-footer pa2 f3 fw1 pt2 pb1"
          style={{ color: "white" }}
          target="_blank"
        >
          <FacebookOutlined />
        </a>
        <a
          href=""
          className="icons-footer pa2 f3 fw1 pt2 pb1"
          style={{ color: "white" }}
          target="_blank"
        >
          <LinkedinOutlined />
        </a>
        <br />
        <span className="cpright"><a className="footer-links">Terms Of Use</a> <span className="bar-footer">|</span> Cybilabs © 2023 <span className="bar-footer">|</span> <a className="footer-links">Privacy Policy</a></span>
      </div>
    );
  }
}

export default Footer;
