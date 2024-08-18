import React from 'react'
import Logo from '../assets/images/logo.png'


function RSVP () {
  return (
    <div
      id='registry'
    >
      <div className='registry container section-padding bg-img bg-fixed'>
        <div className='row justify-content-center'>
          <div id='rsvp_box' className='col-md-6 p-40'>
            {' '}
            <span className='oliven-title-meta text-center'>Wedding</span>
            <h2 className='oliven-title text-center'>Registry</h2>
            <p className='oliven-description text-center'>Your presence and prayers on our big day are all we ask for! However, should you wish to help us celebrate with a gift, please find our registry information below</p>
            <br />
            <form action='https://www.amazon.com/wedding/registry/2KEYYIDH3XIW7' rel="noreferrer" target="_blank" method='get' className='row'>
              <div className='col-md-12 text-center'>
                <div className='form-group'>
                  <input type='submit' className='btn buttono' value='AMAZON' />{''}
                </div>
              </div>
            </form>
            <br />
            <form action='https://www.talkable.com/x/J7TtaD' rel="noreferrer" target="_blank" method='get' className='row'>
              <div className='col-md-12 text-center'>
                <div className='form-group'>
                  <input type='submit' className='btn buttono' value='CRATE AND BARREL' />{''}
                </div>
              </div>
            </form>
            <br />
            <form action='https://www.honeyfund.com/site/hargrove-chennoju-12-29-2024' rel="noreferrer" target="_blank" method='get' className='row'>
              <div className='col-md-12 text-center'>
                <div className='form-group'>
                  <input type='submit' className='btn buttono' value='HONEYFUND' />{''}
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
