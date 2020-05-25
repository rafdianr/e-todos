import React from "react";
import "../assets/style/style.css";
import { Link } from "react-router-dom";

function SignUp() {
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
                <button class="reg-btn white">SIGN IN</button>
              </Link>
            </div>
          </div>
          <div className="sign-right">
            <div className="sign-right-item">
              <h1 className="sign-right-item-title">Created Account</h1>
              <p className="sign-right-item-des">
                or use email for registration
              </p>
              <form className="sign-form" action="submit">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <button class="reg-btn">SIGN UP</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
