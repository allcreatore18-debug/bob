import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const slides = [
  "/assets/bobslider1.webp",
  "/assets/slidrr2bob.webp",
  "/assets/bobslider.webp",
];

export default function Slider() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {slides.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="
              w-full
              h-[180px]
              sm:h-[250px]
              md:h-[350px]
              lg:h-[500px]
              object-contain
            "
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}