import React, { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import { getData } from "country-list";
import "react-phone-input-2/lib/style.css";
import "./style.css";
import ActionButton from "../../../../Common/ActionButton";
import RecaptchaButton from "./RecaptchaButton";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const countries = getData();
  const options = countries.map((country) => ({
    value: country.code,
    label: country.name,
  }));
  const onSubmit = (token) => {
    console.log("reCAPTCHA token:", token);
    // Here, you can handle form submission or other actions with the token
  };
  useEffect(() => {
    window.onsubmit = onSubmit;
  }, []);
  return (
    // <div className="signup_container">
    //   <div className="input_box mt-2 mt-lg-3">
    //     <label htmlFor="email" className="input_label">
    //       Business Email<span>*</span>
    //     </label>
    //     <div className="input_group">
    //       <span className="icon">
    //         <MdOutlineEmail color="lightgray" />
    //       </span>
    //       <input
    //         id="email"
    //         type="email"
    //         required
    //         placeholder="Business Email"
    //       />
    //     </div>
    //   </div>
    //   <div className="input_box mt-2 mt-lg-3">
    //     <label htmlFor="password" className="input_label">
    //       Password<span>*</span>
    //     </label>
    //     <div className="input_group password">
    //       <span className="icon">
    //         <MdLockOutline color="lightgray" />
    //       </span>
    //       <input
    //         id="password"
    //         type={showPassword ? "text" : "password"}
    //         required
    //         placeholder="Password"
    //       />
    //       <span
    //         className="eye_icon"
    //         onClick={() => setShowPassword(!showPassword)}
    //       >
    //         {showPassword ? (
    //           <FiEyeOff color="lightgray" />
    //         ) : (
    //           <FiEye color="lightgray" />
    //         )}
    //       </span>
    //     </div>
    //   </div>
    //   <div className="input_box mt-2 mt-lg-3">
    //     <label htmlFor="password" className="input_label">
    //       Phone<span>*</span>
    //     </label>
    //     <PhoneInput
    //       country={"in"}
    //       value={phone}
    //       onChange={(phone) => setPhone(phone)}
    //       enableSearch
    //     />
    //   </div>
    //   <div className="input_box mt-2 mt-lg-3">
    //     <label htmlFor="password" className="input_label">
    //       Country<span>*</span>
    //     </label>
    //     <Select
    //       options={options}
    //       className="country-select"
    //       classNamePrefix="select"
    //       placeholder="Select a country"
    //     />
    //   </div>

    //   <div className="mt-4 d-flex justify-content-center">
    //     <button
    //       type="submit"
    //       className="g-recaptcha"
    //       data-sitekey="6LfkLKopAAAAAFQMLwWpqPElw-Qiy0qGle9_xfq3"
    //       data-callback="onSubmit"
    //       data-action="submit"
    //     >
    //       SignUp
    //     </button>
    //     {/* <ActionButton px={30} py={10}>
    //       Sign Up
    //     </ActionButton> */}
    //   </div>
    //   <div className="policy_text text-center mt-2 mt-lg-3">
    //     By submitting this form I agree to Gathr's Privacy Policy and Terms of
    //     Service
    //   </div>
    // </div>

    <form
      // onSubmit={onSubmit}
      // action="/api/signup"
      method="post"
      id="signup-form"
    >
      First Name <input type="text" id="firstName" name="firstName" value="" />
      Last Name <input type="text" id="lastName" name="lastName" value="" />
      Corporate Email{" "}
      <input type="text" id="corporateEmail" name="corporateEmail" value="" />
      Mobile <input type="text" id="mobile" name="mobile" value="" />
      Designation{" "}
      <input type="text" id="designation" name="designation" value="" />
      Company <input type="text" id="company" name="company" value="" />
      Job Function{" "}
      <input type="text" id="jobFunction" name="jobFunction" value="" />
      Business Use Case{" "}
      <input type="text" id="businessUseCase" name="businessUseCase" value="" />
      <div>
        {/* <div
          class="grecaptcha-badge"
          data-style="bottomright"
          style="width: 256px; height: 60px; display: block; transition: right 0.3s ease 0s; position: fixed; bottom: 14px; right: 0px; box-shadow: gray 0px 0px 5px; border-radius: 2px; overflow: hidden;"
        >
          <div class="grecaptcha-logo">
            <iframe
              title="reCAPTCHA"
              width="256"
              height="60"
              role="presentation"
              name="a-hd1mea8tlri6"
              frameborder="0"
              scrolling="no"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
              src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LfkLKopAAAAAFQMLwWpqPElw-Qiy0qGle9_xfq3&amp;co=aHR0cDovL2VjMi0xOC0yMDktMTc1LTk4LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tOjgwODA.&amp;hl=en&amp;v=rz4DvU-cY2JYCwHSTck0_qm-&amp;size=invisible&amp;sa=submit&amp;cb=tsytrk90y9cl"
            ></iframe>
          </div>
          <div class="grecaptcha-error"></div>
          <textarea
            id="g-recaptcha-response"
            name="g-recaptcha-response"
            class="g-recaptcha-response"
            style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"
          ></textarea>
        </div>
        <iframe style="display: none;"></iframe> */}
        <button
          type="submit"
          className="g-recaptcha"
          data-sitekey="6LfkLKopAAAAAFQMLwWpqPElw-Qiy0qGle9_xfq3"
          data-callback="onSubmit"
          data-action="submit"
        >
          SignUp
        </button>
      </div>
    </form>
  );
};

export default Signup;
