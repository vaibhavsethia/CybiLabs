import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Divider, Image } from "antd";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
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

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            className="timeline-date"
            variant="body2"
            color="textSecondary"
          >
            <Image src={Logo}/>
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Zoom top>
            <TimelineDot className="timeline-icon">
              <WorkOutlineOutlinedIcon />
            </TimelineDot>
          </Zoom>
          <TimelineConnector />
        </TimelineSeparator>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            className="timeline-date"
            variant="body2"
            color="textSecondary"
          >
            June, 2021 - Present
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Zoom top>
            <TimelineDot className="timeline-icon">
              <WorkOutlineOutlinedIcon />
            </TimelineDot>
          </Zoom>
          <TimelineConnector />
        </TimelineSeparator>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            className="timeline-date"
            variant="body2"
            color="textSecondary"
          >
            June, 2021 - Present
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Zoom top>
            <TimelineDot className="timeline-icon">
              <WorkOutlineOutlinedIcon />
            </TimelineDot>
          </Zoom>
          <TimelineConnector />
        </TimelineSeparator>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            className="timeline-date"
            variant="body2"
            color="textSecondary"
          >
            March, 2020 - Sept, 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Zoom top>
            <TimelineDot className="timeline-icon">
              <LaptopMacIcon />
            </TimelineDot>
          </Zoom>
          <TimelineConnector />
        </TimelineSeparator>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            className="timeline-date"
            variant="body2"
            color="textSecondary"
          >
            Jan, 2020 - May, 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Zoom top>
            <TimelineDot className="timeline-icon">
              <LaptopMacIcon />
            </TimelineDot>
          </Zoom>
          <TimelineConnector />
        </TimelineSeparator>
      </TimelineItem>
    </Timeline>
  );
}
