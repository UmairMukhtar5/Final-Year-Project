import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
} from "mdbreact";

const CarouselPage = () => {
  return (
    <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className='z-depth-1'
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId='1'>
          <MDBView>
            <img
              className='d-block w-100'
              src='assets/images/speaker.jpg'
              alt='First slide'
              overlay='blue'
            />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId='2'>
          <MDBView>
            <img
              className='d-block w-100'
              src='assets/images/many queries.jpg'
              alt='Second slide'
            />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId='3'>
          <MDBView>
            <img
              className='d-block w-100'
              src='assets/images/important.jpg'
              alt='Third slide'
            />
          </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default CarouselPage;
