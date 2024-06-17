import React from 'react';
import TopPage from '../Additional/TopPage';
import LangContext from '../context/LangContext';
import { useContext } from 'react';
import { ModeContext } from '../context/ModeContext';
import Header from './Header';
import Footer from './Footer';


const About = ({user}) => {
    const [Lang] = useContext(LangContext);
    const [mode] = useContext(ModeContext);
    return (
        <>
        <div className={mode}>
        <Header user={user}/>
            <div className='about'>
            <div className='container'>
                <TopPage page={Lang === 'AZ' ? "Haqqımızda" : "About Us"} title={Lang === 'AZ' ? "Haqqımızda" : "About Us"} />
                <div className='intro'>
                    <p className='text-center'>{Lang === 'AZ' ? "Təbiətin təklif etdiyi ən təzə, ən sağlam və dadlı meyvə və tərəvəzlərə onlayn qapınız olan Freshgo-ya xoş gəlmisiniz. 'Haqqımızda' bölməmiz sadəcə olaraq kim olduğumuzun anlıq görüntüsü deyil; Bu, biznesimizin əsasını təşkil edən tarlalara, bağlara və təsərrüfatlara səyahətdir. Burada sizi məhsullarımızı başqalarından üstün edən kökləri və dəyərləri kəşf etməyə dəvət edirik." : "Welcome to Freshgo – your online gateway to the freshest, healthiest, and most delicious fruits and vegetables nature has to offer. Our 'About Us' section isn't just a snapshot of who we are; it's a journey through the fields, orchards, and farms that cultivate the foundation of our business. Here, we invite you to discover the roots and values that make our produce a cut above the rest."}</p>
                </div>
                <div className='text'>
                    <h4>{Lang === 'AZ' ? "Kənd təsərrüfatı irsimiz" : "Our Farming Heritage"}</h4>
                    <p>{Lang === 'AZ' ? "Bizim hekayəmiz kənd təsərrüfatına köklü bir ehtirasla başlayır. “Freshgo”nun arxasında olan uzaqgörən Türkan Həsənova fermerlərin uzun cərgəsindən gəlir. Torpağın becərilməsi və məhsul yetişdirilməsi sahəsində nəsillərin təcrübəsi ilə keyfiyyət və təravətə sadiqliyimiz erkən yaşlarda aşılanır. 2020-ci ildə Türkan Həsənova bu irsi irəli aparmaq və təsərrüfatla süfrə arasındakı boşluğu doldurmaq qərarına gəlib. Beləliklə, Freshgo dünyaya gəldi. Əvvəldən biz münbit tarlalarımızın nemətini sizinlə bölüşməyə həsr olunmuşuq." : "Our story begins with a deep-seated passion for agriculture. Turkan Hasanova, the visionary behind Freshgo, comes from a long line of farmers. With generations of expertise in cultivating the land and nurturing crops, our commitment to quality and freshness was instilled early on.In 2020, Turkan Hasanova decided to take this legacy forward and bridge the gap between the farm and the table. Thus, Freshgo was born. From the outset, we have been dedicated to sharing the bounty of our fertile fields with you"}.</p>
                    <h4>{Lang === 'AZ' ? "Keyfiyyətə sadiqlik" : "A Commitment to Quality"}</h4>
                    <p>{Lang === 'AZ' ? "Keyfiyyət bizim üçün sadəcə bir söz deyil; Bu, həyat tərzidir. Freshgo-da biz inanırıq ki, sağlam həyatın təməli yediklərinizlə başlayır. Buna görə də biz sizə ən yaxşı meyvə və tərəvəzləri təqdim etməyi öz missiyamız hesab etdik.Məhsullarımız maksimum ləzzət və qidalanma təmin etmək üçün yetkinlik zirvəsində diqqətlə seçilir. Biz davamlı və məsuliyyətli əkinçilik təcrübələrinə olan həvəsimizi bölüşən yerli fermerlərlə birbaşa işləyirik. Bu tərəfdaşlıq bizdən aldığınız hər bir məhsulun təkcə sizin üçün deyil, həm də ətraf mühit üçün faydalı olmasını təmin edir." : "Quality is not just a buzzword for us; it's a way of life. At Freshgo, we believe that the foundation of a healthy life starts with what you eat. This is why we have made it our mission to provide you with the finest fruits and vegetables available.Our produce is carefully handpicked at the peak of ripeness, ensuring maximum flavor and nutrition. We work directly with local farmers who share our passion for sustainable and responsible farming practices. This partnership ensures that every item you purchase from us is not only good for you but also for the environment."}</p>
                    <h4>{Lang === 'AZ' ? "Davamlılıq və Məsuliyyət" : "Sustainability and Responsibility"}</h4>
                    <p>{Lang === 'AZ' ? "Ətraf mühit şüurunun artdığı bir dövrdə biz planet qarşısında məsuliyyətimizə ciddi yanaşırıq. Biz davamlı əkinçilik təcrübələrinə, tullantıların azaldılmasına və karbon izimizi minimuma endirməyə sadiqik. Qablaşdırmamız ekoloji cəhətdən təmizdir və biz daim ətraf mühitə müsbət təsir göstərmək üçün innovativ yolları araşdırırıq.Davamlılıqdan əlavə, biz işimizi mümkün edən icmaları dəstəkləməyə sadiqik. Biz inanırıq ki, yerli fermerlərə və icmalara sərmayə qoymaqla hər kəsin rifahına töhfə verə bilərik." : "In an era of heightened environmental consciousness, we take our responsibility to the planet seriously. We're committed to sustainable farming practices, reducing waste, and minimizing our carbon footprint. Our packaging is eco-friendly, and we're continuously exploring innovative ways to make a positive impact on the environment.Beyond sustainability, we're dedicated to supporting the communities that make our business possible. We believe that by investing in local farmers and communities, we can contribute to the well-being of all."}</p>
                    <h4>{Lang === 'AZ' ? "Daha Sağlam Dünya üçün Vizyonumuz" : "Our Vision for a Healthier World"}</h4>
                    <p>{Lang === 'AZ' ? "İrəliyə baxaraq, Freshgo hər kəsin təzə, qidalı və ləzzətli meyvə və tərəvəzlərə çıxışı olan dünyanı nəzərdə tutur. Daha sağlam və xoşbəxt həyata aparan səyahətinizdə etibarlı tərəfdaşınız olmağı hədəfləyirik. Yeniliklərə və müştəri məmnuniyyətinə sadiqliyimiz bizi məhsullarımızı daim təkmilləşdirməyə və genişləndirməyə sövq edir. İstər təcrübəli aşpaz, istərsə də sağlam seçimlər axtaran bir ailə olun, biz sizin ilk seçiminiz olmaq istəyirik." : "As we look ahead, Freshgo envisions a world where everyone has access to fresh, nutritious, and flavorful fruits and vegetables. We aim to be your trusted partner on your journey to a healthier, happier life.Our commitment to innovation and customer satisfaction drives us to continually improve and expand our offerings. Whether you're a seasoned chef, a health-conscious individual, or a family looking for wholesome options, we want to be your first choice."}</p>
                </div>
                <div className='conclusion my-2'>
                    <p className='text-center'>{Lang === 'AZ' ? "Freshgo haqqında öyrənmək üçün vaxt ayırdığınız üçün təşəkkür edirik. Hekayəmiz torpağa olan sevgimizdən, keyfiyyətə sadiqliyimizdən və daha sağlam dünyaya baxışımızdan ibarətdir. Sizi geniş çeşiddə təzə məhsulumuzu araşdırmağa, mükəmməlliyə olan öhdəliyimizdən həzz almağa və fermanı süfrənizə gətirmək missiyamıza qoşulmağa dəvət edirik.Etibarınız bizim ən qiymətli məhsulumuzdur və biz sizin həyatınızı təbiətin yaxşılığı ilə bəsləməyi səbirsizliklə gözləyirik." : "Thank you for taking the time to learn about Freshgo. Our story is one of love for the land, a dedication to quality, and a vision for a healthier world. We invite you to explore our wide range of fresh produce, savor the taste of our commitment to excellence, and join us on our mission to bring the farm to your table.Your trust is our most cherished harvest, and we look forward to nourishing your life through the goodness of nature."}</p>
                </div>
            </div>

        </div>
        <Footer />
        </div>
        </>
    )
}

export default About