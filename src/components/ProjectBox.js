import React from 'react';

import { ICONS } from '../constant';

import Icon from './Icon';

class ProjectBox extends React.Component {
  state = {
    projectExtra: false
  };

  onExpand = () => {
    this.setState(() => {
      return {
        projectExtra: !this.state.projectExtra
      };
    });
  };

  render() {
    const iconColor = '#dcf2f0';
    return (
      <div className="projectBox">
        <div className="projectBox__visibleContent">
          <h2> {this.props.projectTitle}</h2>
          <span className="projectBox__details">
            <blockquote> "{this.props.projectQuote}" </blockquote>
            <span className="project__info">
              <h4> {this.props.clientName} </h4>
              <p> {this.props.projectType} </p>
            </span>
          </span>
          <button onClick={this.onExpand}>
            {' '}
            {this.state.projectExtra ? 'Less' : 'More'}{' '}
          </button>
        </div>

        {this.state.projectExtra && (
          <div className="project-extra">
            <div className="project-extra__info">
              <div className="project-extra__info--details">
                <div className="project-extra__icon">
                  <Icon
                    icon={ICONS.CAMERA1}
                    width={28}
                    height={28}
                    color={iconColor}
                  />
                  <div>
                    <p className="label">
                      Photos Taken:
                      <br />
                      <span>{this.props.noOfPhotos} Photos</span>
                    </p>
                  </div>
                </div>
                <div className="project-extra__icon">
                  <Icon
                    icon={ICONS.TIME}
                    width={32}
                    height={32}
                    color={iconColor}
                  />
                  <p className="label">
                    Time Spent:
                    <br />
                    <span>{this.props.noOfHours} hours</span>
                  </p>
                </div>
                <div className="project-extra__icon">
                  <Icon
                    icon={ICONS.GLOBE}
                    width={32}
                    height={32}
                    color={iconColor}
                  />
                  <p className="label">
                    Location:
                    <br />
                    <a href={this.props.mapLocationText} target="_blank">
                      {this.props.mapLocationText}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="project-extra__images">
              <div>
                <img src={this.props.imageOne} />
              </div>
              <div>
                <img src={this.props.imageTwo} />
              </div>
              <div>
                <img src={this.props.imageThree} />
              </div>
              <div>
                <img src={this.props.imageFour} />
              </div>
              <div>
                <img src={this.props.imageFive} />
              </div>
              <div>
                <img src={this.props.imageSix} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProjectBox;
