import React from 'react'
import where1 from '../assets/images/sdzoo.jpg'
import where2 from '../assets/images/seaworld.jpg'
import where3 from '../assets/images/sunsetcliff.jpg'
import where4 from '../assets/images/oldtown.jpg'
import where5 from '../assets/images/lajolla.jpg'
import where6 from '../assets/images/littleitaly.jpg'
import where7 from '../assets/images/gaslamp.jpg'
import where8 from '../assets/images/balboa.jpg'
import where9 from '../assets/images/ussmid.jpg'
function Where () {
  return (
    <div id='todo' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <span className='oliven-title-meta'>Things to do in</span>
            <h2 className='oliven-title'>San Diego</h2>{' '}
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <a href='https://zoo.sandiegozoo.org/plan-your-visit'>
              <img src={where1} alt='' />
              </a>
            </div>
            <div className='content'>
              <h5><a href="https://zoo.sandiegozoo.org/plan-your-visit" rel="noreferrer" target="_blank">San Diego Zoo</a></h5>
              <p>
                <i className='ti-location-pin'></i>The San Diego Zoo pioneered cageless exhibits and offers travelers a fun and informative experience. Featuring over 4000 animals, the park gives you a peek into the wildlife of several ecosystems, from deserts to rainforests.
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <a href="https://seaworld.com/" rel="noreferrer" target="_blank">
              <img src={where2} alt='' />
              </a>
            </div>
            <div className='content'>
              <h5><a href="https://seaworld.com/" rel="noreferrer" target="_blank">Seaworld</a></h5>
              <p>
                <i className='ti-location-pin'></i>Only at SeaWorld can you get close to dolphins, penguins, sharks and more. See awe-inspiring shows with magnificent killer whales, playful dolphins, humorous sea lions plus an amazing pet show featuring adopted animals. Dive under the sea at Explorer's Reef and touch a crab, shark, or playful cleaner fish.
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <a href='https://oceanbeachsandiego.com/attractions/parks/sunset-cliffs-natural-park-and-point-loma-lighthouse'><img src={where3} alt='' /></a>
            </div>
            <div className='content'>
              <a href='https://oceanbeachsandiego.com/attractions/parks/sunset-cliffs-natural-park-and-point-loma-lighthouse'><h5>Sunset Cliffs</h5></a>
              <p>
                <i className='ti-direction-alt'></i>As the name suggests, this park’s rugged coastline features magnificent ocean views at sunset. Don’t miss the chance to explore the tide pools—be careful as some parts of the climb down can be uneven and steep. Sunset Cliffs Natural Park is also a great spot to see gray whales passing by on their migration.
              </p>
            </div>
          </div>

          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <a href='https://www.oldtownsandiego.org/'><img src={where4} alt='' /></a>
            </div>
            <div className='content'>
              <a href='https://www.oldtownsandiego.org/'><h5>Old Town</h5></a>
              <p>
                <i className='ti-direction-alt'></i>This old and historic town is not just the oldest neighborhood in San Diego but also the location of the first European settlement in California. Here, you can see over 200-year-old historic buildings, pan for gold at a museum, check out an art show, shop for handicrafts at the market, get spooked at the haunted Whaley House and take a hike through Presidio Park. You can explore all this and more on a living history tour, or even a food tour to learn about the town's Spanish roots through food.
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <a href='https://www.sandiego.gov/lifeguards/beaches/cove'><img src={where5} alt='' /></a>
            </div>
            <div className='content'>
              <a href='https://www.sandiego.gov/lifeguards/beaches/cove'><h5>La Jolla Cove</h5></a>
              <p>
                <i className='ti-direction-alt'></i>At this beach surrounded by sandstone cliffs on the San Diego coast, the water is calm enough for travelers to enjoy diving and snorkeling. Walk along the rocky shore to spot large colonies of sea lions lounging in their natural habitat and looking after their pups, and have a picnic while soaking up the views of the ocean from the cliffs at sunset. 
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <a href='https://www.littleitalysd.com/'><img src={where6} alt='' /></a>
            </div>
            <div className='content'>
              <a href='https://www.littleitalysd.com/'><h5>Little Italy</h5></a>
              <p>
                <i className='ti-direction-alt'></i>Check out Little Italy in San Diego for a taste of Italian cuisine and culture. The district boasts some of the most authentic Italian restaurants in town—take a food tour of the area to find the best spots and learn more about Little Italy's history. Be sure to check out the weekly Little Italy Mercato Farmers’ Market, the largest in the city.
              </p>
            </div>
          </div>



          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <a href='https://gaslamp.org/'><img src={where7} alt='' /></a>
            </div>
            <div className='content'>
              <a href='https://gaslamp.org/'><h5>Gas Lamp Quarter</h5></a>
              <p>
                <i className='ti-direction-alt'></i>Once an infamous gambling den, the historic Gaslamp Quarter has since transformed into a lively neighborhood. Here, you can stroll down 5th avenue, catch a film at the Balboa Theater, or visit the gallery of Chuck Jones, creator of many Looney Tunes and Warner Bros characters. Plan your visit on the weekend to catch the Gaslamp Artisan Market. There are also many themed events and plenty of night life.
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <a href='https://balboapark.org/'><img src={where8} alt='' /></a>
            </div>
            <div className='content'>
              <a href='https://balboapark.org/'><h5>Balboa Park</h5></a>
              <p>
                <i className='ti-direction-alt'></i>This 1,200-acre nature park comprises 17 museums, gardens, musical theaters, a sports complex, and the world-famous San Diego Zoo. The park’s Spanish-Moorish architecture and 19 distinct gardens (some require admission fees) attract both tourists and locals. Don’t miss the San Diego Air and Space Museum, the Spanish Village Art Center for unique handicrafts, and the Spreckels Organ Pavilion,
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <a href='https://www.midway.org/'><img src={where9} alt='' /></a>
            </div>
            <div className='content'>
              <a href='https://www.midway.org/'><h5>USS Midway</h5></a>
              <p>
                <i className='ti-direction-alt'></i>Located in downtown San Diego, the USS Midway (Museum) was America’s longest-serving aircraft carrier of the 20th century. Today, the interactive museum is an unforgettable adventure for the entire family as guests walk in the footsteps of the 225,000 young men who served on Midway
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Where
