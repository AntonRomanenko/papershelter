import React from "react";

import picture from '../img/picture.webp';
import { useTranslation } from "react-i18next";


function BuyNFT() {
  const {t, i18n} = useTranslation();
  return (
    <div id="buyNFT" className="nft-bg">
      <div className="container pb-5">
      <h2 className="pt-5">{t("buyNFT.nft-title")}</h2> 
        <div className="row-gap pt-5 pb-5 row">
          <div className="col-12 col-lg-5">
            <div>
              <img className="w-100" src={picture} alt="" />
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <p className="pb-4">{t("buyNFT.nft-text-1")}</p>
            <p className="pb-4">{t("buyNFT.nft-text-2")}</p>
            <p className="pb-4">{t("buyNFT.nft-text-3")}</p>
          </div>
        </div>
        <div className="text-start col-12">
          <a className="bg-primary text-decoration-none text-white fw-bold" style={{'padding': '10px 20px'}} href="https://opensea.io/PaperShelter">{t("buyNFT.nft-btn")}</a>
        </div>
      </div>
    </div>
  )
}

export default BuyNFT;