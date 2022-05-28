import React from "react";

const Summary = () => {
  return (
    <div className="flex justify-center items-center lg:my-10">
      <div className="w-full container mx-auto stats stats-vertical lg:stats-horizontal shadow ">
        <div className="stat text-center">
          <div className="stat-title">Customer</div>
          <div className="stat-value">100+</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat text-center">
          <div className="stat-title">Annal Revenue</div>
          <div className="stat-value">120M+</div>
          <div className="stat-desc">↗︎ 33 (19%)</div>
        </div>

        <div className="stat text-center">
          <div className="stat-title">Hand Tools</div>
          <div className="stat-value">20+</div>
          <div className="stat-desc">↘︎ 50 (14%)</div>
        </div>
      </div>
    </div>
  );
};
export default Summary;
