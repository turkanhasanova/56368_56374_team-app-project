import React from 'react';
import LangContext from '../context/LangContext';
import { useContext } from 'react';



const Features = () => {
    const [Lang] = useContext(LangContext);
    return (
        <div className='features my-2 d-flex'>
            <div class="container px-4 py-5" id="featured-3">
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-4">
      <div class="feature col">
        <div class="feature-icon d-flex align-items-center justify-content-center ">
        <i class="fa-solid fa-phone fa-xl"></i>
        </div>
        <div>
        <h6>{Lang === "AZ" ? "24x7 pulsuz dəstək" : "24 x 7 free support"}</h6>
        <p>{Lang === "AZ" ? "Rahatlıq, həmişə məmnunluq, zəmanət və etibarlılıq təmin edən bu məhsul üçün əngəlsiz qlobal göndərməni kəşf edin." : "Discover effortless global shipping for this product, ensuring convenience, satisfaction at all times, guaranteed and reliable."}</p>
        </div>
      </div>
      <div class="feature col">
        <div class="feature-icon d-flex align-items-center justify-content-center">
        <i class="fa-solid fa-truck fa-xl"></i>
        </div>
        <div>
        <h6>{Lang === "AZ" ? "Dünya üzrə Pulsuz Çatdırılma" : "Free Worldwide Shipping"}</h6>
        <p>{Lang === "AZ" ? "Günün hər saatı rahatlıq və məmnuniyyəti təmin edərək, zəmanətli bu başlıq üçün dünya üzrə əngəlsiz çatdırılma təcrübəsi əldə edin." : "Experience seamless shipping worldwide for this title, ensuring convenience and satisfaction around the clock, guaranteed."}</p>
        </div>
      </div>
      <div class="feature col">
        <div class="feature-icon d-flex align-items-center justify-content-center ">
        <i class="fa-solid fa-money-bill fa-xl"></i>
        </div>
        <div>
        <h6>{Lang === "AZ" ? "Pulun Geri Qaytarılmasına Zəmanət" : "Money Back Guarantee"}</h6>
        <p>{Lang === "AZ" ? "Məmnuniyyətinizi təmin edən və bütün dünyada 24/7 dinclik təmin edən pulun geri qaytarılması zəmanətimizlə inamı kəşf edin." : "Discover confidence with our money-back guarantee—ensuring your satisfaction and providing peace of mind globally, 24/7."}</p>
        </div>
      </div>
      <div class="feature col">
        <div class="feature-icon d-flex align-items-center justify-content-center ">
        <i class="fa-solid fa-gift fa-xl"></i>
        </div>
        <div>
        <h6>{Lang === "AZ" ? "Alış-veriş üçün 100$ qazanın" : "Win $100 To Shop"}</h6>
        <p>{Lang === "AZ" ? "Yalnız sizin üçün 100 dollarlıq alış-veriş çılğınlığı qazanmaq şansı üçün daxil olun. Şəxsi təcrübənizlə özünüzü sevindirin" : "Participate for the opportunity to win a $100 shopping spree, exclusively for you. Treat yourself to a personalized experience"}</p>
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}

export default Features