import React from 'react';
import TopPage from '../Additional/TopPage';
import LangContext from '../context/LangContext';
import { useContext } from 'react';
import { ModeContext } from '../context/ModeContext';
import Header from './Header';
import Footer from './Footer';


const Contact = ({user}) => {
    const [Lang] = useContext(LangContext);
    const [mode] = useContext(ModeContext);
    return (
       <>
       <div className={mode}>
        <Header user={user}/>
         <div className='contact'>
            <div className='container'>
                <TopPage page={Lang === 'AZ' ? "Bizimlə Əlaqə" : "Contact Us"} title={Lang === 'AZ' ? "Bizimlə Əlaqə" : "Contact Us"}/>
                <div className='form-text d-flex justisy-conetnt-center align-items-center'>
                    <p>{Lang === 'AZ' ? "Suallara cavab verməkdən və ya geri qaytarmaqda sizə kömək etməkdən məmnunuq. Əgər köməyə ehtiyacınız varsa, zəhmət olmasa aşağıdakı formanı doldurun." : "We're happy to answer questions or help you with returns.Please fill out the form below if you need assistance."}</p>
                </div>
                <form>
                    <div className='row row-cols-1 row-cols-md-2 g-4'>
                        <div className='col'>
                            <label htmlFor="fullname" className='form-label'>{Lang === 'AZ' ? "Ad/Soyad" : "Full Name"}</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className='col'>
                            <label htmlFor="phonenumber" className='form-label'>{Lang === 'AZ' ? "Telefon Nömrəsi" : "Phone Number"}</label>
                            <input type="number" className='form-control' />
                        </div>
                        <div className='col'>
                            <label htmlFor="email" className='form-label'>Email</label>
                            <input type="email" className='form-control' />
                        </div>
                        <div className='col'>
                            <label htmlFor="order" className='form-label'>{Lang === 'AZ' ? "Sifariş Nömrəsi" : "Order Number"}</label>
                            <input type="number" className='form-control' />
                        </div>
                    </div>                        
                    <div className='comment d-flex flex-column'>
                        <label htmlFor="comment" className='form-label'>{Lang === 'AZ' ? "Rəylər/Suallar" : "Comments/Questions"}</label>
                        <textarea name="comment" form="usrform" className='form-control'></textarea>
                    </div>
                    <div className='submit mt-2'>
                        <button className='btn' type='submit'>{Lang === 'AZ' ? "Formu Göndər" : "Submit For"}</button>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
       </div>
       </>
    )
}

export default Contact