import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";

const CreateBlog = () => {
  const [user, loading] = useAuthState(auth);

  console.log();
  const handelSubmit = (e) => {
    e.preventDefault();
    const email = user?.email;
    const question = e.target.question.value;
    const answer = e.target.answer.value;

    const blog = {
      email,
      question,
      answer,
    };

    if (!question || !answer) {
      return toast.error("Please Fill The All Field");
    } else {
      fetch("https://boiling-eyrie-02929.herokuapp.com/blog", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(blog),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            return toast.success("Blog Create Successful");
          } else {
            return toast.error("Blog Create error");
          }
        });
    }
    console.log(blog);
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl my-5">
        <div className="card-body ">
          <h1 className="card-title ">
            <p className="text-center">Create Blog</p>
          </h1>
          <div>
            <form onSubmit={handelSubmit}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Create Blog Question?</span>
                </label>
                <input
                  type="text"
                  placeholder="Question"
                  className="input input-bordered w-full max-w-xs"
                  name="question"
                />
              </div>{" "}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Create Blog Answer?</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Type your Answer"
                  name="answer"
                ></textarea>
              </div>
              <input
                type="submit"
                className="btn btn-primary my-5"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
