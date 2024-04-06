import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import ActionButton from "../../../../Common/ActionButton";

const ForgetPassword = () => {
  return (
    <div className="auth_container d-flex flex-column flex-md-row">
      <div className="carousel_container d-none d-md-block"></div>
      <div className="login_signup_container mt-3 ">
        <p className="help_text">
          Need help? Write to <span>saas-support@lakedesk.one</span>
        </p>
        <div className="mt-5 mt-md-0">
          <h4>Forgot Password</h4>
          <form action="" className="d-flex flex-column align-items-center">
            <div className="input_box mt-2 mt-lg-3">
              <label htmlFor="email" className="input_label">
                Email<span>*</span>
              </label>
              <div className="input_group">
                <span className="icon">
                  <MdOutlineEmail color="lightgray" />
                </span>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Business Email"
                />
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-center">
              <ActionButton px={30} py={10}>
                Submit
              </ActionButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
