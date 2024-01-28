// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import '../styles/style-swiper.css';

export default ({ themes, onClick, currentThemeIndex }) => {
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={'auto'}
      centeredSlides={false}
      className="swiper-container"
      slidesOffsetBefore={40}
      slidesOffsetAfter={40}
    >
      {themes.map((theme) => {
        const active = currentThemeIndex === theme.id;
        return (
          <SwiperSlide
            key={theme.id}
            onClick={() => {
              onClick(theme.id);
            }}
          >
            <div
              className={`theme-item swiper-item-${theme.id} ${
                active ? 'active-button' : ''
              }`}
            >
              <img
                className="theme-icon"
                src={active ? theme.iconActive : theme.icon}
                alt={''}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
