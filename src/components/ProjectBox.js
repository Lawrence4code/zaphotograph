import React from 'react';

const ProjectBox = props => {
  return (
    <div className="projectBox">
      <div className="projectBox__visibleContent">
        <h2> {props.projectTitle}</h2>
        <span className="project__details">
          <blockquote> "{props.projectQuote}" </blockquote>
          <span className="project__info">
            <h4> {props.clientName} </h4>
            <p> {props.projectType} </p>
          </span>
        </span>
        <button> More </button>
      </div>

      <div className="project-extra">
        <ul className="project-extra__info">
          <li>
            <p className="label">
              Photos Taken:
              <br />
              <span className="label-descr">{props.noOfPhotos} Photos</span>
            </p>
          </li>

          <li>
            <p className="label">
              Time Spent:
              <br />
              <span className="label-descr">{props.noOfHours} hours</span>
            </p>
          </li>

          <li>
            <p className="label">
              Location:
              <br />
              <a
                className="label-descr"
                href={props.mapLocationLink}
                target="_blank"
              >
                {props.mapLocationText}
              </a>
            </p>
          </li>
        </ul>
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
