import React from "react";
import "../assets/style/SignPage.css";
import { Link } from "react-router-dom";
import SocialIcon from "../components/SocialIcon";

function SignIn() {
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
              <form className="sign-form" action="submit">
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <button className="reg-btn">SIGN IN</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
