import React, { useState } from "react";
import { Layout } from "../Layout/Layout";
import { useForm } from "react-hook-form";

//css
import "./AdminLogin.css";

const AdminLogin = () => {
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
            <div className="box_login">
              <div className="text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/295/295128.png"
                  height="100px"
                  width="auto"
                  alt="login"
                />
                <h3>Admin Login</h3>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" mt-2 ">
                  <div className="form-group ">
                    <p className="lable">Select User Type</p>
                    <select
                      type="text"
                      id="admintype"
                      placeholder="Select User Typr"
                      className="form-control"
                      {...register("admintype")}
                    >
                      <option>Fire service</option>
                      <option>Police station</option>
                      <option>Blood Donation</option>
                      <option>Ambulance</option>
                    </select>
                  </div>
                  <div className="form-group mt-2 ">
                    <p className="lable">User Name</p>
                    <input
                      placeholder="user name"
                      autoComplete="off"
                      type="email"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className="form-group mt-2">
                    <p className="lable">Password</p>
                    <input
                      placeholder="Password"
                      autoComplete="off"
                      type="password"
                      {...register("password", { required: true })}
                    />
                  </div>
              
                  <div className="text-center mt-4">
                    <button className="btn-submit">
                      Login{" "}
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminLogin;
