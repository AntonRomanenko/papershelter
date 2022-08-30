import React from "react";
import instagram from '../img/istagram.svg';
import twitter from '../img/twitter.svg';
import fasebook from '../img/facebook.svg';
import { useTranslation } from "react-i18next";


function Footer() {
  const {t, i18n} = useTranslation();
  return (
    <div id="footer" className="three-stories">
      <div className="container">
        <div className="pt-4 text-center text-sm-start">
          <h3>{t("footer.contact-us")}</h3>
          <a className="text-decoration-underline text-white fw-bold" href="papershelterorgua@gmail.com">papershelterorgua@gmail.com</a>
        
        </div>
        <div className="row-gap pt-4 pb-4 row align-items-center">
          <div className="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-start">
            {t("footer.copy")}
          </div>
          <div className="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-end">
          <a href="https://www.instagram.com/paper_shelter/">
            <img  className="social-icon" src={instagram} alt="" />
          </a>
          <a href="https://twitter.com/paper_shelter">
            <img className="social-icon" src={twitter} alt="" />
          </a> 
          <a href="https://www.facebook.com/papershelter.org.ua">
            <img className="social-icon" src={fasebook} alt="" />
          </a>         
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;