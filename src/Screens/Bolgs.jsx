import React from "react";
import BlogCard from "../Components/BlogCard";
import BlogData from "../Components/BlogData";
import Typed from "react-typed";

const Bolgs = () => {
  return (
    <div id="blog" className="my-4 mx-auto blog px-5">
      <Typed
        className="typed d-flex justify-content-center font-weight-bold pb-2"
        strings={["My Blogs on Tech..."]}
        typeSpeed={40}
      />
      <div className="row">
        {BlogData.map((value, ind) => {
          return (
            <BlogCard
              key={ind}
              title={value.title}
              description={value.description}
              published={value.published}
              read={value.read}
              imgsrc={value.imgsrc}
              link={value.link}
            ></BlogCard>
          );
        })}
      </div>
    </div>
  );
};

export default Bolgs;
