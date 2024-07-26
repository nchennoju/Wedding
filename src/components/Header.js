import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import img1 from '../assets/images/bg-1.jpg'
import img2 from '../assets/images/bg-2.jpg'
import img3 from '../assets/images/bg-3.jpg'
import img4 from '../assets/images/bg-4.jpg'
import img5 from '../assets/images/bg-5.jpg'

function Header () {


  return (
    <header>

    <Slide>
      

    <div
      id='home'
      className='header valign bg-img parallaxie story-img story-img-2'
      style={{ 'background-image': `url(${img1})` }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center caption'>
            <h1 className='animate-box' data-animate-effect='fadeInUp'>
              Sky & Nitish
            </h1>
            <h5 className='animate-box' data-animate-effect='fadeInUp'>
              29 December, 2024 – La Jolla
            </h5>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='arrow bounce text-center'>
              <a href='#couple'>
                {' '}
                <i className='ti-heart'></i>{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id='home'
      className='header valign bg-img parallaxie'
      style={{ 'backgroundImage': `url(${img2})` }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center caption'>
            <h1 className='animate-box' data-animate-effect='fadeInUp'>
              Sky & Nitish
            </h1>
            <h5 className='animate-box' data-animate-effect='fadeInUp'>
              29 December, 2024 – La Jolla
            </h5>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='arrow bounce text-center'>
              <a href='#couple'>
                {' '}
                <i className='ti-heart'></i>{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id='home'
      className='header valign bg-img parallaxie'
      style={{ 'backgroundImage': `url(${img3})` }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center caption'>
            <h1 className='animate-box' data-animate-effect='fadeInUp'>
              Sky & Nitish
            </h1>
            <h5 className='animate-box' data-animate-effect='fadeInUp'>
              29 December, 2024 – La Jolla
            </h5>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='arrow bounce text-center'>
              <a href='#couple'>
                {' '}
                <i className='ti-heart'></i>{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id='home'
      className='header valign bg-img parallaxie'
      style={{ 'backgroundImage': `url(${img4})` }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center caption'>
            <h1 className='animate-box' data-animate-effect='fadeInUp'>
              Sky & Nitish
            </h1>
            <h5 className='animate-box' data-animate-effect='fadeInUp'>
              29 December, 2024 – La Jolla
            </h5>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='arrow bounce text-center'>
              <a href='#couple'>
                {' '}
                <i className='ti-heart'></i>{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id='home'
      className='header valign bg-img parallaxie'
      style={{ 'backgroundImage': `url(${img5})` }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center caption'>
            <h1 className='animate-box' data-animate-effect='fadeInUp'>
              Sky & Nitish
            </h1>
            <h5 className='animate-box' data-animate-effect='fadeInUp'>
              29 December, 2024 – La Jolla
            </h5>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='arrow bounce text-center'>
              <a href='#couple'>
                {' '}
                <i className='ti-heart'></i>{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    </Slide>


    </header>
    
  )
}

export default Header
