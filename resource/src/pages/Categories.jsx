import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import LangContext from '../context/LangContext';
import { useContext } from 'react';
import Category from '../Additional/Category';


export default function Categories() {
  const [Lang, SetLang] = useContext(LangContext);
  return (
    <div className='categories'>
      <div className='container'>
        <div className='title d-flex justify-content-center'>
          <h2>{Lang === 'AZ' ? "Kateqoriyalarımız" : "Our Categories"}</h2>
        </div>
        <div className='category-slide'>
          <>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className='slide d-flex'>
                <Category title={Lang === 'AZ' ? "Hamsını Al" : "Shop All"} category1={Lang === 'AZ' ? "Meyvə şirələri" : "Juices"} category2={Lang === 'AZ' ? "Meyvələr" : "Fruits"} category3={Lang === 'AZ' ? "Tərəvəzlər" : "Vegetables"} image="https://cdn11.bigcommerce.com/s-a4jwov0yt3/images/stencil/original/a/5__18258.original.png" />
              </SwiperSlide>
              <SwiperSlide className='slide d-flex'>
                <Category title={Lang === 'AZ' ? "Tərəvəzlər" : "Vegetables"} category1={Lang === 'AZ' ? "Pomidor" : "Tomato"} category2={Lang === 'AZ' ? "Göbələk" : "Mushroom"} category3={Lang === 'AZ' ? "Kartof" : "Potato"} image="https://cdn11.bigcommerce.com/s-a4jwov0yt3/images/stencil/original/j/1__21212.original.png" />
              </SwiperSlide>
              <SwiperSlide className='slide d-flex'>
                <Category title={Lang === 'AZ' ? "Meyvələr" : "Fruits"} category1={Lang === 'AZ' ? "Alma" : "Apple"} category2={Lang === 'AZ' ? "Banan" : "Banana"} category3={Lang === 'AZ' ? "Ananas" : "Pineapple"} image="https://cdn11.bigcommerce.com/s-a4jwov0yt3/images/stencil/original/e/2__50732.original.png" />
              </SwiperSlide>
              <SwiperSlide className='slide d-flex'>
                <Category title={Lang === 'AZ' ? "Süd Məhsulları" : "Dairy"} category1={Lang === 'AZ' ? "Süd" : "Milk"} category2={Lang === 'AZ' ? "Pendir" : "Cheese"} category3={Lang === 'AZ' ? "Yağ" : "Butter"} image="https://cdn11.bigcommerce.com/s-a4jwov0yt3/images/stencil/original/b/3__95709.original.png" />
              </SwiperSlide>
              <SwiperSlide className='slide d-flex'>
                <Category title={Lang === 'AZ' ? "Meyvə Şirəsi" : "Juice"} category1={Lang === 'AZ' ? "Albalı Şirəsi" : "Cherry Juice"} category2={Lang === 'AZ' ? "Çiyələk Şirəsi" : "Strawberry Juice"} category3={Lang === 'AZ' ? "Alma Şirəsi" : "Apple Juice"} image="https://cdn11.bigcommerce.com/s-a4jwov0yt3/images/stencil/original/d/4__97908.original.png" />
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  )
}
