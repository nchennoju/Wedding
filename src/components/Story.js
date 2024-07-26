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
            <p>
            We first crossed paths in college, drawn together by our shared passion for our school's rocket project. What began as a professional collaboration soon blossomed into a deep friendship, evolving delicately into something far beyond either of us expected.</p>
            <p>Our journey took a turn with an accidental date at Mendocino Farms, where hours melted away in conversation about our dreams and the thoughtful gifts we had exchanged over the summer. Beach dates and project meetings followed, intertwining our lives as we leaned on each other's strengths to navigate the whirlwind of school, the rocket project, and the burgeoning bond between us.</p>
            <p>In early 2023, out in the California desert, we savored our first success—a triumphant test firing of our rocket engine. It was a moment of shared joy, a milestone that marked not only our project's progress but also our blossoming love.</p>
            <p>This was shortly followed With the launch of our school's maiden liquid rocket, our relationship emerged proudly from the shadows, no longer a secret among our peers. At the rocket pad, amidst cheers and applause, we stole a moment to kiss, celebrating not just our achievement but the strength of our commitment to each other.</p>
            <p>As the school year drew to a close, we faced the daunting task of securing jobs. We both found work in the rocket industry, a testament to our shared dedication and ambition. Yet, the challenge of being apart persisted, testing our resolve with each passing day. But through it all, we held fast to the belief that this separation was temporary, a mere chapter in our story.</p>
            <p>And then, against all odds, fate intervened. Opportunities aligned, and we found ourselves reunited, this time not just for a fleeting moment but for a lifetime...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
