import React from 'react';
import TopPage from '../Additional/TopPage';
import Accordion from '../Additional/Accordion';
import LangContext from '../context/LangContext';
import { useContext } from 'react';
import { ModeContext } from '../context/ModeContext';
import Header from './Header';
import Footer from './Footer';

const Faq = ({user}) => {
  const [Lang] = useContext(LangContext);
  const [mode] = useContext(ModeContext);
  return (
    <div className={mode}>
      <Header user={user} />
          <div className='faq'>
      <div className='container'>
        <TopPage page="FAQ" title="FAQ" />
          <Accordion question={Lang === "AZ" ? "Məhsullarınız orqanikdir, yoxsa yerlidir?" : "Are your products organic or locally sourced?"} answer={Lang === "AZ" ? "Biz müştərilərimizə ən yüksək keyfiyyətli məhsullar təqdim etməyə sadiqik. Mümkün olduqda bəzi orqanik məhsullar təklif etsək də, əsas diqqətimiz yerli fermerləri dəstəkləmək və təzəliyi təmin etmək üçün yerli məhsul əldə etməkdir." : "We are committed to providing our customers with the highest quality produce. While we do offer some organic items when available, our primary focus is on sourcing locally to support local farmers and ensure freshness."} id="collapseOne" target="#collapseOne" aria="collapseOne"/>
          <Accordion question={Lang === "AZ" ? "Məhsullarınızı nə qədər tez-tez stoklayırsınız?" : "How often do you restock your produce?"} answer={Lang === "AZ" ? "Müştərilərimizə ən təzə variantları təqdim etmək üçün rəflərimizi hər gün yeniləməyə çalışırıq. Beləliklə, mağazamızı ziyarət edərkən hər zaman ehtiyac duyduğunuz məhsulları tapa bilərsiniz." : "We strive to restock our shelves daily to ensure the freshest options for our customers. This way, you can always find the produce you need when you visit our shop."} id="collapseTwo"  target="#collapseTwo" aria="collapseTwo"/>
          <Accordion question={Lang === "AZ" ? "Müştərilərimizə ən təzə variantları təqdim etmək üçün rəflərimizi hər gün yeniləməyə çalışırıq. Beləliklə, mağazamızı ziyarət edərkən hər zaman ehtiyac duyduğunuz məhsulları tapa bilərsiniz." : "Can I place an order for specific fruits and vegetables?"} answer={Lang === "AZ" ? "Mümkün olduqda xüsusi məhsullar və miqdarlar üçün xüsusi sifarişlər təklif edirik. Zəhmət olmasa əvvəlcədən bizimlə əlaqə saxlayın, istəyinizi yerinə yetirmək üçün əlimizdən gələni edəcəyik." : "We do offer special orders for specific items and quantities whenever possible. Please contact us in advance, and we will do our best to accommodate your request."} id="collapseThree"  target="#collapseThree" aria="collapseThree"/>
          <Accordion question={Lang === "AZ" ? "Hansı ödəniş üsullarını qəbul edirsiniz?" : "What payment methods do you accept?"} answer={Lang === "AZ" ? "Biz nağd pul, kredit/debet kartları və mobil ödəniş variantları daxil olmaqla müxtəlif ödəniş üsullarını qəbul edirik. Biz müştərilərimizə ödənişlə bağlı rahatlığı təmin etməyi hədəfləyirik." : "We accept various payment methods, including cash, credit/debit cards, and mobile payment options. We aim to provide convenience to our customers when it comes to payment."} id="collapseFour"  target="#collapseFour" aria="collapseFour"/>
          <Accordion question={Lang === "AZ" ? "Bayramlarda açıqsınız?" : "Are you open on holidays?"} answer={Lang === "AZ" ? "Tətil saatlarınızı və bayramlar üçün xüsusi tədbirləri dəqiqləşdirin”." : "Specify your holiday hours and any special arrangements for holidays."} id="collapseFive"  target="#collapseFive" aria="collapseFive"/>
          <Accordion question={Lang === "AZ" ? "Evə çatdırılma xidməti təklif edirsiniz?" : "Do you offer home delivery services?"} answer={Lang === "AZ" ? "Bəli, biz evə çatdırılma xidməti göstəririk. Çatdırılma variantları və ödənişlər haqqında ətraflı məlumat üçün bizimlə əlaqə saxlayın." : "Yes, we provide home delivery services. Contact us for more information on delivery options and charges."} id="collapseSix"  target="#collapseSix" aria="collapseSix"/>
          <Accordion question={Lang === "AZ" ? "Hədiyyə səbətləriniz və ya fərdi hədiyyə seçimləriniz varmı?”" : "Do you have gift baskets or customized gift options available?"} answer={Lang === "AZ" ? "Bəli, biz hədiyyə səbətləri təklif edirik və onları seçimlərinizə uyğunlaşdıra bilərik. Ətraflı məlumat üçün bizimlə əlaqə saxlayın." : "Yes, we offer gift baskets and can customize them to your preferences. Contact us for more details."} id="collapseSeven"  target="#collapseSeven" aria="collapseSeven"/>
          <Accordion question={Lang === "AZ" ? "Keyfiyyətindən razı qalmadığım məhsulları qaytara və ya dəyişdirə bilərəmmi?" : "Can I return or exchange items if I'm not satisfied with the quality?"} answer={Lang === "AZ" ? "Bəli, geri qaytarma və mübadilə siyasətimiz var. Zəhmət olmasa, narahatlığınızla bağlı [Geri Qaytarma Siyasətinin Müddəti Daxil edin] ərzində bizimlə əlaqə saxlayın." : "Yes, we have a return and exchange policy. Please contact us within [Insert Return Policy Timeframe] with your concerns."} id="collapseEight"  target="#collapseEight" aria="collapseEight"/>
          <Accordion question={Lang === "AZ" ? "Meyvə və tərəvəzləriniz təzə və mövsümündədir?" : "Are your fruits and vegetables fresh and in season?"} answer={Lang === "AZ" ? "Biz təzə, mövsümi məhsullar təklif etməyə çalışırıq. Seçimimiz ilin vaxtından asılı olaraq dəyişə bilər." : "We strive to provide fresh, seasonal produce. Our selection may vary depending on the time of year."} id="collapseNine"  target="#collapseNine" aria="collapseNine"/>
          <Accordion question={Lang === "AZ" ? "Daimi müştərilər üçün loyallıq proqramınız və ya endirimləriniz varmı?" : "Do you have a loyalty program or discounts for regular customers?"} answer={Lang === "AZ" ? "Bəli, loyallıq proqramımız var və daimi müştərilərimiz üçün də endirimlər təklif edirik. Təfərrüatlar üçün əməkdaşlarımızdan soruşun." : "Yes, we have a loyalty program, and we also offer discounts for regular customers. Ask our staff for details."} id="collapseTen"  target="#collapseTen" aria="collapseTen"/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Faq
