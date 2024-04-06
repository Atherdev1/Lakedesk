import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { MdLockOutline } from "react-icons/md";
import ActionButton from "../../../../Common/ActionButton";

const SetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="auth_container d-flex flex-column flex-md-row">
      <div className="carousel_container d-none d-md-block"></div>
      <div className="login_signup_container mt-3 ">
        <p className="help_text">
          Need help? Write to <span>saas-support@lakedesk.one</span>
        </p>
        <div className="mt-5 mt-md-0">
          <h4>Set Password</h4>
          <form action="" className="d-flex flex-column align-items-center">
            <div className="input_box mt-2 mt-lg-3">
              <label htmlFor="password" className="input_label">
                Password<span>*</span>
              </label>
              <div className="input_group password">
                <span className="icon">
                  <MdLockOutline color="lightgray" />
                </span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password"
                />
                <span
                  className="eye_icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FiEyeOff color="lightgray" />
                  ) : (
                    <FiEye color="lightgray" />
                  )}
                </span>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-center">
              <ActionButton px={30} py={10}>
                Set Password
              </ActionButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SetPassword;
