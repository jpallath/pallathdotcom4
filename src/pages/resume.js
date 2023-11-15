import styles from "./resume.module.scss";
import { experience } from "../components/ResumeModal/experience";
import { education } from "../components/ResumeModal/education";
import { skills, interests } from "../components/ResumeModal/skills";

export const Resume = () => {
  const WorkExperiences = experience.map((exp) => {
    return <WorkExperience experience={exp} key={exp.position} />;
  });
  const EducationInformation = education.map((ed) => {
    return <Education ed={ed} key={ed.school} />;
  });
  const Skills = skills.map((sk, ind) => {
    return <h4 key={ind}>{sk}, </h4>;
  });
  const Interests = interests.map((int, ind) => {
    return <h4 key={ind}>{int}</h4>;
  });
  return (
    <div className={styles.resumeModal}>
      <div className={styles.title}>Jerry Pallath</div>
      <div className={styles.userInformation}>
        <h2>Software Engineer</h2>
        <h3>201-655-5144 | PallathJ@gmail.com | New York, New York</h3>
        <h3>
          <a href="linkedin.com/in/jpallath/">linkedin.com/in/jpallath/</a>
          <span> | </span>
          <a href="github.com/jpallath/">github.com/jpallath/</a>
        </h3>
      </div>
      <div className={styles.workExperience}>
        <h2>Experience</h2>
        {WorkExperiences}
      </div>
      <div className="education">
        <h2>Education</h2>
        {EducationInformation}
      </div>
      <div className={styles.skills}>
        <h2>Skills</h2>
        <div className={styles.skillsList}>{Skills}</div>
      </div>
      <div className={styles.skills}>
        <h2>Interests</h2>
        <div className={styles.skillsList}>{Interests}</div>
      </div>
    </div>
  );
};

const WorkExperience = ({ experience }) => {
  const actualExperience = experience.experience.map((exp) => {
    return <ActualExperience exp={exp} key={exp.bullet} />;
  });
  return (
    <div className={styles.workExp}>
      <div className={styles.wTitle}>
        <span className={styles.position}>{experience.position}</span>
        <span>
          <span className={styles.company}>{experience.company}</span> |{" "}
          {experience.location}
        </span>
      </div>
      <div className={styles.dates}>
        <h4>{experience.dates}</h4>
      </div>
      <div className={styles.actualExperience}>{actualExperience}</div>
    </div>
  );
};

const ActualExperience = ({ exp }) => {
  let list = <></>;
  if (exp.additionalBullets) {
    list = exp.additionalBullets.map((bull) => {
      return <li key={bull}>{bull}</li>;
    });
  }
  return (
    <ul>
      {exp.bullet}
      {list}
    </ul>
  );
};

const Education = ({ ed }) => {
  return (
    <div className={styles.educationItem}>
      <div>
        <h3 className={styles.school}>{ed.school}</h3>
        <h3>{ed.dates}</h3>
      </div>
      <div>
        <h4>{ed.location}</h4>
        <h4>{ed.concentration}</h4>
      </div>
    </div>
  );
};
