import React from 'react';
import "./Success.css";
import { useLocation, useHistory } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const formData = location.state;
  const pizzaBilgileri = location.pizza;
  const history = useHistory();

  const calculateSelectedItemsTotal = (formData) => {
    const ekMalzemeFiyati = 5;
    if (formData) {
      const toplam = ekMalzemeFiyati * formData.malzemeler.length;
      return toplam;
    }
    return 0;
  };


  const calculateOrderTotal = (formData) => {
    let result = 0;
    if (formData && pizzaBilgileri) {
      result = pizzaBilgileri.fiyat;
      const toplamFiyat =
        (pizzaBilgileri.fiyat + calculateSelectedItemsTotal(formData)) *
        formData.adet;
      if (formData.boyut === "S") {
        result = toplamFiyat;
      } else if (formData.boyut === "M") {
        result = toplamFiyat + 10;
      } else if (formData.boyut === "L") {
        result = toplamFiyat + 20;
      }
    }
    return result;
  };

  if (!formData || !pizzaBilgileri) {
    history.push("/redirect-order")
  }

  console.log(pizzaBilgileri);
  console.log(formData);
  return (
    <div className='success-page'>
      <h1 style={{ fontFamily: "Barlow", width: "100%", textAlign: "center", fontSize: "3rem", marginTop: "5%" }}>Teknolojik Yemekler</h1>
      <p style={{ color: "#FDC913", fontFamily: "Satisfy", width: "100%", textAlign: "center", fontSize: "2rem", marginBottom: "0%" }}>lezzetin yolda</p>
      <p style={{ fontFamily: "Barlow", width: "40%", textAlign: "center", fontSize: "3rem", marginTop: "0%", borderBottom: "1px solid white", paddingBottom: "2%" }}>SİPARİŞİNİZ ALINDI</p>
      <h4>{pizzaBilgileri && pizzaBilgileri.isim}</h4>
      <div className='pizza'>
        <p>Adet:<span style={{ marginLeft: "2%", fontWeight: "bold" }}>{formData && formData.adet}</span></p>
        <p>Boyut:<span style={{ marginLeft: "2%", fontWeight: "bold" }}>{formData && formData.boyut}</span></p>
        <p>Hamur:<span style={{ marginLeft: "2%", fontWeight: "bold" }}>{formData && formData.hamur}</span> </p>
        <p>Malzemeler:<span style={{ marginLeft: "2%", fontWeight: "bold" }}>{formData && formData.malzemeler.join(', ')}</span> </p>
        <p>Sipariş Notu:<span style={{ marginLeft: "2%", fontWeight: "bold" }}>{formData && formData.siparisNotu}</span></p>
      </div>
      <div className="siparis-toplami">
        <h3>Sipariş Toplamı</h3>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginLeft: "15%" }}>
          <p> Seçimler</p>
          <p>{calculateSelectedItemsTotal(formData)} ₺</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginLeft: "15%" }}>
          <p> Toplam </p>
          <p>{calculateOrderTotal(formData)}₺</p>
        </div>
      </div>
    </div>

  );
};

export default Success;