import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Autoplay, Scrollbar } from 'swiper/modules';

const Animation = () => {
  return (
    <div className="animation my-5 mb-5">
         <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        scrollbar={{
            hide: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[FreeMode, Autoplay, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="https://freshgo-vegetable.mybigcommerce.com/product_images/uploaded_images/brand4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://freshgo-vegetable.mybigcommerce.com/product_images/uploaded_images/brand9.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://freshgo-vegetable.mybigcommerce.com/product_images/uploaded_images/brand10.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://freshgo-vegetable.mybigcommerce.com/product_images/uploaded_images/brand11.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://freshgo-vegetable.mybigcommerce.com/product_images/uploaded_images/brand1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://freshgo-vegetable.mybigcommerce.com/product_images/uploaded_images/brand3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://freshgo-vegetable.mybigcommerce.com/product_images/uploaded_images/brand2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://freshgo-vegetable.mybigcommerce.com/product_images/uploaded_images/brand5.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://freshgo-vegetable.mybigcommerce.com/product_images/uploaded_images/brand6.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://freshgo-vegetable.mybigcommerce.com/product_images/uploaded_images/brand7.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://freshgo-vegetable.mybigcommerce.com/product_images/uploaded_images/brand8.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
    </div>
  )
}

export default Animation