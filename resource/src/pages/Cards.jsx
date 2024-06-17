import React from 'react'

const Cards = () => {
  return (
    <div className='photos my-5 d-flex-justify-content-center align-items-center'>
<div className="row row-cols-1 row-cols-md-3 g-3">
  <div className="col">
    <div className="card">
      <img src="https://freshgo-vegetable.mybigcommerce.com/product_images/uploaded_images/latestbanner-1.jpg" className="card-img-top" alt="..."/>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://freshgo-vegetable.mybigcommerce.com/product_images/uploaded_images/latestbanner-2.jpg" className="card-img-top" alt="..."/>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://freshgo-vegetable.mybigcommerce.com/product_images/uploaded_images/latestbanner-3.jpg" className="card-img-top" alt="..."/>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards