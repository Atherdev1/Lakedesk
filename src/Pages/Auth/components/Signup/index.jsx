import React, { useEffect, useRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { SiMaterialdesignicons } from "react-icons/si";
import { FaRegBuilding } from "react-icons/fa";
import { LiaIndustrySolid } from "react-icons/lia";
import { LuFunctionSquare } from "react-icons/lu";
import { MdOutlineAddBusiness } from "react-icons/md";

import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import { getData } from "country-list";
import "react-phone-input-2/lib/style.css";
import "./style.css";
import swal from "sweetalert";
import Axios from "../../../../Axios";
import ReCAPTCHA from "react-google-recaptcha";
import ActionButton from "../../../../Common/ActionButton";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const countries = getData();
  const options = countries.map((country) => ({
    value: country.code,
    label: country.name,
  }));
  const recaptchaRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // This will trigger the invisible reCAPTCHA
    recaptchaRef.current.execute();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  const onReCAPTCHAChange = async (captchaCode) => {
    if (!captchaCode) {
      swal("Oops", "Signup Failed", "error");
      return;
    }
    console.log(formData, captchaCode);
    if (
      formData.firstName &&
      formData.corporateEmail &&
      isValidEmail(formData.corporateEmail)
    ) {
      try {
        const response = await Axios({
          method: "POST",
          url: "/api/signup",
          headers: {
            Accept: "application/json",
            "Access-Control-Allow-Credentials": true,
          },
          params: {
            ...formData,
            "g-recaptcha-response": captchaCode,
          },
        });
        swal("", response.formData, "success");
      } catch (error) {
        swal("Oops", error.message, "error");
      }
    } else {
      // validation
      swal("Oops", "Signup Failed", "error");
    }
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="signup_container">
      <form id="signup-form" action="">
        <div className="input_box mt-2 mt-lg-3">
          <label htmlFor="firstName" className="input_label">
            First Name<span>*</span>
          </label>
          <div className="input_group">
            <span className="icon">
              <CgProfile color="lightgray" />
            </span>
            <input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              type="text"
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="input_box mt-2 mt-lg-3">
          <label htmlFor="lastName" className="input_label">
            Last Name
          </label>
          <div className="input_group">
            <span className="icon">
              <CgProfile color="lightgray" />
            </span>
            <input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="input_box mt-2 mt-lg-3">
          <label htmlFor="corporateEmail" className="input_label">
            Corporate Email<span>*</span>
          </label>
          <div className="input_group">
            <span className="icon">
              <MdOutlineEmail color="lightgray" />
            </span>
            <input
              id="corporateEmail"
              name="corporateEmail"
              value={formData.corporateEmail}
              onChange={handleChange}
              type="email"
              placeholder="Corporate Email"
            />
          </div>
        </div>
        <div className="input_box mt-2 mt-lg-3">
          <label htmlFor="mobile" className="input_label">
            Mobile
          </label>
          <PhoneInput
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={(mobile) =>
              setFormData((prev) => ({ ...prev, mobile: mobile }))
            }
            country={"in"}
            enableSearch
          />
        </div>
        <div className="input_box mt-2 mt-lg-3">
          <label htmlFor="designation" className="input_label">
            Designation
          </label>
          <div className="input_group">
            <span className="icon">
              <SiMaterialdesignicons color="lightgray" />
            </span>
            <input
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              type="text"
              placeholder="Designation"
            />
          </div>
        </div>
        <div className="input_box mt-2 mt-lg-3">
          <label htmlFor="company" className="input_label">
            Company
          </label>
          <div className="input_group">
            <span className="icon">
              <FaRegBuilding color="lightgray" />
            </span>
            <input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              type="text"
              placeholder="Company"
            />
          </div>
        </div>
        <div className="input_box mt-2 mt-lg-3">
          <label htmlFor="country" className="input_label">
            Country
          </label>
          <Select
            id="country"
            name="country"
            value={options.find((option) => option.label === formData.country)}
            onChange={(country) =>
              setFormData((prev) => ({ ...prev, country: country.label }))
            }
            options={options}
            className="country-select"
            classNamePrefix="select"
            placeholder="Select a country"
          />
        </div>
        <div className="input_box mt-2 mt-lg-3">
          <label htmlFor="industry" className="input_label">
            Industry
          </label>
          <div className="input_group">
            <span className="icon">
              <LiaIndustrySolid color="lightgray" />
            </span>
            <input
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              type="text"
              placeholder="Industry"
            />
          </div>
        </div>
        <div className="input_box mt-2 mt-lg-3">
          <label htmlFor="jobFunction" className="input_label">
            Job Function
          </label>
          <div className="input_group">
            <span className="icon">
              <LuFunctionSquare color="lightgray" />
            </span>
            <input
              id="jobFunction"
              name="jobFunction"
              value={formData.jobFunction}
              onChange={handleChange}
              type="text"
              placeholder=" Job Function"
            />
          </div>
        </div>
        <div className="input_box mt-2 mt-lg-3">
          <label htmlFor="businessUseCase" className="input_label">
            Business Use Case
          </label>
          <div className="input_group">
            <span className="icon">
              <MdOutlineAddBusiness color="lightgray" />
            </span>
            <input
              id="businessUseCase"
              name="businessUseCase"
              value={formData.businessUseCase}
              onChange={handleChange}
              type="text"
              placeholder=" Business Use Case"
            />
          </div>
        </div>
        <div className="mt-4 d-flex justify-content-center">
          <ActionButton px={30} py={10} onClick={handleSubmit}>
            Sign Up
          </ActionButton>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LfkLKopAAAAAFQMLwWpqPElw-Qiy0qGle9_xfq3"
            size="invisible"
            onChange={onReCAPTCHAChange}
          />
        </div>
      </form>

      <div className="policy_text text-center mt-2 mt-lg-3">
        By submitting this form I agree to Gathr's Privacy Policy and Terms of
        Service
      </div>
    </div>
  );
};

export default Signup;
