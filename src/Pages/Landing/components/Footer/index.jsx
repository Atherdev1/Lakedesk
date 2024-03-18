import brand from "../../../../Assets/Landing/logo.svg";
import linkedIn from "../../../../Assets/Landing/Linkedin.svg";
import youtube from "../../../../Assets/Landing/youtube.svg";
import instagram from "../../../../Assets/Landing/insta.svg";
import xMark from "../../../../Assets/Landing/x.svg";
import "./style.css";
import SearchBar from "./SearchBar";
import { footerMenu } from "../Constants";
const Footer = () => {
  return (
    <>
      <div className="footer_container d-flex flex-column flex-lg-row">
        <div className="footer_brand d-flex flex-column align-items-center align-items-lg-start">
          <img className="brand_image" src={brand} alt="" />
          <div className="social_icons mb-4 d-flex gap-4 align-items-center">
            <img src={linkedIn} alt="" />
            <img src={youtube} alt="" />
            <img src={instagram} alt="" />
            <img src={xMark} alt="" />
          </div>

          <SearchBar />
        </div>
        <div className="footer_menu flex-grow-1 mt-4 mt-lg-0">
          <div className="row g-4">
            {Object.entries(footerMenu)?.map((menu) => {
              return (
                <div className="col-6 col-sm-3">
                  <p className="footer_menu_heading">{menu[0]}</p>
                  <ul className="footer_menu_list">
                    {menu[1]?.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="copyright">© LD 2024. All rights reserved.</div>
    </>
  );
};

export default Footer;
