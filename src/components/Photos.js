import React from 'react'
import gallery1 from '../assets/images/-Wedding-19.jpg'


function Photos () {

  return (
    <div id='photos' className='section-padding'>

      <div className='container section-padding bg-img bg-fixed'>
        <div className='row justify-content-center'>
          <div id='rsvp_box' className='col-md-6 p-40'>
            {' '}
            <span className='oliven-title-meta text-center'>All Photos</span>
            <h2 className='oliven-title text-center'>Mehindi & Wedding</h2>
            <br />
            <form action='https://photos.app.goo.gl/Y7Ce6ANcrEX1SSYE7' method='get' className='row'>
              <div className='col-md-12 text-center'>
                <div className='form-group'>
                  <input type='submit' className='btn buttono' value='VIEW' />{''}
                </div>
              </div>
            </form>
            <span className='oliven-title-mini text-center'>Taken and edited by Sparrow Hargrove & leaf photography</span>
          </div>
        </div>
      </div>


      
      
<a href="https://photos.app.goo.gl/Y7Ce6ANcrEX1SSYE7" target="_blank" rel="noopener noreferrer">
  <img src={gallery1} alt="View Album" />
</a>
      



      
      
    </div>
  )
}

export default Photos
