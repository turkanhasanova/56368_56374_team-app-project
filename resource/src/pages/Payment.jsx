import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import LangContext from '../context/LangContext';
import { useSelector } from 'react-redux';
import  Card  from '../Additional/Card';
import { Col, Row } from 'react-bootstrap';
import { ModeContext } from '../context/ModeContext';
import Footer from './Footer';



const Payment = ({user}) => {
    const [Lang] = useContext(LangContext);
    const [mode] = useContext(ModeContext);
    const products = useSelector(p=>p);

    return (
        <>
        <div className={mode}>
        <Header user={user}/>
        <div className='payment-page d-flex justify-content-center align-items-center my-5'>
            <div className='container'>
            <div className='title d-flex justify-content-center align-items-center flex-column'>
                <h1>{Lang === "AZ" ? "Ödəniş uğurla həyata keçirildi" : "The payment was made successfully"}</h1>
                <img src="https://media.tenor.com/bm8Q6yAlsPsAAAAi/verified.gif"  />
               <div className='return'> <Link to="/" className='homelink'><h6>{Lang === "AZ" ? "Əsas səhifəyə geri dön" : "Go to Home Page"}</h6></Link></div>
            </div>
            <div className='recommended-products my-5 flex-column d-flex justify-content-center'>
                <h1 className='text-center'>{Lang === "AZ" ? "Tövsiyyə olunan məhsullar:" : "Recommended Products:"}</h1>
                <div className='d-flex justify-content-center align-items-center prdcts'>
                {products.slice(3,6).map((item) => (
                    <Card 
                    image={item.image}
                    title={Lang === "AZ" ? item.title.AZ : item.title.EN}
                    price={item.price}
                    id={item.id}
                    alldata={item}
                    alldata2={item}
                
                    />
                ))}
                </div>
            </div>
            </div>
        </div>
        <Footer />
        </div>
        </>
    )
}

export default Payment