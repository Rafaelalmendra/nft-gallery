import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Autoplay, Pagination]);

// styles
import * as S from "./styles";

// images
import { slideImages, slideImagesMobile } from "mocks";

const Slide = () => (
  <S.Container>
    <Swiper
      spaceBetween={0}
      pagination={{ clickable: true }}
      slidesPerView={1}
      autoplay={{ delay: 4000 }}
      tag="section"
      wrapperTag="ul"
    >
      {slideImages?.map((image) => (
        <SwiperSlide key={image?.id} className="desktop">
          <img src={image?.src} alt={image?.alt} />
        </SwiperSlide>
      ))}

      {slideImagesMobile?.map((image) => (
        <SwiperSlide key={image?.id} className="mobile">
          <img src={image?.src} alt={image?.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  </S.Container>
);

export { Slide };
