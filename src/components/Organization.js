import React from 'react'

function Organization () {
  return (
    <div id='organization' className='organization section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <span className='oliven-title-meta'>Wedding</span>
            <h2 className='oliven-title'>Organization</h2>
          </div>
        </div>
        <div className='row bord-box bg-img' data-background='images/tile-bg.jpg'>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>01</h2>
            <h6 className='title'>1st Ceremony</h6>
            <p>
              Meet us here
            </p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>02</h2>
            <h6 className='title'>Lunch Time</h6>
            <p>
              Bring your appetite
            </p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>03</h2>
            <h6 className='title'>2nd Ceremony</h6>
            <p>
              We're a family now
            </p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>04</h2>
            <h6 className='title'>Party</h6>
            <p>
              Let's have some fun
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Organization
