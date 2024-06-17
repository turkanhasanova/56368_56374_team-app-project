import React from 'react';
import TopPage from '../Additional/TopPage';
import LangContext from '../context/LangContext';
import { useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ModeContext } from '../context/ModeContext';

const Privacy = ({user}) => {
  const [Lang] = useContext(LangContext);
  const [mode] = useContext(ModeContext);
  return (
    <div className={mode}>
      <Header user={user}/>
      <div className='privacy'>
    <div className='container'>
      <TopPage page={Lang === 'AZ' ? "Gizlilik Siyasəti" : "Privacy Policy"} title={Lang === 'AZ' ? "Gizlilik Siyasəti" : "Privacy Policy"}/>
      <div className='text'>
        <ol>
          <li>{Lang === 'AZ' ? "Şəxsi məlumat: Veb saytımıza daxil olduğunuz zaman, könüllü olaraq formalar və ya digər vasitələrlə təqdim etdiyiniz zaman adınız, e-poçt ünvanınız, telefon nömrəniz və poçt ünvanınız kimi şəxsi məlumatları toplaya bilərik." : "Personal Information: When you visit our Website, we may collect personal information such as your name, email address, phone number, and postal address when you voluntarily provide it through forms or other means."}</li>
          <li>{Lang === 'AZ' ? "İstifadə Məlumatı: IP ünvanınız, brauzerinizin növü və cihaz məlumatınız daxil olmaqla Veb saytımızla qarşılıqlı əlaqəniz haqqında məlumatları avtomatik toplayırıq. Bu, xidmətlərimizi təkmilləşdirməyə və istifadəçi təcrübənizi fərdiləşdirməyə kömək edir." : "Usage Information: We automatically collect information about your interaction with our Website, including your IP address, browser type, and device information. This helps us improve our services and customize your user experience."}</li>
          <li>{Lang === 'AZ' ? "Kukilər: Baxış təcrübənizi yaxşılaşdırmaq və seçimləriniz haqqında məlumat toplamaq üçün kukilərdən və oxşar izləmə texnologiyalarından istifadə edə bilərik. Kukiləri idarə etmək və ya söndürmək üçün brauzerinizin parametrlərini dəyişə bilərsiniz." : "Cookies: We may use cookies and similar tracking technologies to enhance your browsing experience and collect data about your preferences. You can adjust your browser settings to manage or disable cookies."}</li>
        </ol>
        <h6>{Lang === 'AZ' ? "Məlumatlarınızdan Necə İstifadə edirik" : "How We Use Your Information"}</h6>
        <p>{Lang === 'AZ' ? "Topladığımız məlumatı aşağıdakı məqsədlər üçün istifadə edirik:" : "We use the information we collect for the following purposes:"}</p>
        <ol>
          <li>{Lang === 'AZ' ? "Xidmətlərin göstərilməsi: Veb saytımızdan tələb etdiyiniz məhsul və xidmətləri çatdırmaq." : "Provide Services: To deliver the products and services you request from our Website."}</li>
          <li>{Lang === 'AZ' ? "Ünsiyyət: Sizinlə ünsiyyət qurmaq, suallarınıza cavab vermək və sizə yeniliklər, xəbər bülletenləri və tanıtım materialları göndərmək üçün." : "Communication: To communicate with you, respond to your inquiries, and send you updates, newsletters, and promotional materials."}</li>
          <li>{Lang === 'AZ' ? "Analitika: Veb saytımızın performansını, funksionallığını və məzmununu təhlil etmək və təkmilləşdirmək." : "Analytics: To analyze and improve the performance, functionality, and content of our Website."}</li>
          <li>{Lang === 'AZ' ? "Təhlükəsizlik: Veb saytımızın və istifadəçi məlumatlarımızın bütövlüyünü və təhlükəsizliyini qorumaq üçün." : "Security: To protect the integrity and security of our Website and user data."}</li>
        </ol>
        <h6>{Lang === 'AZ' ? "Məlumat mübadiləsi" : "Information Sharing"}</h6>
        <p>{Lang === 'AZ' ? "Şəxsi məlumatlarınızı aşağıdakılarla paylaşa bilərik:" : "We may share your personal information with:"}</p>
        <ol>
          <li>{Lang === 'AZ' ? "Xidmət Təchizatçıları: Biz məlumatlarınızı veb saytımızı idarə etmək və saxlamaqda bizə kömək edən nüfuzlu üçüncü tərəf xidmət təminatçıları ilə paylaşa bilərik." : "Service Providers: We may share your information with trusted third-party service providers who help us operate and maintain our Website."}</li>
          <li>{Lang === 'AZ' ? "Hüquqi Sorğular: Qanunla tələb olunduqda və ya hüquqlarımızı və ya başqalarının təhlükəsizliyini qorumaq üçün məlumatlarınızı açıqlaya bilərik." : "Legal Requirements: We may disclose your information when required by law or to protect our rights and the safety of others."}</li>
          <li>{Lang === 'AZ' ? "Biznes köçürmələri: Aktivlərimizin hamısının və ya bir hissəsinin birləşməsi, alınması və ya satılması halında məlumatınız əməliyyatın bir hissəsi kimi ötürülə bilər." : "Business Transfers: In the event of a merger, acquisition, or sale of all or part of our assets, your information may be transferred as part of the transaction."}</li>
        </ol>
        <h6>{Lang === 'AZ' ? "Seçimləriniz" : "Your Choices"}</h6>
        <p>{Lang === 'AZ' ? "Aşağıdakı hüquqlarınız var:" : "You have the right to:"}</p>
        <ol>
          <li>{Lang === 'AZ' ? "Giriş və Yeniləmə: Bizimlə əlaqə saxlayaraq şəxsi məlumatlarınıza daxil ola, düzəldə və ya yeniləyə bilərsiniz." : "Access and Update: Access, correct, or update your personal information by contacting us."}</li>
          <li>{Lang === 'AZ' ? "Abunəlikdən çıxın: Siz e-poçtdakı abunəlikdən çıxmaq təlimatlarına əməl etməklə tanıtım e-poçtları almaqdan imtina edə bilərsiniz." : "Opt-Out: You can opt out of receiving promotional emails by following the unsubscribe instructions in the email."}</li>
          <li>{Lang === 'AZ' ? "Kukilər: Siz brauzerinizin parametrlərində kukiləri idarə edə və ya söndürə bilərsiniz." : "Cookies: You can manage or disable cookies in your browser settings"}.</li>
        </ol>
        <h6>{Lang === 'AZ' ? "Təhlükəsizlik" : "Security"}</h6>
        <p>{Lang === 'AZ' ? "Şəxsi məlumatlarınızı icazəsiz daxil olmaqdan və açıqlamadan qorumaq üçün ağlabatan tədbirlər görürük. Bununla belə, İnternet üzərindən heç bir ötürmə üsulu tamamilə təhlükəsiz deyil və biz mütləq təhlükəsizliyə zəmanət verə bilmərik." : "We take reasonable measures to protect your personal information from unauthorized access and disclosure. However, no method of transmission over the internet is entirely secure, and we cannot guarantee absolute security."}</p>
        <h6>{Lang === 'AZ' ? "Bu Məxfilik Siyasətinə Dəyişikliklər" : "Changes to This Privacy Policy"}</h6>
        <p>{Lang === 'AZ' ? "Təcrübələrimizdəki dəyişiklikləri əks etdirmək və ya digər əməliyyat, hüquqi və ya tənzimləyici səbəblərə görə biz bu Məxfilik Siyasətini vaxtaşırı yeniləyə bilərik. Yenilənmiş Məxfilik Siyasəti veb-saytımızda dərc olunacaq və son düzəlişin tarixi göstəriləcəkdir." : "We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated Privacy Policy will be posted on our Website, and the date of the latest revision will be indicated."}</p>
      </div>
    </div>
  </div>
  <Footer />
    </div>
  )
}

export default Privacy