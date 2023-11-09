import styles from "./Skills.module.scss";
import { skills } from "./list";
import { togglePhoneModal } from "../../features/phoneModal";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const setModal = () => {
    dispatch(togglePhoneModal({ title: name, description, showModal: true }));
  };
  return (
    <div className={styles.skillItem} onClick={() => setModal()}>
      <Icon />
      <div className={`${styles.tooltip} `}>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
