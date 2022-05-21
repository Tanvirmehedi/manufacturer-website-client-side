import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-[90vh] bg-[url('https://www.norvatools.com.au/pub/media/cms/professional-trade-tools.jpg')]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Interested About Hand Tools
            </h1>
            <p className="mb-5 text-center">
              Tool, an instrument for making material changes on other objects,
              as by cutting, shearing, striking, rubbing, grinding, squeezing,
              measuring, or other processes.
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-white">
              Explore Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
