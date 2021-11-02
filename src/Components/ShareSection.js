import React from 'react';
import saraAllen from '../images/saraAllen.jpg';
import tiaWhite from '../images/tiaWhite.jpg'

const ShareSection = () => {

  return (
    <div className="share-section">
      <p> something written here about how awesome Sara and Tia are! **for example**</p>
      <div className="story-images">
      <img alt="award" className="story-img" src={saraAllen} />
      <img alt="award" className="story-img" src={tiaWhite} />
      </div>
      <p>more to say, lots more to say about the story of what the award is and why they got it, etc.</p>

    </div>
  )
}
export default ShareSection;