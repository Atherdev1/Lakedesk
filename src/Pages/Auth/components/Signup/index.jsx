import React, { useState } from "react";
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
import ReCAPTCHA from "react-google-recaptcha";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const countries = getData();
  const options = countries.map((country) => ({
    value: country.code,
    label: country.name,
  }));

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div className="signup_container">
      <div className="input_box mt-2 mt-lg-3">
        <label htmlFor="email" className="input_label">
          Business Email<span>*</span>
        </label>
        <div className="input_group">
          <span className="icon">
            <MdOutlineEmail color="lightgray" />
          </span>
          <input id="email" type="email" required placeholder="Business Email" />
        </div>
      </div>

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

      <div className="input_box mt-2 mt-lg-3">
        <label htmlFor="password" className="input_label">
          Phone<span>*</span>
        </label>
        <PhoneInput
          country={"in"}
          value={phone}
          onChange={(phone) => setPhone(phone)}
          enableSearch
        />
      </div>

      <div className="input_box mt-2 mt-lg-3">
        <label htmlFor="password" className="input_label">
          Country<span>*</span>
        </label>
        <Select
          options={options}
          className="country-select"
          classNamePrefix="select"
          placeholder="Select a country"
        />
      </div>
<ReCAPTCHA
    sitekey="6LcgEKopAAAAAAlwVTNb_wdO6eHWoMYfaPDcr00f"
    onSubmit={onChange}
  />
      <div className="mt-4 d-flex justify-content-center">
        <ActionButton px={30} py={10}>
          Sign Up
        </ActionButton>
      </div>
      <div className="policy_text text-center mt-2 mt-lg-3">
      By submitting this form I agree to Gathr's Privacy Policy and Terms of Service
      </div>
    </div>
  );
};

export default Signup;
