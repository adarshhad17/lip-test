import React from 'react'
// import Footer from './Footer/Footer'
import HerSection from './components/indexPage/HeroSection/HeroSection'
import ShopCards from './components/indexPage/ShopCards/ShopCards'
import FeatureStrip from './components/indexPage/FeaturesStrip/FeatureStrip'
import BestInPlump from './components/indexPage/BESTinPUMPS/BestInPlump'
import SwatchStrip from './components/indexPage/swatch/SwatchStrip'
import ProductSection from './components/indexPage/ProductSection/ProductSection'
import FeaturedLogos from './components/indexPage/FeaturedLogos/FeaturedLogos'
import PlumpKits from './components/indexPage/PlumpKits/PlumpKits'
import PlumpCard from './components/indexPage/PlumpCard.jsx/PlumpCard'
import ProjectShowcase from './components/indexPage/ProjectShowcase/ProjectShowcase'
import Footer from './components/LayOut/Footer/Footer'
import VipSignup from './components/LayOut/VipSignup/VipSignUp'

function App() {
  return (
    <div>
      <HerSection/>
      <ShopCards/>
      <FeatureStrip/>
      <BestInPlump/>
      <SwatchStrip/>
      <ProductSection/>
      <FeaturedLogos/>
      <PlumpKits/>
      <PlumpCard/>
      <ProjectShowcase/>
      <VipSignup/>
      <Footer/>
      
    </div>
  )
}

export default App
