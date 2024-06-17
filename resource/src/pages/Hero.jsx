import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Features from './Features';
import Categories from './Categories';
import PopularProducts from './PopularProducts';
import Animation from './Animation';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import LangContext from '../context/LangContext';
import { useContext } from 'react';


const Hero = () => {
    const [Lang] = useContext(LangContext);
    return (
        <div className='hero'>
            <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide className='slide1'>
                        <div className='container'>
                        <div className='title-and-text'>
                            <div className='title'>
                                <h1>{Lang === 'AZ' ? "Sağlamlığınız Üçün Təzə Üzvi Qidalar" : "Organic Fresh Food For Your Health"}</h1>
                            </div>
                            <div className='text'>
                                <p>
                                    {Lang === 'AZ' ? "Üzvi təzə qida sağlam həyat tərzinin təməl daşıdır, əsas qida maddələrini təmin edir və zərərli kimyəvi maddələrə məruz qalmağı minimuma endirir." : "Organic fresh food is a cornerstone of a healthy lifestyle, providing essential nutrients and minimizing exposure to harmful chemicals."}
                                </p>
                            </div>
                            <div className='button-shop'>
                                <Link to="/shop"><button className='btn'>{Lang === "AZ" ? "Indi Al" : "Shop Now"}</button></Link>
                            </div>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='slide2'>
                        <div className='container'>
                            <div className='title-and-text'>
                                <div className='title'>
                                    <h1>{Lang === 'AZ' ? "Sağlamlığınız Üçün Təzə Üzvi Qidalar" : "Organic Fresh Food For Your Health"}</h1>
                                </div>
                                <div className='text'>
                                    <p>{Lang === 'AZ' ? "Üzvi təzə qida sağlam həyat tərzinin təməl daşıdır, əsas qida maddələrini təmin edir və zərərli kimyəvi maddələrə məruz qalmağı minimuma endirir." : "Organic fresh food is a cornerstone of a healthy lifestyle, providing essential nutrients and minimizing exposure to harmful chemicals."}
                                    </p>
                                </div>
                                <div className='button-shop'>
                                    <button className='btn'>{Lang === "AZ" ? "Indi Al" : "Shop Now"}</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
            <Features />
            <Categories />
            <PopularProducts />
            <Cards />
            <Animation />
        </div>
    )
}

export default Hero