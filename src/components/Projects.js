import React from 'react';

import './styles/projects.scss';
import ProjectBox from './ProjectBox';

const imageOne = 'https://dummyimage.com/300x150/000/fff';
const imageTwo = 'https://dummyimage.com/300x150/000/fff';
const imageThree = 'https://dummyimage.com/300x150/000/fff';
const imageFour = 'https://dummyimage.com/300x150/000/fff';
const imageFive = 'https://dummyimage.com/300x150/000/fff';
const imageSix = 'https://dummyimage.com/300x150/000/fff';

const Projects = () => {
  const projectData = {
    projectTitles: [
      "Smith's wedding",
      'Fashion photoshoot',
      'Southern National Park'
    ],
    projectQuote: [
      'I undertake all kind of projects, though I prefer challenging projects like Family event and New born, as one must ensure to capture all special moments, making people smile is a bonus.',
      'I do logo desiging and illustration as well with adobe illustration, so please do checkout my portfolio for samples.',
      'All the photography projects comes with personalised editing suited and requested as per your needs and occasions. I will ensure you go with complete satisfaction.'
    ],
    projectClientName: [
      'Jane and Steve Smith',
      'Vanessa Benedict',
      'Southern National Park'
    ],
    projectType: ['Wedding', 'Model', 'Director'],
    noOfPhotos: [111, 222, 333],
    noOfHours: [11, 22, 33],
    mapLocationLink: [
      "https://www.google.com/maps/place/51%C2%B040'41.8%22N+12%C2%B037'35.0%22E/@51.6782778,12.6263889,17z/data=!3m1!4b1!4m2!3m1!1s0x0:0x0",
      "https://www.google.com/maps/place/51%C2%B040'41.8%22N+12%C2%B037'35.0%22E/@51.6782778,12.6263889,17z/data=!3m1!4b1!4m2!3m1!1s0x0:0x0",
      "https://www.google.com/maps/place/51%C2%B040'41.8%22N+12%C2%B037'35.0%22E/@51.6782778,12.6263889,17z/data=!3m1!4b1!4m2!3m1!1s0x0:0x0"
    ],
    mapLocationText: [
      '51°40\'41.8"N 12°37\'35.0"E',
      '51°40\'41.8"N12°37\'35.0"E',
      '51°40\'41.8" N12°37\'35.0"E'
    ]
  };
  return (
    <div className="projects">
      <div className="projects__section">
        <div className="projects__content container">
          <h2 className="projects__heading"> projects </h2>

          <div className="projects__block">
            <ProjectBox
              projectTitle={projectData.projectTitles[0]}
              projectQuote={projectData.projectQuote[0]}
              clientName={projectData.projectClientName[0]}
              projectType={projectData.projectType[0]}
              noOfPhotos={projectData.noOfPhotos[0]}
              noOfHours={projectData.noOfHours[0]}
              mapLocationLink={projectData.mapLocationLink[0]}
              mapLocationText={projectData.mapLocationText[0]}
              imageOne={imageOne}
              imageTwo={imageTwo}
              imageThree={imageThree}
              imageFour={imageFour}
              imageFive={imageFive}
              imageSix={imageSix}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

// <ProjectBox
//   projectTitle={projectData.projectTitles[1]}
//   projectQuote={projectData.projectQuote[1]}
//   clientName={projectData.projectClientName[1]}
//   projectType={projectData.projectType[1]}
// />

//   <ProjectBox
//     projectTitle={projectData.projectTitles[2]}
//     projectQuote={projectData.projectQuote[2]}
//     clientName={projectData.projectClientName[2]}
//     projectType={projectData.projectType[2]}
//   />
