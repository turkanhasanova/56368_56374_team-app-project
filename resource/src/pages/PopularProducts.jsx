import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useSelector } from 'react-redux';
import LangContext from '../context/LangContext';
import { useContext } from 'react';
import Card from '../Additional/Card';

const PopularProducts = () => {
  const [Lang] = useContext(LangContext);
  const products = useSelector(p=>p);
  return (
    <div className="popularproducts mt-4  ">
      <div className="container">
        <div className='title d-flex justify-content-center'>
          <h2>{Lang === 'AZ' ? "Populyar Məhsullar" : "Popular Products"}</h2>
        </div>
        <div className="category-slide d-flex justify-content-center">
          <>
          <Swiper 
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper "
        >
          {products.slice(4,10).map((item) => (
            <SwiperSlide >
              <Card
              key={item.id}
              id={item.id}
              title={Lang === "AZ" ? item.title.AZ : item.title.EN}
              price={item.price}
              image={item.image}
              alldata={item}
              alldata2={item}
              />
            </SwiperSlide>
          ))}
        </Swiper>
          </>
        </div>
      </div>
    </div>
  )
}

export default PopularProducts