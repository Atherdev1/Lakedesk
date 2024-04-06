import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { MdLockOutline } from "react-icons/md";
import ActionButton from "../../../../Common/ActionButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import Axios from "../../../../Axios";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

const SetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        password: "",
      },
      validationSchema: Yup.object().shape({
        password: Yup.string()
          .required("Password is required")
          .matches(/[A-Z]/, "Atleast one upper case letter")
          .matches(/[a-z]/, "Atleast one lower case letter")
          .matches(/[0-9]/, "Atleast one number")
          .matches(
            /[\^$*.\[\]{}()?\-"!@#%&/\\,><':;|_~`]/,
            "Atleast one special character"
          )
          .min(8, "Atleast 8 Characters"),
      }),
      onSubmit: async (values) => {
        try {
          const response = await Axios(
            `/auth/set-password?token=${token}&password=${values.password}`
          );
          swal("Done", "Password reset Successful", "success");
          navigate("/auth");
        } catch (error) {
          console.log(error.message);
          swal("Oops", error.message, "error");
        }
      },
    });
  return (
    <div className="auth_container d-flex flex-column flex-md-row">
      <div className="carousel_container d-none d-md-block"></div>
      <div className="login_signup_container mt-3 ">
        <p className="help_text">
          Need help? Write to <span>saas-support@lakedesk.one</span>
        </p>
        <div className="mt-5 mt-md-0">
          <h4>Set Password</h4>
          <form
            action=""
            className="d-flex flex-column align-items-center"
            onSubmit={handleSubmit}
          >
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
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type={showPassword ? "text" : "password"}
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
              <small className="text-danger">
                {touched.password && errors.password ? (
                  errors.password
                ) : (
                  <>&nbsp;</>
                )}
              </small>
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
