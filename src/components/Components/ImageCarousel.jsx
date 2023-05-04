import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const ImageCarousel = () => {
   const AutoplaySlider = withAutoplay(AwesomeSlider);
   return (
      <AutoplaySlider
         play={true}
         cancelOnInteraction={false}
         interval={500}>
         <div data-src={`https://kitchenofdebjani.com/wp-content/uploads/2015/10/20-bong-food.jpg`} />
         <div data-src={`https://i0.wp.com/ishitaunblogged.com/wp-content/uploads/2017/09/img_20160721_141925.jpg?resize=674%2C505&ssl=1`} />
         <div data-src={`https://www.shutterstock.com/image-photo/festive-food-indian-festival-diwali-260nw-716891827.jpg`} />
      </AutoplaySlider>
   );
};

export default ImageCarousel;