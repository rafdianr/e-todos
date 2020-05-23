import React from "react";
import "../assets/style/style.css";

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
            </div>
          </div>
          <div className="sign-right"></div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
