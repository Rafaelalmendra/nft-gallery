/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

import { images } from './images';
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
          <SwiperSlide key={image.id}>
            <img src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};