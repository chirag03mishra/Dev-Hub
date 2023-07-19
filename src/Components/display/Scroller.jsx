import React from 'react'
import Slider from 'infinite-react-carousel';
import angular from "../../image/angular.png"
import css from "../../image/css.png";
import react from "../../image/react.png";
import java from "../../image/java.png"
import js from "../../image/js.png"
import py from "../../image/python.png"
import php from "../../image/php.png"
import sq from "../../image/sql.png" 
import nod from "../../image/node.png"
import "./scroller.scss"
const Scroller = () => {
  return (
    <div className='slider'>
    <h2>Trending Topics</h2>
    <Slider swipe={false} autoplaySpeed={2000} pauseOnHover={false} centerMode={true} autoplay={true} arrows={false} slidesPerRow={3}>
    <div>
      <img src={angular} alt="" />
    </div>
    <div>
    <img src={css} alt="" />
    </div>
    <div>
    <img src={react} alt="" />
    </div>
    <div>
    <img src={py} alt="" />
    </div>
    <div>
    <img src={java} alt="" />
    </div>
    <div>
    <img src={js} alt="" />
    </div>
    <div>
    <img src={sq} alt="" />
    </div>
    <div>
    <img src={nod} alt="" />
    </div>
    <div>
    <img src={php} alt="" />
    </div>
  </Slider>
    </div>
    
  )
}

export default Scroller
