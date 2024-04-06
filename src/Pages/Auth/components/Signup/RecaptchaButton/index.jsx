import React, { useEffect } from "react";

const RecaptchaButton = (props) => {
  // Dynamically load the reCAPTCHA script when the component mounts


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
