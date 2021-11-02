import React from 'react';
import Flyer from './Flyer';
import Header from './Header';
import MediaKit from './MediaKit';
import Press from './Press';
import ShareSection from './ShareSection';

const News = () => {
  return (
    <div>
      <Header />
      <Flyer />
      <ShareSection />
      <Press />
      <MediaKit />
    </div>
  )
}
export default News;