import React from 'react';
import LangContext from '../context/LangContext';
import { useContext } from 'react';
import { useCart } from 'react-use-cart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { useWishlist } from 'react-use-wishlist';


const Card = ({ image, title, price, alldata, id, alldata2, category }) => {
    const [Lang] = useContext(LangContext);
    const { addWishlistItem } = useWishlist();
    const { addItem } = useCart();
    const products = useSelector(p => p);

    return (
        <Col sm={12} md={4}>
            <div className='product card'>
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="title">
                    <h5>{title}</h5>
                </div>
                <div className="price">
                    <h6>{price}₼</h6>
                </div>
                <div className="category">
                    <h6>{category}</h6>
                </div>
                <div className="cart">
                    <button className="btn" type='button' onClick={() => { addItem(alldata) }}>
                        <i className="fa-solid fa-cart-shopping fa-sm me-2"></i>
                        {Lang === 'AZ' ? "Səbətə əlavə et" : "Add to cart"}
                    </button>
                </div>
                <div className="heart">
                    <i className="fa-regular fa-heart fa-xl" onClick={() => { addWishlistItem(alldata2) }}></i>
                </div>
                <div className="readmore">
                    <Link to={`/productdetails/${id}`}> <i className="fa-regular fa-eye fa-xl"></i></Link>
                </div>
            </div>
        </Col>
    )
}

export default Card