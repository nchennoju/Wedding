import React from 'react'
import Bride from '../assets/images/bride.jpg'
import Groom from '../assets/images/groom.jpg'
function Bridegroom () {
  return (
    <div id='couple' className='bridegroom clear section-padding bg-pink'>
      <div className='container'>
        <div className='row mb-60'>
          <div className='col-md-6'>
            <div
              className='item toright mb-30 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <div className='img'>
                {' '}
                <img src={Bride} alt='' />{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Sky Hargrove <i className='ti-heart'></i>
                  </h6>{' '}
                  <span>The Bride</span>
                  <p>
                    Born and raised on the space coast of Florida, Sky loves going to the beach, playing with her ferrets, and watching launches. Fun fact: Sky was such a space nerd as a kid that she made a youtube channel on all things space. 1000 kudos for the first one to find it
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div
              className='item mb-30 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='img'>
                {' '}
                <img src={Groom} alt='' />{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Nitish Chennoju <i className='ti-heart'></i>
                  </h6>{' '}
                  <span>The Groom</span>
                  <p>
                    Born and raised in Silicon Valley, Nitish loves watching the california sunsets, flying drones, and backpacking around New Mexico. Fun fact: Nitish is also a huge space nerd and has a passion for pyrotechnics resulting in an "alleged" dumpster fire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-md-12 text-center animate-box'
            data-animate-effect='fadeInUp'
          >
            <h3 className='oliven-couple-title'>Are getting married!</h3>
            <h4 className='oliven-couple-subtitle'>
              December 29, 2024 — La Jolla, California
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bridegroom
