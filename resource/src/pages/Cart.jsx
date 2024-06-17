import React, { useState } from 'react';
import TopPage from '../Additional/TopPage';
import LangContext from '../context/LangContext';
import { useContext } from 'react';
import { useCart } from 'react-use-cart'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Col, Row } from 'react-bootstrap';
import Header from './Header';
import { ModeContext } from '../context/ModeContext';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from '../firebase/firebaseConfig';





const Cart = ({user}) => {
  const navigate = useNavigate();
  const [Lang] = useContext(LangContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mode] = useContext(ModeContext);
  const { items, updateItemQuantity, removeItem, isEmpty, cartTotal, emptyCart } = useCart();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleCheckoutClick = () => {
    if (isLoggedIn) {
      window.location.href = '/payment';
    } else {
      alert(Lang === 'AZ' ? 'Zəhmət olmasa daxil olun' : 'Please log in to your account');
      navigate('/login');
    }
  };
  return (
    <>
      <div className={mode}>
        <Header user={user}/>
        <div className='container d-flex justify-content-center flex-column mycart'>
          <TopPage page={Lang === 'AZ' ? "Səbət" : "Cart"} title={Lang === 'AZ' ? "Səbət" : "Cart"} />
          
          {isEmpty ? <h1 className='text-center tutle'>{Lang === "AZ" ? "Səbət boşdur" : "No Product"}</h1> :
            <div className='cart d-flex justify-content-center flex-column'>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">{Lang === "AZ" ? "Şəkil"  : "Image"}</th>
                    <th scope="col">{Lang === "AZ" ? "Başlıq" : "Title"}</th>
                    <th scope="col">{Lang === "AZ" ? "Qiymət" : "Price"}</th>
                    <th scope="col">{Lang === "AZ" ? "Say" : "Quantity"}</th>
                    <th scope="col">{Lang === "AZ" ? "Cəm" : "Total"}</th>
                    <th scope="col">{Lang === "AZ" ? "Sil" : "Delete"}</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, count) => (
                    <tr>
                      <th scope="row">{count + 1}</th>
                      <td><img src={item.image} alt="" width={100} /></td>
                      <td>{Lang === 'AZ' ? item.title.AZ : item.title.EN}</td>
                      <td>{item.price}</td>
                      <td className='counter'>
                        <button className='btn' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                        <span className='mx-3'>
                          {item.quantity}
                        </span>
                        <button className='btn' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                      </td>
                      <td>{(item.price * item.quantity).toFixed(2)}</td>
                      <td><i className="fa-regular fa-circle-xmark fa-xl" onClick={() => removeItem(item.id)}></i></td>
                    </tr>
                  ))}

                </tbody>
              </table>
              <div className='d-flex justify-content-end subtotal'>
                <ul className="list-group">
                  <li className="list-group-item"><h5>{Lang === "AZ" ? "Ara cəm" : "Subtotal"}:</h5></li>
                  <li className="list-group-item"><h6 className='text-center'>{(cartTotal).toFixed(2)}</h6></li>
                  <li className="list-group-item"><button className='btn d-flex justify-content-center' onClick={() => { emptyCart() }
                  }>{Lang === "AZ" ? "Səbəti Təmizlə" : "Clear Cart"}</button></li>
                  
                  <div className='payment'><li className="list-group-item payment"  onClick={() => {
                    
                      emptyCart();
                      handleCheckoutClick();
                    
                  }}> {Lang === "AZ" ? "Ödəniş et" : "Go to Checkout"}</li></div>
                
                </ul>
              </div>
            </div>
          }
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Cart