import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    }
    else {
      current.scrollLeft += 300;
    }
  }


  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#AAAAAA', marginTop: '2rem' }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam tempore ratione vitae quae quas quibusdam asperiores odio. Dicta non vitae illo quo provident enim deserunt modi optio suscipit, quaerat consequatur.
        </p>
        <button type='button' className='custom__button'>View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
            {[images.gallery01, images.gallery02, images.gallery03, images.gallery04.map((image, index) => (
              <img src={image} alt='gallery_image' />
              <BsInstagram className='gallery__image-icon' />
              </div>
            ))]}
        </div>
      </div>
    </div>
  )
};

export default Gallery;
