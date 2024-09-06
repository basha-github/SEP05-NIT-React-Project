//import React from 'react'

import { useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import { FormEvent, useState } from "react";
import axios from "axios";

export default function Login() {
  const nav = useNavigate();

  const [message,setMessage] = useState('');
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("user name--->" + name);
    console.log("user password...." + password);

    const loginUser = { name, password };

    axios
      .get("http://localhost:1234/nit/login?username="+name+"&password="+password)
      .then((res) => {
        console.log("result---->" + res.data);
        if (res.data == "success") {
          nav("/home");
        }
		else{
			setMessage("Credentials are not good!");
			setName("");
			setPassword("");
		}
      });

    //
  };
  return (
    <div>
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="user_card">
            <div className="d-flex justify-content-center">
              <div className="brand_logo_container">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png"
                  className="brand_logo"
                  alt="Logo"
                />
              </div>
            </div>
			
            <div className="d-flex justify-content-center form_container">
              <form onSubmit={loginSubmit}>
			  <div>
				{message}
			</div>
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
					value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control input_user"
                    placeholder="username"
                  />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
					value={password}
                    className="form-control input_pass"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                  />
                </div>

                <div className="d-flex justify-content-center mt-3 login_container">
                  <input
                    type="submit"
                    name="button"
                    className="btn login_btn"
                    value="Login"
                  />
                </div>
              </form>
            </div>

            <div className="mt-4">
              <div className="d-flex justify-content-center links">
                Don't have an account?{" "}
                <a href="#" className="ml-2">
                  Sign Up
                </a>
              </div>
              <div className="d-flex justify-content-center links">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
