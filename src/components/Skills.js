import React from 'react';

import './styles/skills.scss';
import SkillBox from './SkillBox';

const Skills = () => {
  const skillsData = {
    skillTitles: ['Photography', 'Illustrations', 'Editing'],
    stillText: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis felis et velit varius aliquet a non ipsum. Quisque tempus euismod volutpat.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis felis et velit varius aliquet a non ipsum. Quisque tempus euismod volutpat.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis felis et velit varius aliquet a non ipsum. Quisque tempus euismod volutpat.'
    ]
  };
  console.log(skillsData.skillTitles[1]);
  return (
    <div className="skills">
      <div className="skills__section">
        <div className="skills__content container">
          <SkillBox
            skillTitle={skillsData.skillTitles[0]}
            skillText={skillsData.stillText[0]}
          />
          <SkillBox
            skillTitle={skillsData.skillTitles[1]}
            skillText={skillsData.stillText[1]}
          />
          <SkillBox
            skillTitle={skillsData.skillTitles[2]}
            skillText={skillsData.stillText[2]}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
