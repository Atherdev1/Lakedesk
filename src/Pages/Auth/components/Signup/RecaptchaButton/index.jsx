import React, { useEffect } from "react";

const RecaptchaButton = () => {
  // Dynamically load the reCAPTCHA script when the component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Optional: Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Define the onSubmit callback function
  const onSubmit = (token) => {
    console.log("reCAPTCHA token:", token);
    // Here, you can handle form submission or other actions with the token
  };

  // Ensure the window object has access to the onSubmit callback
  useEffect(() => {
    window.onSubmit = onSubmit;
  }, []);

  return (
    <button
      type="submit"
      className="g-recaptcha"
      data-sitekey="6LfkLKopAAAAAFQMLwWpqPElw-Qiy0qGle9_xfq3"
      data-callback="onSubmit"
      data-action="submit"
    >
      SignUp
    </button>
  );
};

export default RecaptchaButton;
