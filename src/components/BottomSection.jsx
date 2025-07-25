import React from 'react'
import VipSignup from './LayOut/VipSignup/VipSignUp'
import Footer from './LayOut/Footer/Footer'

function BottomSection() {
  return (
   <div className="footer">
  <div className="vip-container"> <VipSignup/> </div>
  <div className="bottom-footer"> <Footer/> </div>
</div>
  )
}

export default BottomSection
