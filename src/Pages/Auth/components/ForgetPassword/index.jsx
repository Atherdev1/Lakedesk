import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import ActionButton from "../../../../Common/ActionButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import Axios from "../../../../Axios";
import swal from "sweetalert";

const ForgetPassword = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: Yup.object().shape({
        email: Yup.string().email("Invalid Email").required("Email Required"),
      }),
      onSubmit: async (values) => {
        try {
          const response = await Axios(
            `/auth/forget-password?email=${values.email}`
          );
          swal("", response.data, "success");
        } catch (error) {
          swal("", error.message, "error");
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
          <h4>Forgot Password</h4>
          <form
            action=""
            className="d-flex flex-column align-items-center"
            onSubmit={handleSubmit}
          >
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
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  placeholder="Business Email"
                />
              </div>
              <small className="text-danger">
                {touched.email && errors.email ? errors.email : <>&nbsp;</>}
              </small>
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
