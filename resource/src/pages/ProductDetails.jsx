import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ModeContext } from '../context/ModeContext';
import Header from './Header';
import Footer from './Footer';
import { useCart } from 'react-use-cart';
import LangContext from '../context/LangContext';


const ProductDetails = ({user}) => {
    const {id} = useParams();
    const products = useSelector(p=>p);
    const productdetails = products.find(p=>p.id === id)
    const [mode] = useContext(ModeContext);
    const {addItem} = useCart();
    const [Lang] = useContext(LangContext);

    
  return (
    <div className={mode}>
      <Header user={user}/>
      <div className='productdetails'>
        <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={productdetails.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{Lang === "AZ" ? productdetails.title.AZ : productdetails.title.EN}</h1>
        <h3>{productdetails.price}₼</h3>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>

      </div>
    </div>
  </div>
    </div>
    <Footer />
    </div>
  )
}

export default ProductDetails