import React, { useEffect, useMemo, useState } from "react";
import { Tabs, Tab } from "react-bootstrap";

import "./style.css";
import SignUp from "../Signup";
import Login from "../Login";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageData } from "../../../Landing/components/Constants";

const Auth = () => {
  const [key, setKey] = useState("signUp");
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const carouselSetting = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      
    }),
    []
  );
  return (
    <div className="auth_container d-flex flex-column flex-md-row">
      <div className="carousel_container d-none d-md-block">
      </div>
     <div className="login_signup_container mt-3 ">
      <p className="help_text">Need help? Write to <span>saas-support@lakedesk.one</span></p>
      <div className="mt-5 mt-md-0">
      <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey={"signUp"} title={"Sign Up"}>
            <SignUp />
          </Tab>
          <Tab eventKey={"login"} title={"Log In"}>
            <Login />
          </Tab>
        </Tabs>
      </div>
       
      </div>

     
    </div>
  );
};

export default Auth;
