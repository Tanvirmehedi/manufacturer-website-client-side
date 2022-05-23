import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl h-[90vh]">
        <figure>
          <img
            src="https://cdn.dribbble.com/users/932640/screenshots/2470471/jq.gif"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-center items-center h-full">
            <Link to="/" className="btn btn-primary">
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
