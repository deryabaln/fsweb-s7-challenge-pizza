import React from 'react';
import { useHistory } from 'react-router-dom';
import "./Home.css";
import Footer from './Footer';
import { SvgComponent1, SvgComponent2, SvgComponent3, SvgComponent4, SvgComponent5, SvgComponent6 } from './svg/svg';

const Home = () => {

  const history = useHistory();

  const handleOrderClick = () => {
    history.push('/order-pizza');
  };

  return (
    <div>
      <header>
        <h1 style={{ fontSize: "3rem" }}>Teknolojik Yemekler</h1>
        <p className='satisfy-text'>fırsatı kaçırma</p>
        <p className='text' style={{ fontSize: "3rem" }}>KOD ACIKTIRIR</p>
        <p className='text' style={{ fontSize: "3rem" }}>PİZZA DOYURUR</p>
        <button id="order" onClick={handleOrderClick} style={{ marginLeft: "auto", marginRight: "auto" }}>ACIKTIM</button>
      </header>
      <div className='svg-container'>
        <nav>
          <SvgComponent1 />
          <a href='./'> YENİ Kore</a>
        </nav>
        <nav>
          <SvgComponent2 />
          <a href='./'>Pizza</a>
        </nav>
        <nav>
          <SvgComponent3 />
          <a href='./'> Burger</a>
        </nav>
        <nav>
          <SvgComponent4 />
          <a href='./'>Kızartmalar</a>
        </nav>
        <nav>
          <SvgComponent5 />
          <a href='./'> Fast Food</a>
        </nav>
        <nav>
          <SvgComponent6 />
          <a href='./'>Gazlı İçecek</a>
        </nav>
      </div>
      <div className='contents'>
        <div className='contents-container'>
          <div className='ozel'>
            <h1>Özel Lezzetus</h1>
            <p>Position Absolute Acı Pizza</p>
            <button id="order" onClick={handleOrderClick} style={{ background: "white", color: "#CE2829" }}>Sipariş Ver</button>
          </div>
          <div className='hackathlon-kurye'>
            <div className='hackathlon'>
              <h2>Hackathlon Burger Menü</h2>
              <button id="order" onClick={handleOrderClick} style={{ background: "white", color: "#CE2829" }}>Sipariş Ver</button>
            </div>
            <div className='kurye'>
              <h2 style={{ paddingTop: "10%", color: "#CE2829" }}>Çoooook</h2>
              <h2>hızlı npm gibi kurye</h2>
              <button id="order" onClick={handleOrderClick} style={{ background: "white", color: "#CE2829", marginTop: "2%" }}>Sipariş Ver</button>
            </div>
          </div>
          <p style={{ color: "#CE2829", fontFamily: "Satisfy", width: "100%", textAlign: "center", fontSize: "2rem", marginBottom: "0%" }}>en çok paketlenen menüler</p>
          <h4 style={{ color: "#292929", fontFamily: "Barlow", width: "100%", textAlign: "center", fontSize: "2.5rem", marginTop: "1%", marginBottom: "1%" }}>Acıktıran Kodlara Doyuran Lezzetler</h4>
          <div className="svg-button">
            <button onClick={handleOrderClick}><SvgComponent1 />YENİ Kore</button>
            <button onClick={handleOrderClick}><SvgComponent2 />Pizza</button>
            <button onClick={handleOrderClick}><SvgComponent3 />Burger</button>
            <button onClick={handleOrderClick}><SvgComponent4 />Kızartmalar</button>
            <button onClick={handleOrderClick}><SvgComponent5 />Fast Food</button>
            <button onClick={handleOrderClick}><SvgComponent6 />Gazlı İçecek</button>
          </div>
          <div className='card-container'>
            <div className='card' onClick={handleOrderClick}>
              <img src={require('../Assets/adv-aseets/food-1.png')} alt=""></img>
              <h5 style={{ color: "black" }}>Terminal Pizza</h5>
              <div className='card-price'>
                <p style={{ color: "#5F5F5F" }}>4.9</p>
                <p style={{ color: "#5F5F5F" }}>(200)</p>
                <p style={{ color: "black", fontWeight: "bold" }}>60₺</p>
              </div>
            </div>
            <div className='card' onClick={handleOrderClick}>
              <img src={require('../Assets/adv-aseets/food-2.png')} alt=""></img>
              <h5 style={{ color: "black" }}>Position Absolute Acı Pizza</h5>
              <div className='card-price'>
                <p style={{ color: "#5F5F5F" }}>4.9</p>
                <p style={{ color: "#5F5F5F" }}>(928)</p>
                <p style={{ color: "black", fontWeight: "bold" }}>85₺</p>
              </div>
            </div>
            <div className='card' onClick={handleOrderClick}>
              <img src={require('../Assets/adv-aseets/food-3.png')} alt=""></img>
              <h5 style={{ color: "black" }}>useEffect Tavuklu Burger</h5>
              <div className='card-price'>
                <p style={{ color: "#5F5F5F" }}>4.9</p>
                <p style={{ color: "#5F5F5F" }}>(462)</p>
                <p style={{ color: "black", fontWeight: "bold" }}>75₺</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
