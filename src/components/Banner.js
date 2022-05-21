import React from "react";

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-[90vh] bg-[url('https://www.norvatools.com.au/pub/media/cms/professional-trade-tools.jpg')]">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Interested About Hand Tools</h1>
            <p class="mb-5 text-center">
              Tool, an instrument for making material changes on other objects,
              as by cutting, shearing, striking, rubbing, grinding, squeezing,
              measuring, or other processes.
            </p>
            <button class="btn btn-primary bg-gradient-to-r from-primary to-white">
              Explore Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
