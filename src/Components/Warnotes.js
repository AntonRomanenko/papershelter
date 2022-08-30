import React from "react";
import banner from '../img/war-banner.webp';
import { useTranslation } from "react-i18next";


function Warnotes() {
  const {t, i18n} = useTranslation();
  return (
    <div id="warnotes" className="mt-5">
      <div className="container pt-5 pb-5">
          <div >
            <img className="w-100" src={banner} alt="" />
          </div>
          <div className="row-gap pt-5 pb-5 row">
            <div className="col-12 col-lg-5">
              <div className="pb-4">
              {t("warnotes.director")}
              </div>
              <div className="pb-4">
              {t("warnotes.playwright")}
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <p className="pb-4">
              {t("warnotes.three-diaries")}
              </p>
              <p className="pb-4">
                {t("warnotes.premiering")}
              </p>
              <p className="pb-4">
                {t("warnotes.promo")}.
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Warnotes;