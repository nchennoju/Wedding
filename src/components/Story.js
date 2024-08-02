import React from 'react'
import storyImage from '../assets/images/a.jpg'



function Story () {
  return (
    <div id='story' className='story section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 mb-30'>



            
          <div className='story-img animate-box'>
              <div className='img'>
                {' '}
                <img src={storyImage} className='img-fluid' alt='' />{' '}
              </div>
              <div
                className='story-img-2 story-wedding'
              ></div>
            </div>

          



          </div>
          <div className='col-md-7 animate-box'>
            <h4 className='oliven-story-subtitle'>Our love.</h4>
            <h3 className='oliven-story-title'>Our Story</h3>

            <p>Our story started in 2021 during a Zoom orientation for the UC Irvine Rocket Project. When we first met, we were colleagues pursuing UCI’s first collegiate rocket launch but after many late project meetings and boba runs our relationship grew into a strong friendship.</p>

            <p>Our first ‘date’ was supposed to be a quick hangout at the University Town Center that lasted 4 hours of us discussing our future goals and aspirations. Beach dates and project meetings followed as we leaned on each other's strengths to navigate the challenges of school, the rocket project, and growing our relationship.</p>

            <p>Fast-forward to our senior year, we were excited for what the future would bring post launch and graduation around the corner. Amidst job applications and finals, we decided to continue our journey together and on June 16th, 2023, we walked down the aisle together for the first time and graduated with our Mechanical (Sky) and Computer Science (Nitish) engineering degrees.</p>

            <p>Post graduation we faced a new challenge, continuing our relationship and beginning our careers with a time difference of 3 hours and just over 2.5k miles. After many late-night FaceTime calls and redeye flights, we said yes to forever on a romantic gondola ride in Newport Beach, CA on December 29th, 2023. The time of distance came to an end after one year with Nitish relocating to the Space Coast of FL to begin our next chapter together.</p>

            <p>Our wedding day is not just about celebrating our love; it’s about joining our families together with the support of our loved ones. We can’t wait to celebrate the beginning of our next adventure with you!</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
