import React, { useState, useEffect } from "react";
import "../assets/style/SignPage.css";
import { Link } from "react-router-dom";
import SocialIcon from "../components/SocialIcon";
import axios from "axios";

const baseUrl = "https://mini-project1.herokuapp.com/api/v1";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) props.history.replace("/");
  }, [props.history]);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios({
      method: "POST",
      url: `${baseUrl}/user/login`,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        if (res.data.status) {
          localStorage.setItem("token", res.data.data.token);
          setIsLoading(false);
          setEmail("");
          setPassword("");
          props.history.replace("/");
        } else {
          //handle error
        }
      })
      .catch((err) => {
        // console.log(err);
        setIsLoading(false);
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
              <h1 className="sign-left-item-title">Hello, Friend!</h1>
              <p className="sign-left-item-des">
                Enter your personal details and start your journey with us
              </p>
              <Link to="/signup">
                <button className="reg-btn white">SIGN UP</button>
              </Link>
            </div>
          </div>
          <div className="sign-right">
            <div className="sign-right-item">
              <h1 className="sign-right-item-title">Sign in to Task Manager</h1>
              <SocialIcon />
              <p className="sign-right-item-des">or use email account</p>
              <form
                className="sign-form"
                action="submit"
                onSubmit={handleLogin}
              >
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
                <button className="reg-btn">
                  {isLoading ? "Loading..." : "SIGN IN"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
