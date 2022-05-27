import React from "react";

const DisplayProfile = ({ user }) => {
  const { email, education, linkedin, location, mobile, name } = user;
  return (
    <div className="w-full">
      <div class="card w-full  bg-base-100 shadow-xl my-10">
        <div class="card-body max-w-lg">
          {name && <h2 class="card-title ">Name : {name} </h2>}
          {email && <h3 class="font-semibold my-1">Email : {email} </h3>}
          {location && (
            <h3 class="font-semibold my-1">Location : {location} </h3>
          )}
          {education && (
            <h3 class="font-semibold my-1">Education : {education} </h3>
          )}
          {mobile && <h3 class="font-semibold my-1">Mobile : {mobile} </h3>}
          {linkedin && (
            <h3 class="font-semibold my-1">
              <a
                className="btn btn-primary"
                target="_blank"
                href={linkedin}
                rel="noreferrer"
              >
                Linkedin
              </a>{" "}
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayProfile;
