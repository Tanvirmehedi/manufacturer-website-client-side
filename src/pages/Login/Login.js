import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let loginError;
  if (loading || gLoading) {
    return <Loading />;
  }
  if (error || gError) {
    loginError = (
      <>
        <div className="text-center w-full my-5 ">
          <button class="btn btn-outline btn-error ">
            {error?.message || gError?.message}
          </button>
        </div>
      </>
    );
  }
  if (gUser || user) {
    console.log(gUser);
  }
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="my-10">
      <div className="card max-w-xs bg-base-100 shadow-xl container mx-auto">
        <div className="card-body">
          <div className="mx-auto">
            <h2 className="text-center text-2xl font-bold">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
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

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">What is your Password?</span>
                </label>
                <input
                  type="password"
                  placeholder="Type Your Password"
                  className="input input-bordered w-full max-w-xs"
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
                className="btn btn-primary w-full max-w-xs"
                type="submit"
                value="Login"
              />
            </form>
            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline w-full max-w-xs"
            >
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
