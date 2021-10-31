import React, { useState } from "react";
import { Layout } from "../Layout/Layout";
import { useForm } from "react-hook-form";

//css
import "./signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  //form submit
  const onSubmit = (data) => {
    console.log(data);
  };
  useState(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mainDiv">
            <div className="box">
              <div className="text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1063/1063809.png"
                  height="100px"
                  width="auto"
                  alt="signup"
                />
                <h3>Create Account</h3>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mt-3 ">
                  <div className="col-md-6">
                    <div className="form-group ">
                      <p className="lable">First Name</p>
                      <input
                        placeholder="First Name"
                        autoComplete="off"
                        type="text"
                        {...register("firstname", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group ">
                      <p className="lable">Last Name</p>
                      <input
                        placeholder="Last Name"
                        autoComplete="off"
                        type="text"
                        {...register("lastname", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mt-2">
                    <div className="form-group ">
                      <p className="lable">Email</p>
                      <input
                        placeholder="Email"
                        autoComplete="off"
                        type="email"
                        {...register("email", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mt-2">
                      <p className="lable">Password</p>
                      <input
                        placeholder="Password"
                        autoComplete="off"
                        type="password"
                        {...register("password", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mt-2">
                    <div className="form-group ">
                      <p className="lable">Phone</p>
                      <input
                        placeholder="Phone"
                        autoComplete="off"
                        type="text"
                        {...register("phone", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mt-2">
                    <div className="form-group ">
                      <p className="lable">District</p>
                      <input
                        placeholder="District"
                        autoComplete="off"
                        type="text"
                        {...register("district", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="text-center mt-4 mb-3">
                    <button className="btn-submit">
                      Create Account{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>

                  <hr/>

                  <div className="col-md-12 text-center mt-3 linkSet">
                    <Link>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                      width={30}
                      height={30}
                    />
                    </Link>
                    <Link>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                      width={30}
                      height={30}
                    />
                    </Link>
                  </div>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
