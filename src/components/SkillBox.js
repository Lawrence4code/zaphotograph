import React from 'react';

const SkillBox = props => {
  return (
    <div className="skillBox">
      <h2> {props.skillTitle}</h2>
      <p> {props.skillText} </p>
      <span className="skillBox__divider" />
    </div>
  );
};

export default SkillBox;
