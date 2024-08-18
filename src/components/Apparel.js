import React from 'react'

import w_d from '../assets/images/guest_women.png'
import m_d from '../assets/images/guest_men.png'

function Seeyou () {
  return (
    <div
      id='apparel'
      className=' section-padding bg-img'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <span className='oliven-title-meta'>Gallery</span>
            <h2 className='oliven-title'>Guest Apparel</h2>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>


        <div className='col-md-6 gallery-item ceremony'>
            <a className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={w_d}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail-legible'>
                <h4 className='mb-0'>Ladies,</h4>
                  <p className='mb-0'>Think modern take on Regency-inspired mid to floor-length dresses or sarees in wintery, pastel hues. Opt for luminous silks, floaty chiffons and other soft textures to channel the timeless elegance of La Jolla. Have fun with romantic ruffles, touches of luxury, delicate fabrics, and intricate details. For colors lean towards pastels, jewel tones, and floral prints. As we are celebrating in December, we recommend bringing a shawl or coat with you. 

Please kindly avoid wearing dark tones such as black, brown, gray, etc. or white. 

The Cliffs at Cuvier Park are grassy with stairs so please be mindful when choosing footwear or look into heel stoppers for <i className='ti-location-pin'><a href="https://www.amazon.com/GoGoHeel-STOPPERS-Heel-Protectors-Sinking/dp/B01KGEOIKM/ref=sr_1_6?crid=7K1T9IBJIIXB&dib=eyJ2IjoiMSJ9.z4Mw9Szv5BM3TcZwWoNk8VlsQasXMI2atBECsNmzsVj9uCmpUklGaCKJrr5I8T2zDLDQoU1mFR46s9oAxXEaj0mtO289RIu0VlNXuz5FzMDOiuZfYwSWVYQ1o3PftJWBYSp2PvPNp4m_X5pYMgzkRmesHyhqPA4gAGIAeEo7iMB7UYVBrr3n7qyhDC9twugOk6Xtzs8iw4g9D35PKZujkhg84D8Q3jE0raa1cKQRUozB0qXWv7lZd_z7_D5FkR6MGMJi7Sh_3i6pfmNSfc1OycqbWy9bSj_M6o4bPp5sZPg.j5HiKG3eLceIa8crqFscNKmUNqIxdBgSnGFyXtxx-6E&dib_tag=se&keywords=heel+stoppers&qid=1723957470&sprefix=heel+stopper%2Caps%2C163&sr=8-6" rel="noreferrer" target="_blank">thin heels</a></i>.</p>
                </div>
              </div>
            </a>
          </div>

          <div className='col-md-6 gallery-item ceremony'>
            <a className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={m_d}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail-legible'>
                  <h4 className='mb-0'>Gents,</h4>
                  <p className='mb-0'>Come dressed in your most dapper suit or kurta. Go for light shades such as beige, mint, blue, or pink. Accessorize your style with pops of floral in your ties, socks, pocket squares and cuff links. Linen and cotton suits are a go-to for La Jolla. As we are celebrating in December we recommend you bring a coat. 

We recommend a lighter pallet however black or darker suits can be brightened with a colorful pastel pocket square, dress shirt, and tie.</p>
                </div>
              </div>
            </a>
          </div>




          </div>
      </div>
    </div>
  )
}

export default Seeyou
