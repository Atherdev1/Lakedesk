import React, { useEffect, useState } from "react";
import brand from "../../../../Assets/Landing/logo.png";
import "./style.css";
import DrawerMenu from "./DrawerMenu";
import { CiGlobe } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { MdOutlineCall } from "react-icons/md";
import ActionButton from "../../../../Common/ActionButton";
import { landingMenuOPtions } from "../Constants";
import { Link } from "react-router-dom";

const Header = () => {
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

  return (
    <>
      <nav className="d-flex justify-content-between align-items-center">
        <div className="brand_section d-flex align-items-center">
          {windowSize.width < 992 && <DrawerMenu />}
          <img className="brand ms-2 m-lg-0" src={brand} alt="brand" />
          {windowSize.width >= 992 && (
            <ul className="menu_list gap-4 m-0">
              {landingMenuOPtions?.map((menu) => {
                return (
                  <li>
                    <Link to={menu.navigateTo}>{menu.label}</Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="action_section d-flex align-items-center gap-2 gap-sm-4 ">
          <span role="button">
            <CiGlobe />
          </span>
          <span role="button">
            <IoSearchOutline />
          </span>
          <span role="button" className="ms-sm-2">
            {windowSize.width < 576 ? <CiLogin /> : "Login"}
          </span>
          <span role="button">
            {windowSize.width < 576 ? <MdOutlineCall /> : "Contact Us"}
          </span>
          <ActionButton px={10} py={4}>
            Get an Estimate
          </ActionButton>
        </div>
      </nav>
    </>
  );
};

export default Header;
