/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

import { images, imagesMobile } from './images';
import { Container, } from './style';
SwiperCore.use([Autoplay, Pagination]);

export default function Slide() {
  return (
    <Container>
      <Swiper
        spaceBetween={0}
        pagination={{ clickable: true }}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        tag="section"
        wrapperTag="ul"
      >
        {images.map(image => (
          <SwiperSlide key={image.id} className="desktop">
            <img src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}

        {imagesMobile.map(image => (
          <SwiperSlide key={image.id} className="mobile">
            <img src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};