import React from "react";
import SkillCard from "../Components/SkillCard";

const Skills = () => {
  return (
    <section id="skill" className="Container-fluid mb-5">
      <div className="row">
        <div className="col-10 mx-auto">
          <h1 className="d-flex justify-content-center font-weight-bold construction">
            My skills
          </h1>
          <h2>Programming Languages:</h2>
          <div className="pt-2 pt-lg-1 d-flex mr-auto flex-row">
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" />
            <SkillCard iconsrc="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" />
          </div>
          {/*  */}

          <h2>FrameWorks:</h2>
          <div className="pt-2 pt-lg-1 d-flex mr-auto flex-row">
            <SkillCard iconsrc="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" />
            <SkillCard iconsrc="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" />
          </div>

          {/*  */}
          <h2>Tools and Technologies:</h2>
          <div className="col-md-10 pt-2 pt-lg-1 d-flex mr-auto flex-row">
            {/* <SkillCard iconsrc="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg" /> */}
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" />
            <SkillCard iconsrc="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" />
            <SkillCard iconsrc="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" />
            <SkillCard iconsrc="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />
            <SkillCard iconsrc="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
