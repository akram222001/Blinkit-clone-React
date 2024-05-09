import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import FooterSec from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HLCards from './Components/HighlightCards/HLCards';
import Products1 from './Components/Products/Products1';
import Slider1 from './Components/Slider/Slider1';
import Slider2 from './Components/Slider/Slider2';
import Slider3 from './Components/Slider/Slider3';
import Slider4 from './Components/Slider/Slider4';
import Slider5 from './Components/Slider/Slider5';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <HLCards />
      <Products1 /><br></br>
      <Slider1 /><br></br>
      <Slider2 /><br></br>
      <Slider3 /><br></br>
      <Slider4 /><br></br>
      <Slider5 /><br></br>
      <FooterSec /><br></br>
    </>
  );
}

export default App;
