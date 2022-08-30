import React from "react";
import "../index.scss";
import { useTranslation } from "react-i18next";

function Consumption() {
  const {t, i18n} = useTranslation();
  return (
    <div id="three-stories" className="three-stories">
      <div  className="container pt-5 pb-5">
        <h2 className="pb-5">{t("consumption.title")}</h2> 
        <p>
        {t("consumption.text-1")}
        <a className="text-decoration-underline text-white fw-bold" href="https://www.confortostomi.com/english/urun-detay/c300-ts-npwt-terapi-unitesi"> {t("consumption.text-11")} </a>
        {t("consumption.text-12")}
        </p>
        <p>
          {t("consumption.text-2")}
        </p>
        <p>
        {t("consumption.text-3")}
        </p>
        <p>
        {t("consumption.text-4")}
          <a className="text-decoration-underline text-white fw-bold" href="https://bekind.ua/uk"> {t("consumption.text-41")} </a>.
        </p>
        <div>
          <a className="text-decoration-underline text-white fw-bold" href="https://bekind.ua/uk/project?id=80da15f7-7884-4681-bb34-4d4266e0ed9f">
          {t("consumption.donate-link")}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Consumption;