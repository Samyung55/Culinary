import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt='awards' />
    <div className="app__laurels_awards-card_content">
      
    </div>
  </div>
);

export default Laurels;
