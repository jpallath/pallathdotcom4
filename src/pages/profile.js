import jerry from "../assets/jerry.png";
import { AnchoredImage } from "../components/AnchoredImage";
import { ResumeButtons } from "../components/Buttons/ResumeButtons";
import { PageHeader } from "../components/PageHeader";
import { ParagraphItem } from "../components/ParagraphItem";
import { Content } from "../containers/Content";
import { ResumeModal } from "../components/ResumeModal";
import styles from "./pages.module.scss";
export const Profile = () => {
  return (
    <div className={styles.pages}>
      <Content
        components={[
          <PageHeader text="Jerry Pallath / Software Engineer" key="0" />,
          <ParagraphItem
            text={`I've been a software engineer since 2015, but I've been in love with technology since way before that. As a kid, I would spend time tinkering with my hardware and software just to make things feel right for me. My choices could seem whimsical or strange to others– but it made multitasking and just working with the things I love that much more satisfying.`}
            key="2"
          />,
          <ParagraphItem
            text={`I learned portions of Java and Python in college, but I only discovered my calling for development in 2015. I took a Web Development Immersive Bootcamp and learned the basics. Not satisfied with my toolset– I decided to pick up other technologies like React, Vue, and Cloud technologies after. I don't want my career to be stagnant, I want to keep learning and be competitive no matter what the technology landscape looks like.`}
            key="3"
          />,
          <ParagraphItem
            text={`I want to make awesome things with incredible people. I've worked with small and big teams. The momentum and energy of working with others speeds up my learning along with my passion for the things I'm building. I want to find a team that'll keep me on my path.`}
            key="4"
          />,
          <ParagraphItem
            text={`Beautiful products that help the world, this is what I want to do. We're in a world where it's rare for an individual to drive change and innovation– but we're still able to drive change with teams made up of incredible minds, ambitions, and drive. Let me help you build your product towards your goals.
Email me at Pallathj@gmail.com`}
            key="5"
          />,
          <ResumeButtons key="7" />,
        ]}
      />
      <AnchoredImage image={jerry} />
      <ResumeModal />
    </div>
  );
};

// ,
// (<p>experience yada yada</p>),
// (<div>modal for resume</div>)),
