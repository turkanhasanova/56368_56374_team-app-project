import React, { useState } from 'react'
import TopPage from '../Additional/TopPage';
import { Link, useNavigate } from 'react-router-dom';
import LangContext from '../context/LangContext';
import { useContext } from 'react';
import { auth } from '../firebase/firebaseConfig';
import Header from './Header';
import { ModeContext } from '../context/ModeContext';
import Footer from './Footer';




const Login = ({user}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [Lang] = useContext(LangContext);
  const [mode] = useContext(ModeContext);


  const login = (e) => {
      e.preventDefault();
      if (!email || !password) {
        setError('Email and password are required.');
        return;
    }
      auth.signInWithEmailAndPassword(email, password).then(() => {
          setEmail('');
          setPassword('');
          setError('');
          navigate('/');
      }).catch(err => setError('User not found. Please register.'));
  }
  

    return (
        <>
        <div className={mode}>
          <Header user={user}/>
        <div className='login'>
            <div className='container'>
                <TopPage page={Lang === 'AZ' ? "Giriş" : "Login" }title={Lang === 'AZ' ? "Daxil ol" : "Sign in" } />
                <div className='row row-cols-1 row-cols-md-2 g-4'>
                    <div className='col'>
                        <div className='loginform'>
                        <div className='container'>
                        <form autoComplete="off" onSubmit={login}>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your email'   onChange={(e) => setEmail(e.target.value)}  value={email}/>
                                <div id="emailHelp" className="form-text">{Lang === 'AZ' ? "E-poçtunuzu heç vaxt başqası ilə paylaşmayacağıq." : "We'll never share your email with anyone else."}</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">{Lang === 'AZ' ? "Şifrə" : "Password"}</label>
                                <input type="password" className="form-control" placeholder='Enter your password'  id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} value={password}/>
                            </div>
                            <button type="submit" className="btn">{Lang === 'AZ' ? "Daxil ol" : "Sign in"}</button>
                        </form>
                        {error && <span className='error-msg'>{error}</span>}
                        </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='createaccount'>
                            <div className='container'>
                                <h5>{Lang === 'AZ' ? "Yeni müştərisiniz?" : "New Customer?"}</h5>
                                <p>{Lang === 'AZ' ? "Bizimlə hesab yaradın və siz aşağıdakıları edə biləcəksiniz:" : "Create an account with us and you'll be able to:"}</p>
                                <ul>
                                    <li>{Lang === 'AZ' ? "Daha tez yoxlayın" : "Check out faster"}</li>
                                    <li>{Lang === 'AZ' ? "Çoxsaylı göndərmə ünvanlarını yadda saxlayın" : "Save multiple shipping addresses"}</li>
                                    <li>{Lang === 'AZ' ? "Sifariş tarixçənizə daxil olun" : "Access your order history"}</li>
                                    <li>{Lang === 'AZ' ? "Yeni sifarişləri izləyin" : "Track new orders"}</li>
                                    <li>{Lang === 'AZ' ? "Məhsulları İstək Siyahınıza Saxlayın" : "Save items to your Wish List"}</li>
                                </ul>
                                <Link to="/register"><button type='submit' className='btn'>{Lang === 'AZ' ?  "Yeni hesab yaradın" : "Create Account"}</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
        </>
    )
}

export default Login