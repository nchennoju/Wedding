import React from 'react'
import { COLOR } from 'rsuite/esm/internals/constants'
import Logo from '../assets/images/logo.png'

function Seeyou () {
  return (
    <div
      id='faq'
      className='section-padding bg-img bg-fixed'
    >
      <div className='container'>
      <div className='row'>
          <div
            className='col-md-12 text-center animate-box'
            data-animate-effect='fadeInUp'
          >
            <h3 className='oliven-couple-title'>Frequently Asked Questions</h3>
            <br></br>
            <h3><b>What’s the dress code?</b></h3>
            <h4 className='oliven-couple-subtitle'>Cocktail attire, please. But we want you to feel comfortable, so if those shoes are too high or that top button is too tight, let it all hang loose.</h4>
            <br></br>
            <h3><b>Can I bring a date?</b></h3>
            <h4 className='oliven-couple-subtitle'>If your invitation says “and Guest,” then yes, if not, we would prefer if it was just you.</h4>
            <br></br>
            <h3><b>What’s the dress code?</b></h3>
            <h4 className='oliven-couple-subtitle'>Our wedding will have an OPEN BAR. It will also be heavily photographed and any drunken shenanigans will be mocked for years to come. Please proceed with caution ;)</h4>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Seeyou
