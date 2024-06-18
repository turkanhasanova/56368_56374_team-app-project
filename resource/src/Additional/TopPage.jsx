import React from 'react';
import { Link } from 'react-router-dom';
import LangContext from '../context/LangContext';
import { useContext } from 'react';

const TopPage = ({ page, title }) => {
    const [Lang, SetLang] = useContext(LangContext);
    return (
        <div className='toppage'>
            <div className='link d-flex align-items-center'>
                <Link to="/"><a className='me-2 '>{Lang === 'AZ' ? "Ana Səhifə" : "Home"}</a></Link>
                /
                <a className='ms-2'>{page}</a>
            </div>
            <div className='title d-flex justify-content-center my-4'>
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default TopPage