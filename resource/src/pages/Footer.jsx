import React, { useContext } from 'react';
import { ModeContext } from '../context/ModeContext';
import { Link } from 'react-router-dom';
import LangContext from '../context/LangContext';

const Footer = () => {
    const [mode] = useContext(ModeContext);
    const [Lang, SetLang] = useContext(LangContext);
    return (
            <footer className="pt-5">
                    <div className="row">
                        <div className="col-4 col-md-2 mb-3">
                            <Link to="/"><img src={mode === 'light' ? 'https://cdn11.bigcommerce.com/s-a4jwov0yt3/images/stencil/original/logo_1636779570__65785.original.png' : 'https://dostguru.com/bigcommerce/freshgo/images/logo.png'} alt="" /></Link>
                            <ul className="nav">
                                <li className="nav-item mb-2 mt-2">
                                        <div className="d-flex">
                                        <i className="fa-solid fa-location-dot fa-sm me-2 mt-2"></i>
                                    <h6>{Lang === "AZ" ? "Binəqədi rayonu, 8-ci mikrorayon, Nizami Nərimanov küçəsi 3078 məhəllə," : "Binagadi district, 8th microdistrict, Nizami Narimanov, street 3078 block"}</h6>
                                        </div>
                                    
                                </li>
                                <li className="nav-item mb-2">
                                    
                                        <div className="d-flex">
                                        <i className="fa-solid fa-phone fa-sm me-2 mt-2"></i>
                                    <h6>+994 55 320 65 25</h6>
                                        </div>
                                    
                                </li>
                            </ul>
                        </div>

                        <div className="col-4 col-md-2 mb-3  d-flex align-items-center">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <Link to="/privacy"><a className="nav-link p-0 text-body-secondary">{Lang === 'AZ' ? "Təhlükəsizlik Politikası" : "Privacy Policy"}</a></Link>
                                </li>
                                <li className="nav-item mb-2">
                                    <Link to="/shipping-and-returns"><a className="nav-link p-0 text-body-secondary">{Lang === 'AZ' ? "Çatdırılma & Qaytarma" : "Shipping & Returns"}</a></Link>
                                </li>
                                <li className="nav-item mb-2">
                                    <Link to="/contact"><a className="nav-link p-0 text-body-secondary">{Lang === 'AZ' ? "Bizimlə Əlaqə" : "Contact Us"}</a></Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-4 col-md-2 mb-3  d-flex align-items-center">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <Link to="/"><a className="nav-link p-0 text-body-secondary">{Lang === 'AZ' ? "Ana Səhifə" : "Home"}</a></Link>
                                </li>
                                <li className="nav-item mb-2">
                                    <Link to="/shop"><a className="nav-link p-0 text-body-secondary">{Lang === 'AZ' ? "Mağaza" : "Shop"}</a></Link>
                                </li>
                                <li className='nav-item mb-2'>
                                    <Link to="/faq"><a className='nav-link p-0 text-body-secondary'>FAQ</a></Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-5 offset-md-1 mb-3  d-flex align-items-center subscribe">
                            <form>
                                <h5>{Lang === "AZ" ? "Bülletenimizə abunə olun" : "Subscribe to our newsletter"}</h5>
                                <p>{Lang === "AZ" ? "Bizdən gələn yeniliklərin və həyəcanlı şeylərin aylıq xülasəsi." : "Monthly digest of what's new and exciting from us."}</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                    <button className="btn" type="button">{Lang === "AZ" ? "Abonə Ol" : "Subscribe"}</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 border-top">
                        <p>{Lang === "AZ" ? "BigCommerce © 2023 FreshGo-Vegetable tərəfindən dəstəklənməktədir." : "Powered by BigCommerce© 2023 FreshGo-Vegetable."}</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3"><a className="link-body-emphasis" ></a></li>
                            <li className="ms-3"><a className="link-body-emphasis" ></a></li>
                            <li className="ms-3"><a className="link-body-emphasis" ></a></li>
                        </ul>
                    </div>
               
            </footer>
    
    )
}

export default Footer