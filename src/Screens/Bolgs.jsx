import React from "react";
import construction from "../assets/images/404.png";

const Bolgs = () => {
  return (
    <div className="my-5 mx-auto">
      <h1 className="d-flex justify-content-center construction">
        Under Construction
      </h1>
      <h6 className="d-flex justify-content-center">
        Sorry, I'm Currently Working On this Section.
      </h6>
      <div className="header-img">
        <img src={construction} alt="home" className="img-fluid animated" />
      </div>
    </div>
  );
};

export default Bolgs;
