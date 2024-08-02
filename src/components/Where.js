import React from 'react'
import where1 from '../assets/images/where-1.jpg'
import where2 from '../assets/images/where-2.jpg'
import where3 from '../assets/images/where-3.jpg'
function Where () {
  return (
    <div id='whenwhere' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <span className='oliven-title-meta'>Questions</span>
            <h2 className='oliven-title'>When & Where</h2>{' '}
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where1} alt='' />
            </div>
            <div className='content'>
              <h5 className='link'><a href="https://www.google.com/maps/place/The+Wedding+Bowl/@32.8441598,-117.2792049,17z/data=!3m1!4b1!4m6!3m5!1s0x80dc03435d0ba36d:0x51bd66d95ca99684!8m2!3d32.8441598!4d-117.2792049!16s%2Fg%2F11n7n8jjc_?entry=ttu" rel="noreferrer" target="_blank">1st Ceremony</a></h5>
              <p>
                <i className='ti-location-pin'>590 Coast S Blvd, La Jolla, CA 92037</i>
              </p>
              <p>
                <i className='ti-time'></i> <span>11:30am – 12:00pm</span>
              </p>
              <h5>2nd Ceremony</h5>
              <p>
                <i className='ti-location-pin'>7791 Draper Ave, La Jolla, CA 92037</i>
              </p>
              <p>
                <i className='ti-time'></i> <span>2:00pm – 2:30pm</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <a href="https://www.empress-hotel.com/" rel="noreferrer" target="_blank">
              <img src={where2} alt='' />
              </a>
            </div>
            <div className='content'>
              <h5><a href="https://www.empress-hotel.com/" rel="noreferrer" target="_blank">Accomodations</a></h5>
              <p>
                <i className='ti-location-pin'>Empress Hotel</i>
              </p>
              <p>
                https://www.empress-hotel.com/
              </p>
              <p>
                <i className='ti-time'></i> <span>14:00pm</span>
              </p>
              <p>Discount code: WEDDING</p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <a href='https://www.empress-hotel.com/services.php'>
              <img src={where3} alt='' />
              </a>
            </div>
            <div className='content'>
              <h5>Parking</h5>
              <p>
                <i className='ti-direction-alt'>Empress Hotel Parking</i>
              </p>
              <p>
              https://www.empress-hotel.com/services.php
              </p>
              <p>
                Rates: $15/day
              </p>
              <p>
                <i className='ti-direction'></i> ($28/day overnight)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Where
