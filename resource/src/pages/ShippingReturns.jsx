import React from 'react';
import LangContext from '../context/LangContext';
import { useContext } from 'react';
import TopPage from '../Additional/TopPage';
import Footer from './Footer';
import { ModeContext } from '../context/ModeContext';
import Header from './Header';

const ShippingReturns = ({user}) => {
  const [Lang] = useContext(LangContext);
  const [mode] = useContext(ModeContext);
  return (
    <div className={mode}>
      <Header user={user}/>
      <div className='shippingreturns'>
      <div className='container'>
        <TopPage page={Lang === 'AZ' ? "Çatdırılma və Qaytarma" : "Shipping & Returns"} title={Lang === 'AZ' ? "Çatdırılma və Qaytarma" : "Shipping & Returns"}/>
        <div className='text'>
          <h6>{Lang === 'AZ' ? "Qaytarma siyasəti" : "Returns Policy"}</h6>
          <p>{Lang === 'AZ' ? "Siz çatdırıldıqdan sonra 30 gün ərzində tam geri qaytarılmaq üçün yeni, açılmamış əşyaların əksəriyyətini qaytara bilərsiniz. Əgər geri qaytarma bizim səhvimiz nəticəsində olarsa (yanlış və ya qüsurlu məhsul almısınız və s.) Biz həmçinin geri qaytarma xərclərini ödəyəcəyik. Paketinizi geri qaytaran göndəriciyə qaytardıqdan sonra dörd həftə ərzində pulunuzu geri alacağınızı gözləməlisiniz, lakin əksər hallarda siz pulu daha tez geri alacaqsınız. Bu vaxta göndərəndən geri qaytarmanızı qəbul etməyimiz üçün tranzit vaxtı (5-10 iş günü), geri qaytarmanızı aldıqdan sonra emal etməyimiz üçün vaxt (3-5 iş günü) və bankınızın geri qaytarmamızı emal etməsi vaxtı daxildir. sorğu (5-10 iş günü). Əgər bir əşyanı geri qaytarmaq lazımdırsa, sifariş nömrənizi və qaytarmaq istədiyiniz malın təfərrüatlarını bildirərək Bizimlə əlaqə saxlayın. Sifarişinizdəki əşyaları necə qaytarmaq barədə təlimatlarla tez cavab verəcəyik." : "You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay the return shipping costs if the return is a result of our error (you received an incorrect or defective item, etc.).You should expect to receive your refund within four weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly. This time period includes the transit time for us to receive your return from the shipper (5 to 10 business days), the time it takes us to process your return once we receive it (3 to 5 business days), and the time it takes your bank to process our refund request (5 to 10 business days).If you need to return an item, please Contact Us with your order number and details about the product you would like to return. We will respond quickly with instructions for how to return items from your order."}</p>
          <h6>{Lang === 'AZ' ? "Çatdırılma" : "Shipping"}</h6>
          <p>{Lang === 'AZ' ? "Dünyanın demək olar ki, istənilən ünvanına göndərə bilərik. Nəzərə alın ki, bəzi məhsullarda məhdudiyyətlər var və bəzi məhsullar beynəlxalq istiqamətlərə göndərilə bilməz. Sifariş verərkən, məhsullarınızın mövcudluğuna və seçdiyiniz göndərmə seçimlərinə əsasən sizin üçün çatdırılma və çatdırılma tarixlərini təxmin edəcəyik. Seçdiyiniz göndərmə provayderindən asılı olaraq, çatdırılma tarixi təxminləri göndərmə qiymətləri səhifəsində görünə bilər.Həmçinin nəzərə alın ki, satdığımız bir çox mal üçün göndərmə xərcləri çəkidən asılıdır. İstənilən belə məhsulun çəkisini ətraflı səhifəsində tapa bilərsiniz. İstifadə etdiyimiz göndərmə şirkətlərinin siyasətini əks etdirmək üçün bütün çəkilər növbəti bütün funta yuvarlaqlaşdırılacaq." : "We can ship to virtually any address in the world. Note that there are restrictions on some products, and some products cannot be shipped to international destinations.When you place an order, we will estimate shipping and delivery dates for you based on the availability of your items and the shipping options you choose. Depending on the shipping provider you choose, shipping date estimates may appear on the shipping quotes page.Please also note that the shipping rates for many items we sell are weight-based. The weight of any such item can be found on its detail page. To reflect the policies of the shipping companies we use, all weights will be rounded up to the next full pound."}</p>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default ShippingReturns