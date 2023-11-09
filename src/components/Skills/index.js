import styles from "./Skills.module.scss";
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
  return (
    <div className={styles.skillItem}>
      <Icon />
      <div className={`${styles.tooltip} `}>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
