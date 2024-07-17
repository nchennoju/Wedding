import React from 'react'
import Logo from '../assets/images/logo.png'


function RSVP () {
  return (
    <div
      id='rsvp'
    >
      <div className='container section-padding bg-img bg-fixed'>
        <div className='row justify-content-center'>
          <div id='rsvp_box' className='col-md-6 p-40'>
            {' '}
            <span className='oliven-title-meta text-center'>Will you attend?</span>
            <h2 className='oliven-title text-center'>R.S.V.P</h2>
            <br />
            <form method='post' className='row'>
              <div className='col-md-12 text-center'>
                <div className='form-group'>
                  <input type='submit' className='btn buttono' value='FORM' />{' '}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      


    </div>
  )
}





export default RSVP
