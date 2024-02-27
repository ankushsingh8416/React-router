import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Add the autoplay prop here
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="h-screen"
    >
      <SwiperSlide>
        <img
          className="w-full h-screen object-cover	"
          src="/public/banner2.jpg"
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          className="w-full h-screen object-cover	"
          src="/public/banner.avif"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
