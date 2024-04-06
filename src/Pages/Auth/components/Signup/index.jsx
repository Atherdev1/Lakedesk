import React, { useEffect, useState } from "react";
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

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({});
  const countries = getData();
  const options = countries.map((country) => ({
    value: country.code,
    label: country.name,
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  const onSubmit = async (token) => {
    console.log("token", token);
    if (!token) swal("Oops", "Signup Failed", "error");
    if (
      data.firstName &&
      data.corporateEmail &&
      isValidEmail(data.corporateEmail)
    ) {
      try {
        const response = await Axios.post("/api/signup", {
          ...data,
          "g-recaptcha-response": token,
        });
        swal("", response.data, "success");
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

  useEffect(() => {
    window.onSubmit = onSubmit;
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
              value={data.firstName}
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
              value={data.lastName}
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
              value={data.corporateEmail}
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
            value={data.mobile}
            onChange={(mobile) =>
              setData((prev) => ({ ...prev, mobile: mobile }))
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
              value={data.designation}
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
              value={data.company}
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
            value={options.find((option) => option.label === data.country)}
            onChange={(country) =>
              setData((prev) => ({ ...prev, country: country.label }))
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
              value={data.industry}
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
              value={data.jobFunction}
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
              value={data.businessUseCase}
              onChange={handleChange}
              type="text"
              placeholder=" Business Use Case"
            />
          </div>
        </div>
        <div className="mt-4 d-flex justify-content-center">
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

      <div className="policy_text text-center mt-2 mt-lg-3">
        By submitting this form I agree to Gathr's Privacy Policy and Terms of
        Service
      </div>
    </div>
  );
};

export default Signup;
