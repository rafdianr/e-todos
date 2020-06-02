import React, { useState, useEffect } from "react";
import "../assets/style/SignPage.css";
import { Link } from "react-router-dom";
import SocialIcon from "../components/SocialIcon";
import axios from "axios";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) props.history.replace("/");
  }, [props.history]);

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("fungsi signup");
    axios({
      method: "POST",
      url: "https://mini-project1.herokuapp.com/api/v1/user/register",
      data: {
        name,
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.status) {
          localStorage.setItem("token", res.data.data.token);
          setIsLoading(false);
          setName("");
          setEmail("");
          setPassword("");
          props.history.replace("/");
        } else {
          //handle error
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setName("");
        setEmail("");
        setPassword("");
      });
  };

  return (
    <section className="sign">
      <div className="container">
        <div className="sign-wrapper">
          <div className="sign-left">
            <h2>Todos</h2>
            <div className="sign-left-item">
              <h1 className="sign-left-item-title">Welcome Back!</h1>
              <p className="sign-left-item-des">
                To keep connected with us please login with your personal info
              </p>
              <Link to="/signin">
                <button className="reg-btn white">SIGN IN</button>
              </Link>
            </div>
          </div>
          <div className="sign-right">
            <div className="sign-right-item">
              <h1 className="sign-right-item-title">Created Account</h1>
              <SocialIcon />
              <p className="sign-right-item-des">
                or use email for registration
              </p>
              <form
                className="sign-form"
                action="submit"
                onSubmit={handleSignup}
              >
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button className="reg-btn">SIGN UP</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
