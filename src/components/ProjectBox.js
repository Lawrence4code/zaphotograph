import React from 'react';

import { ICONS } from '../constant';

import Icon from './Icon';

const ProjectBox = props => {
  const iconColor = '#dcf2f0';
  return (
    <div className="projectBox">
      <div className="projectBox__visibleContent">
        <h2> {props.projectTitle}</h2>
        <span className="projectBox__details">
          <blockquote> "{props.projectQuote}" </blockquote>
          <span className="project__info">
            <h4> {props.clientName} </h4>
            <p> {props.projectType} </p>
          </span>
        </span>
        <button> More </button>
      </div>

      <div className="project-extra">
        <div className="project-extra__info">
          <div className="project-extra__info--details">
            <div>
              <Icon
                icon={ICONS.BUBBLE}
                width={56}
                height={32}
                color={iconColor}
              />
              <div>
                <p className="label">
                  Photos Taken:
                  <br />
                  <span className="label-descr">{props.noOfPhotos} Photos</span>
                </p>
              </div>
            </div>
            <div>
              <div>Icon</div>
              <p className="label">
                Time Spent:
                <br />
                <span className="label-descr">{props.noOfHours} hours</span>
              </p>
            </div>
            <div>
              <div>Icon</div>
              <p className="label">
                Location:
                <br />
                <a
                  className="label-descr"
                  href={props.mapLocationText}
                  target="_blank"
                >
                  {props.mapLocationText}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="project-extra__images">
          <div>
            <img src={props.imageOne} />
          </div>
          <div>
            <img src={props.imageTwo} />
          </div>
          <div>
            <img src={props.imageThree} />
          </div>
          <div>
            <img src={props.imageFour} />
          </div>
          <div>
            <img src={props.imageFive} />
          </div>
          <div>
            <img src={props.imageSix} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
