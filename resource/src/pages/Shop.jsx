import React from 'react';
import LangContext from '../context/LangContext';
import { useContext } from 'react';
import TopPage from '../Additional/TopPage';
import Card from '../Additional/Card';
import { useSelector } from 'react-redux';
import { Row, Col, ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import { ModeContext } from '../context/ModeContext';
import Header from './Header';
import Footer from './Footer';


const Shop = ({user}) => {
  const [Lang] = useContext(LangContext);
  const products = useSelector(p => p);
  const [catProduct, setCatProduct] = useState([]);
  const [price, setPrice] = useState(18);
  const [mode] = useContext(ModeContext);

  const handleClick = (category) => {
    if (category === "All") {
      setCatProduct(products);
    } else {
      const filteredProducts = products.filter(item => item.category.EN === category);
      setCatProduct(filteredProducts);
    }
  };
  const handleInput = (e) => {
    setPrice(e.target.value);
  }

  return (
    <>
      <div className={mode}>
        <Header user={user} />
        <div className='shop d-flex justify-content-center'>
          <div className='container'>
            <TopPage page={Lang === 'AZ' ? "Mağaza" : "Shop"} title={Lang === 'AZ' ? "Mağaza" : "Shop"} />
            <Row className='all justify-content-md-center'>
              <Col sm={12} md={2}>
                <ListGroup className='sort'>
                <ListGroup.Item className='sort' onClick={() => { handleClick("All") }}>{Lang === "AZ" ? "Hamsı" :  "All"}</ListGroup.Item>
                  <ListGroup.Item className='sort' onClick={() => { handleClick("Fruit") }}>{Lang === "AZ" ? "Meyvə" :  "Fruit"}</ListGroup.Item>
                  <ListGroup.Item className='sort' onClick={() => { handleClick("Vegetable") }}>{Lang === "AZ" ? "Tərəvəz" : "Vegetable"}</ListGroup.Item>
                  <ListGroup.Item className='sort' onClick={() => { handleClick("Dairy") }}>{Lang === "AZ" ? "Süd Məhsulları" : "Dairy"}</ListGroup.Item>
                  <ListGroup.Item className='sort' onClick={() => { handleClick("Juice") }}>{Lang === "AZ" ? "Meyvə Şirəsi" : "Juice"}</ListGroup.Item>
                </ListGroup>
                <div className="pricefilter">
                  <input type="range" onInput={handleInput} className='form-range' step={1}
                    min={0}
                    max={18} />
                  <h6>Price: {price}</h6>
                </div>
              </Col>
              <Col sm={12} md={10}  className='products'>
                <Row>
                  {catProduct.length === 0 ? products.filter(item => { return item.price <= price }).map(item => (
                    <Card xs={12} sm={6} md={4}
                      image={item.image}
                      title={Lang === "AZ" ? item.title.AZ : item.title.EN}
                      price={item.price}
                      id={item.id}
                      alldata={item}
                      alldata2={item}
                      category={Lang === "AZ" ? item.category.AZ : item.category.EN}
                    />
                  )) : catProduct.filter(item => { return +item.price <= price }).map(item => (
                    <Card xs={12} sm={6} md={4}
                      image={item.image}
                      title={Lang === "AZ" ? item.title.AZ : item.title.EN}
                      price={item.price}
                      id={item.id}
                      alldata={item}
                      alldata2={item}
                      category={Lang === "AZ" ? item.category.AZ : item.category.EN}
                    />
                  ))}
                </Row>
              </Col>
              
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Shop