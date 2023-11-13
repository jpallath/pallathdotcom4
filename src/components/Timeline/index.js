import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "./Timeline.module.scss";
import { ReactComponent as NyuIcon } from "./nyu.svg";
import { ReactComponent as GeneralAssembly } from "./generalAssemmbly.svg";
import mpIcon from "./mp.jpeg";
import digitalRemedy from "./digitalRemedy.png";
import ascap from "./ascap.png";
import peacock from "./peacock.png";
import mayfair from "./mayfair.png";

export const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="March 2023 - October 2023"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<img />}
      >
        <h3 className="vertical-timeline-element-title">
          <TitleComponent text="Prologue: Full Stack Engineer / Lead Frontend Engineer" />
        </h3>
        <p>
          <ParagraphComponent
            text="As the Lead Frontend Engineer, I worked with the Creative Designer
          directly to make our application look as sleek and beautiful as
          possible. The Frontend was built all throughout React with the ability
          to track the value of Bitcoin through a Websocket, watch its
          historical activity against a line graph, and track all transactions
          made on the platform. Along with this, worked on the Backend to
          provide a Users service connected through Amplify and a Websocket
          Service to track the price of Bitcoin through our partners."
          />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="June 2022 - March 2023"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<img src={mayfair} />}
      >
        <h3 className="vertical-timeline-element-title">
          <TitleComponent text="Mayfair: Senior Software Engineer" />
        </h3>
        <p>
          <ParagraphComponent
            text="I worked on two separate applications while I worked at
          Paperclip/Mayfair. Initially, I helped building a Dashboard experience
          for Startup managers to understand the flow of their finances with
          widgets for Cash Burn, Cash Flow, and Transactions. At my time working
          at Mayfair, I also helped in building a interest generating cronjob
          that allowed investments to accrue monthly interest as companies park
          their cash in our services."
          />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="January 2020 - June 2022"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<img src={peacock} />}
      >
        <h3 className="vertical-timeline-element-title">
          <TitleComponent text="Peacock: Full Stack Enginner" />
        </h3>
        <p>
          <ParagraphComponent
            text="At Peacock, I was introduced to so many other technologies that
          improved my workflow. I worked at a Full Stack role which meant I was
          working on the Frontend, Backend, Cloud, and some DevOps. I worked in
          various teams within the Direct to Consumer department which included
          the Video on Demand team, where I provided services to reprocess
          assets more efficiently, and the Live team, where I helped build a
          frontend application to allow our Video Operators to drop ads directly
          into our live sports events."
          />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="July 2018 -  December 2019"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<img src={ascap} />}
      >
        <h3 className="vertical-timeline-element-title">
          <TitleComponent text="ASCAP: Frontend Developer" />
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>
          <ParagraphComponent
            text="Here I was able to polish and refine my Frontend skills. The Frontend
          team was primarily a Vue shop. I was able to pick up the framework
          very quickly with my previous React knowledge and started refining our
          Frontend experiences througout our app offerings."
          />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="October 2017 - January 2018"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<img src={digitalRemedy} />}
      >
        <h3 className="vertical-timeline-element-title">
          <TitleComponent text="Digital Remedy: Web Developer" />
        </h3>
        <p>
          <ParagraphComponent
            text="I worked here for about three months before the department decided to
          make a shift in their technology. I was laid off, but it gave me the
          opportunity to focus on what I believed would make me more successful
          in my career. During my unemployment, I picked up React and developed
          my philosophy of how things should be managed on the frontend, which
          is ever-evolving"
          />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="October 2015 - October 2017"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<img src={mpIcon} />}
      >
        <h3 className="vertical-timeline-element-title">
          <TitleComponent text="Mediaplanet: Web Developer and IT Manager of NYC Office" />
        </h3>
        <p>
          <ParagraphComponent
            text="I helped developed apps and services for our team. Most of the
          application was built on a propietary version of WordPress. Lots of
          Javascript injection to make articles and pages look more beautiful
          than before. Worked very closely with the content, traffic, and design
          managers."
          />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="January 2015 - October 2015"
        iconStyle={{ background: "#fff", color: "#fff" }}
        icon={<GeneralAssembly />}
      >
        <h3 className="vertical-timeline-element-title">
          <TitleComponent text="General Assembly: Web Development Immersive" />
        </h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p>
          <ParagraphComponent
            text="These were the first steps for me to start my career in Software
          Development. I gained the confidence of knowing how to build apps and
          that I was in the right place. HTML, CSS, Javascript, PHP, AngularJS"
          />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2009 - 2013"
        iconStyle={{ background: "#FFF", color: "#000" }}
        icon={<NyuIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          <TitleComponent text="New York University: Bachelor of Science in Psychology" />
        </h3>
        <p>
          <ParagraphComponent
            text="Studied Computer Science classes for fun. I went to college as the
          first steps to become a doctor. I slowly acknowledged after college
          that a career in Technology and Development made more sense for me."
          />
        </p>
        <p>
          Psychology, Neuroscience, PreMedicine, Computer Science, Python, Java
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "#3b8c06", color: "#fff" }}
        icon={<></>}
      />
    </VerticalTimeline>
  );
};

const TitleComponent = ({ text }) => {
  return <span className={styles.timelineElement}>{text}</span>;
};

const ParagraphComponent = ({ text }) => {
  return <span className={styles.timelineParagraphElement}>{text}</span>;
};
