import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const { register, handleSubmit,formState:{errors} } = useForm();
  const {registerUser} = useAuth();

  const handleRegistration = (data) => {
    console.log(data);
    registerUser(data.email,data.password).then(result=>{
      console.log(result.user)
    }).catch(error=>{
      console.log(error)
    })
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          {/* name field */}
          {/* <label className="label">Name</label>
          <input type="text" className="input" placeholder="Your Name" /> */}

          {/* photo image field */}
          {/* <label className="label">Photo</label>

          <input type="file" className="file-input" placeholder="Your Photo" /> */}

          {/* email field */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email",{required:true,
                minLength:6,
            })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === 'required' && <p className="text-red-500">Email is required</p> }

          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password",{
                required:true,
                minLength:6,
            })}
            className="input"
            placeholder="password"
          />

          {
            errors.password?.type === 'required' && <p className="text-red-500">Password is required.</p>
          }

          {
            errors.password ?.type === 'minLength' && 
            <p className="text-red-500">
            Password must be 6 characters or longer
          </p>
          }

          
          <p className="text-red-500">
            Password must have at least one uppercase, at least one lowercase,
            at least one number, and at least one special characters
          </p>

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
               <p>Already have an account? <Link className="text-blue-500 underline" to = "/login">Login</Link> </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
