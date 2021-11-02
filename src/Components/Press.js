import React from "react";
import nyt from '../images/nyt.png';
import slctribune from '../images/slctribune.png';
import standex from '../images/standex.png';

const Press = () => {

  return (
    <div className="press">
      <h3>This is the press section where we'll have cards that will link / display articles or videos of publications we've been in.</h3>
     <div className="cards">
        <div className="press-card">
        <div className="gradient-box">
          <img alt="logo" className="pub-logo" src={nyt} />
          </div>
          <div className="press-text">
          <h5> Suspendisse interdum, lorem at commodo </h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="press-card">
          <div className="gradient-box">
            <img alt="logo" className="pub-logo" src={slctribune}/>
          </div>
        <div className="press-text">
          <h5> Suspendisse interdum, lorem at commodo </h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="press-card">
        <div className="gradient-box">
        <img alt="logo" className="pub-logo" src={standex} />
        </div>
        <div className="press-text">
          <h5> Suspendisse interdum, lorem at commodo </h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
     </div> 
  
    </div>
  )
}
export default Press;