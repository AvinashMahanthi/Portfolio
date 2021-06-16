import React from "react";
import ProjectCard from "../Components/ProjectCard";
import ProjectData from "../Components/ProjectData";
import Typed from "react-typed";

const Projects = () => {
  return (
    <>
      <div className="my-5">
        <Typed
          className="typed d-flex justify-content-center font-weight-bold"
          strings={["Projects"]}
          typeSpeed={40}
        />
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {ProjectData.map((value, ind) => {
                return (
                  <ProjectCard
                    key={ind}
                    title={value.title}
                    description={value.description}
                    repo={value.repo}
                    imgsrc={value.imgsrc}
                    livehere={value.livehere}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
