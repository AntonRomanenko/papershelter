import React from "react";
// TODO везде где использую
import { useTranslation } from "react-i18next";





function ThreeStories() {
  ////вставляем везде
  const {t, i18n} = useTranslation();
  return (
    <div id='three-stories' className="three-stories">
      <div className="container">
        <h1   className="main-title">
        <p>
          <span>{t("threeStories.st-1")} </span>
          <span className="fw-normal">{t("threeStories.st-11")}</span>
        </p>  
        <p>
          <span>{t("threeStories.st-2")} </span>
          <span className="fw-normal">{t("threeStories.st-22")}</span>
        </p>
        <p>
          <span>{t("threeStories.st-3")} </span>
          <span className="fw-normal">{t("threeStories.st-33")}</span>
        </p>
        </h1>
        <p>{t("threeStories.st-4")}</p>
        <div className="pt-5 pb-5">
          <a className="btn-white" href="#carousel">{t("threeStories.btn-st")}</a>
        </div>
      </div>
    </div>
  )
}

export default ThreeStories;