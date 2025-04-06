import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const HomeSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="homeslider py-4">
      <div className="container relative">
        {/* Custom Nav Buttons */}
        <button ref={prevRef} className="custom-swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white w-8 h-8 rounded-full shadow flex items-center justify-center">
          <span className="text-black text-xs">&lt;</span>
        </button>
        <button ref={nextRef} className="custom-swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white w-8 h-8 rounded-full shadow flex items-center justify-center">
          <span className="text-black text-xs">&gt;</span>
        </button>

        <Swiper
          spaceBetween={10}
          modules={[Navigation,Autoplay]}
          className="sliderhome"
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          autoplay={{
            delay:3000,
            disableOnInteraction:false

          }}
        >
          {/* Slides */}
          {[1, 2, 3, 4].map((num) => (
            <SwiperSlide key={num}>
              <div className="item rounded-[20px] overflow-hidden">
                <img src={`./images/${num}.jpg`} alt={`Slide ${num}`} className="w-full" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
