import React, { useContext, useState } from 'react';
import { ModeContext } from '../context/ModeContext';
import { LangContext } from '../context/LangContext';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { useSelector } from 'react-redux';
import { auth } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';


const Header = ({ user }) => {
    const navigate = useNavigate();
    const logout = () => {
        auth.signOut().then(() => {
            navigate('/login')
        })
    }
    const [mode, setMode] = useContext(ModeContext);
    const [Lang, SetLang] = useContext(LangContext);
    const { totalItems } = useCart();
    const [query, setQuery] = useState(null);
    const products = useSelector(p => p);

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link to="/"><a className="navbar-brand"><img src={mode === 'light' ? 'https://cdn11.bigcommerce.com/s-a4jwov0yt3/images/stencil/original/logo_1636779570__65785.original.png' : 'https://dostguru.com/bigcommerce/freshgo/images/logo.png'} alt="" /></a></Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/"><a className="nav-link active" aria-current="page">{Lang === 'AZ' ? "Ana Səhifə" : "Home"}</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/shop"><a className="nav-link active">{Lang === 'AZ' ? "Mağaza" : "Shop"}</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about"><a className="nav-link active">{Lang === 'AZ' ? "Haqqımızda" : "About"}</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact"><a className="nav-link active">{Lang === 'AZ' ? "Əlaqə" : "Contact"}</a></Link>
                                </li>
                            </ul>
                            <div className='icons d-flex align-items-center justify-content-center'>
                                {!user &&
                                    <div className='user me-4'>
                                        <Link to="/login"><i className="fa-regular fa-user fa-lg"></i></Link>
                                    </div>}
                                {user &&
                                    <div className='user me-4'>
                                        <span><Link to='/' className='navlinks me-2'>{user}</Link></span>
                                        <span><i className="fa-solid fa-right-from-bracket fa-lg" onClick={logout}></i></span>
                                    </div>}
                                <div className='mode me-4'>
                                    <i className="fa-solid fa-moon fa-lg" onClick={() => {
                                        mode === 'light' ? setMode('dark') : setMode('light');
                                        mode === 'light' ? localStorage.setItem('mode', 'dark') : localStorage.setItem('mode', 'light');
                                    }}></i>
                                </div>
                                <div className='wishlist me-3'>
                                    <Link to="/wishlist"><i className="fa-regular fa-heart fa-lg">
                                    </i></Link>
                                </div>
                                <div className='cart me-4'>
                                    <Link to="/cart"><i className="fa-solid fa-cart-shopping fa-lg">
                                        <span className="badge rounded-pill bg-black">
                                            {totalItems}
                                        </span></i></Link>
                                </div>
                                <div className='lang'>
                                    <button className='btn' type='button' onClick={() => {
                                        Lang === "AZ" ? SetLang("EN") : SetLang("AZ");
                                        Lang === "AZ" ? localStorage.setItem("Lang", "EN") : localStorage.setItem("Lang", "AZ");
                                    }}>{Lang === "AZ" ? "EN" : "AZ"}</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default Header