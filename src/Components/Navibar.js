import React, { useState } from 'react'
import logo from '../img/logo.webp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ua from '../img/ua.png';
import en from '../img/en.png';
import { useTranslation } from 'react-i18next';

const  Header = () => {
  const [show, setShow] = useState(true)
  const {t, i18n} = useTranslation();
  const changleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  } 

  return (
    <div className='navbar-wraper'>
      <nav className="navbar navbar-expand-lg  main-color">
        <div className="container">
          <a className="navbar-brand p-0" href="#three-stories">
            <img className='logo' src={logo} alt="" />
          </a>
          <button className="navbar-toggler"
          onClick = {() => {setShow(!show)}}>
        
            {show ? <MenuIcon/> : <CloseIcon/>}
          </button>
          
          <div className={show ? "collapse navbar-collapse" : "collapse navbar-collapse active"}>
            <div className="navbar-nav ms-auto align-items-center">
              <a className="nav-link text-light" href="#three-stories">{t("navLinks.link-1")}</a>
              <a className="nav-link text-light" href="#buyNFT">{t("navLinks.link-2")}</a>
              <a className="nav-link text-light" href="#warnotes">{t("navLinks.link-3")}</a>
              <a className="nav-link text-light" href="#footer">{t("navLinks.link-4")}</a>
              <div className='nav-link'>
                    <button onClick={() => changleLanguage('ua')}  className='translate'>
                      <img src={ua} alt="" />
                    </button>
                    <button onClick={() => changleLanguage('en')} className='translate'>
                      <img src={en} alt="" />
                    </button>
              </div>
              <a href='#footer' className="contact-us nav-link text-light" >{t("navLinks.link-5")}</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;