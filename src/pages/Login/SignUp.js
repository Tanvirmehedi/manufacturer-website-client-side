import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import useToken from "../../Hooks/useToken";
const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [token] = useToken(gUser || user);
  //  Variable

  let loginError;
  const navigate = useNavigate();

  //   Loading Component Return
  if (loading || gLoading || updating) {
    return <Loading />;
  }

  //   Error Handling
  if (error || gError || updateError) {
    loginError = (
      <>
        <div className="text-center w-full my-5 max-w-md">
          <button className="btn btn-outline btn-error w-full ">
            {error?.message || gError?.message || updateError?.message}
          </button>
        </div>
      </>
    );
  }
  //   Checking Users

  if (token) {
    navigate("/");
  }

  //   Handling Form Data

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };

  return (
    <div className="my-10">
      <div className="card max-w-md bg-base-100 shadow-xl mx-auto">
        <div className="mx-10 mb-10">
          <div className="mx-auto">
            <h2 className="text-center text-2xl font-bold">SignUp</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-md">
                <label className="label">
                  <span className="label-text">What is your Name?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type Your Name"
                  className="input input-bordered w-full"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              {/* EMAIL FIELD START */}
              <div className="form-control w-full max-w-md">
                <label className="label">
                  <span className="label-text">What is your Email?</span>
                </label>
                <input
                  type="email"
                  placeholder="Type Your Email"
                  className="input input-bordered w-full"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /(.+)@(.+){2,}\.(.+){2,}/,
                      message: "Provide a valid email ",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Email Field End  */}

              <div className="form-control w-full max-w-md">
                <label className="label">
                  <span className="label-text">What is your Password?</span>
                </label>
                <input
                  type="password"
                  placeholder="Type Your Password"
                  className="input input-bordered w-full max-w-md"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Give 6 digits or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {loginError}
              <input
                className="btn btn-primary w-full max-w-md"
                type="submit"
                value="SignUp"
              />
            </form>
            <p className="my-3">
              Already have an account?
              <Link className="text-primary px-1 " to="/login">
                LogIn
              </Link>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline w-full max-w-md"
            >
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
