import styles from "./Skills.module.scss";
import { useState } from "react";
import { skills } from "./list";
export const Skills = () => {
  const SkillSet = skills.map((skill, ind) => (
    <Skill
      key={ind}
      name={skill.name}
      Icon={skill.icon}
      description={skill.description}
    />
  ));
  return <div className={styles.skills}>{SkillSet}</div>;
};

const Skill = ({ name, Icon, description }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={styles.skillItem}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Icon />
      <div
        className={`${styles.tooltip} ${hover == true ? styles.active : ""}`}
      >
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
