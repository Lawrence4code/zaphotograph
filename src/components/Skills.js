import React from 'react';

import './styles/skills.scss';
import SkillBox from './SkillBox';

const Skills = () => {
  const skillsData = {
    skillTitles: ['Photography', 'Illustrations', 'Editing'],
    stillText: [
      'I undertake all kind of projects, though I prefer challenging project Family event and New born, as one must ensure to capture all special moments, making people smile is a bonus.',
      'I do logo desiging and illustration as well with adobe illustration, so checkout my portfolio for samples.',
      'All the photography projects comes with personalised editing suited and requested as per your needs and occasions. I will ensure you go with complete satisfaction.'
    ]
  };
  console.log(skillsData.skillTitles[1]);
  return (
    <div className="skills">
      <div className="skills__section">
        <div className="skills__content container">
          <h2 className="section__heading"> Skill </h2>

          <div className="skills__block">
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
    </div>
  );
};

export default Skills;
