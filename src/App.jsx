import React from 'react'
// import Footer from './Footer/Footer'
import HerSection from './components/HeroSection/HerSection'
import ShopCards from './components/ShopCards/ShopCards'
import FeatureStrip from './components/FeaturesStrip/FeatureStrip'
import BestInPlump from './components/BESTinPUMPS/BestInPlump'
import SwatchStrip from './components/swatch/SwatchStrip'
import ProductSection from './components/ProductSection/ProductSection'
import FeaturedLogos from './components/FeaturedLogos/FeaturedLogos'
import PlumpKits from './components/PlumpKits/PlumpKits'
import PlumpCard from './components/PlumpCard.jsx/PlumpCard'
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase'
import Footer from './components/Footer/Footer'
import VipSignup from './components/VipSignup/VipSignUp'

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
