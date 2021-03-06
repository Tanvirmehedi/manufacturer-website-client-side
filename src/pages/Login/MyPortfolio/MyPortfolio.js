import React from "react";

const MyPortfolio = () => {
  return (
    <div className="lg:p-20 flex w-full justify-center">
      <div className="card lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title my-3">My Name : H.M Tanvir Mehedi </h2>
          <h2 className="card-title my-3">
            My Email Address : dev1tanvir@gmail.com{" "}
          </h2>
          <h2 className="card-title my-3">My Education : Bachelor of law </h2>
          <p>
            <ul>
              <div className="overflow-x-auto">
                <table className="table table-zebra w-fit">
                  <thead>
                    <tr>
                      <th className="text-accent text-xl">
                        {" "}
                        Technology Skill That I have.
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Html5</th>
                    </tr>{" "}
                    <tr>
                      <th>Row Css3 . Framework(Bootstrap,Tailwindcss) </th>
                    </tr>{" "}
                    <tr>
                      <th>Venial Javascript also (es6 & next)</th>
                    </tr>
                    <tr>
                      <th>Frontend library (React Js )</th>
                    </tr>{" "}
                    <tr>
                      <th>Full Stack (React Js,Node,MongoDb,Express )</th>
                    </tr>
                    <tr>
                      <th>
                        Authentication & Hosting (Firebase,netlify,heroku)
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ul>
          </p>
          <div className="card-actions justify-center mt-6">
            <a
              href="https://book-house-48f65.web.app/"
              className="btn btn-primary"
            >
              Book House
            </a>{" "}
            <a
              href="https://write-way-f1e10.web.app/"
              className="btn btn-primary"
            >
              Write Way
            </a>{" "}
            <a
              href="https://tj-alchemist.netlify.app/"
              className="btn btn-primary"
            >
              Alchemist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
