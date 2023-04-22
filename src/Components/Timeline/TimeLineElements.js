import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Image, Tooltip } from "antd";
import {
  CustomerServiceOutlined,
  LaptopOutlined,
  HomeOutlined
} from "@ant-design/icons";
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';
import Logo from '../../Images/Logo.png'
import "./Timeline.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline(props) {
  const classes = useStyles();

  return (
    <div>
      {
        props.section === 'home' ?
          <Timeline align="">
            <Image src={Logo}/> 

            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent></TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <Zoom top>
                  <Tooltip placement="right" title={"About"}>
                    <TimelineDot onClick={() => props.MoveToSection('about-section')} className="timeline-icon">
                    <HomeOutlined className=""/>
                    </TimelineDot>
                  </Tooltip>
                </Zoom>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent></TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <Zoom top>
                  <Tooltip placement="right" title={"Services"}>
                    <TimelineDot onClick={() => props.MoveToSection('service-section')} className="timeline-icon">
                    <LaptopOutlined className=""/>
                    </TimelineDot>
                  </Tooltip>
                </Zoom>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent></TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <Zoom top>
                  <Tooltip placement="right" title={"Contact"}>
                    <TimelineDot onClick={() => props.MoveToSection('contact-section')} className="timeline-icon">
                    <CustomerServiceOutlined className=""/>
                    </TimelineDot>
                  </Tooltip>
                </Zoom>
                {/* <TimelineConnector /> */}
              </TimelineSeparator>
              <TimelineContent></TimelineContent>
            </TimelineItem>
          </Timeline>
        :
        <Timeline align="">
        <Image src={Logo}/> 
  
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent></TimelineContent>
        </TimelineItem>
  
        <TimelineItem>
          <TimelineSeparator>
            <Zoom top>
              <Tooltip placement="right" title={"Go to home"}>
                <TimelineDot onClick={() => props.ChangeSection('home')} className="timeline-icon">
                <HomeOutlined className=""/>
                </TimelineDot>
              </Tooltip>
            </Zoom>
            {/* <TimelineConnector /> */}
          </TimelineSeparator>
          <TimelineContent></TimelineContent>
        </TimelineItem>
      </Timeline>
      }
    </div>
    
  );
}
