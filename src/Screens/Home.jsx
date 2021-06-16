import React from "react";
import Typed from "react-typed";
import main from "../assets/images/main.png";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
  return (
    <>
      <section id="Header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pb-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <Typed
                    className="typed"
                    strings={["Hi", "I'am Avinash Mahanthi."]}
                    typeSpeed={40}
                  />
                  <h2>A Enthusiastic Web and App developer.</h2>
                  <h5 className="text-muted" style={{ inlineHeight: "1.5" }}>
                    I am a Junior Year Student currently undertaking my
                    Bachelors in Computer Science and Engineering from
                    Sathyabama IST. I'm a self-taught web developer. I love
                    contributing to open source communities. I am very much
                    facinated about learning new technologies, and to play
                    around with them.
                  </h5>
                  <div className="mt-3">
                    <NavLink to="/Contact" className="btn-contactMe">
                      Contact Me
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order1 order-lg-2 header-img pt-4">
                  <img src={main} alt="home" className="img-fluid animated" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
