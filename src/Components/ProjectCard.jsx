import React from "react";
// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const ProjectCard = (props) => {
  return (
    <div className="col-md-4 col-10 mx-auto">
      <div className="card project-card">
        <img
          className="card-img-top Project-Card-img"
          src={props.imgsrc}
          alt="Card-img"
        />
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <div></div>
          <a href={props.repo} target="/blank" className="btn-repo">
            Repo
          </a>
          <a
            className={props.livehere ? "" : "hidden"}
            href={props.livehere}
            target="/blank"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
