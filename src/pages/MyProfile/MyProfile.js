import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  const handelForm = (event) => {
    event.preventDefault();
    const name = event.target.userName.value;
    const email = user.email;
    const location = event.target.location.value;
    const mobile = event.target.mobile.value;
    const linkedin = event.target.linkedin.value;
    const education = event.target.education.value;

    const profileData = {
      name,
      email,
      location,
      mobile,
      linkedin,
      education,
    };

    fetch(`http://localhost:5000/user/info/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profileData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Update Successful!!");
        }
      });
  };
  return (
    <div className="my-10 w-3/4 mx-auto">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body justify-center items-center ">
          <h2 className="card-title text-primary uppercase">Profile Details</h2>
          <div className="lg:w-1/2">
            <form onSubmit={handelForm}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full max-w-xs"
                  defaultValue={user?.displayName}
                  name="userName"
                />
              </div>
              {/* ------------------------------------- */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-full max-w-xs"
                  value={user?.email}
                  readOnly
                />
              </div>
              {/* ------------------------------------- */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Location</span>
                </label>
                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              {/* ------------------------------------- */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Phone Number</span>
                </label>
                <input
                  type="number"
                  placeholder="Number"
                  name="mobile"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              {/* ------------------------------------- */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Linkedin Profile</span>
                </label>
                <input
                  type="text"
                  placeholder="Linkedin"
                  name="linkedin"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              {/* ------------------------------------- */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Last Education</span>
                </label>
                <input
                  type="text"
                  placeholder="Education"
                  name="education"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              {/* ------------------------------------- */}
              <input
                type="submit"
                className="btn btn-primary mt-10"
                value="update"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
