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
        <ul className="project-extra-images">
          <li>
            <img src={props.imageOne} />
          </li>
          <li>
            <img src={props.imageTwo} />
          </li>
          <li>
            <img src={props.imageThree} />
          </li>
          <li>
            <img src={props.imageFour} />
          </li>
          <li>
            <img src={props.imageFive} />
          </li>
          <li>
            <img src={props.imageSix} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectBox;
