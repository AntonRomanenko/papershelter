import './App.css';
import "./index.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Navibar';
import ThreeStories from './Components/ThreeStories';
import Slider from './Components/Carousel'
import Consumption from './Components/Consumption';
import BuyNFT from './Components/BuyNft';
import Warnotes from './Components/Warnotes';
import Footer from './Components/Footer';
import { Suspense } from 'react';
import './i18n';



function App() {
  return ( 
    <Suspense fallback={'Loading...'}>
    <div>
        <Header/>
        <ThreeStories/>  
        <Slider/>
        <Consumption/>
        <BuyNFT/>
        <Warnotes/>
        <Footer/>
    </div>
    </Suspense> 
  );
}


export default App;
