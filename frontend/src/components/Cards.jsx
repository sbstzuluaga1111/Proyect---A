import React from 'react';
import '../css/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from '@trendyol-js/react-carousel';


const Cards = () => {
    
    return(
        
        <Carousel rightArrow={false} leftArrow={false} show={3} slide={3} swiping={true}>
            
    <div class="card">
<div class="image"><span class="text">This is a chair.</span></div>
  <span class="title">Cool Chair</span>
  <span class="price">$100</span>
</div>
<div class="card">
<div class="image"><span class="text">This is a chair.</span></div>
  <span class="title">Cool Chair</span>
  <span class="price">$100</span>
</div>
<div class="card">
<div class="image"><span class="text">This is a chair.</span></div>
  <span class="title">Cool Chair</span>
  <span class="price">$100</span>
</div>
<div class="card">
<div class="image"><span class="text">This is a chair.</span></div>
  <span class="title">Cool Chair</span>
  <span class="price">$100</span>
</div>

</Carousel>     

    );
    
}

export default Cards;
