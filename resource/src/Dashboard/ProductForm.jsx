import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LangContext from "../context/LangContext";
import { useContext } from "react";



const ProductForm = ({btn,editproduct,senddata}) => {
  const [Lang, SetLang] = useContext(LangContext);
    const [photo, setPhoto] = useState(editproduct ? editproduct.image : "");
    const [titleAz, setTitleAz] = useState(editproduct ? editproduct.title.AZ || "" : "");
    const [titleEn, setTitleEn] = useState(editproduct ? editproduct.title.EN || "" : "");
    const [price, setPrice] = useState(editproduct ? editproduct.price : "");
    const [categoryAz, setCategoryAz] = useState(editproduct?.category?.AZ || "");
    const [categoryEn, setCategoryEn] = useState(editproduct?.category?.EN || "");
    const dispatch = useDispatch();

    const handleTitleChange = (e) => {
      const value = e.target.value;
      if (Lang === "AZ") {
        setTitleAz(value);
      } else if (Lang === "EN") {
        setTitleEn(value);
      }
    };

    const handleCategoryChange = (e) => {
      const value = e.target.value;
      if (Lang === "AZ") {
        setCategoryAz(value);
      } else if (Lang === "EN") {
        setCategoryEn(value);
      }
    };
  
    const getTitleForCurrentLang = () => {
      return Lang === "AZ" ? titleAz : titleEn;
    };
    const getCategoryForCurrentLang = () => {
      return Lang === "AZ" ? categoryAz : categoryEn;
    };
    const productFormSubmit = (e) => {
      e.preventDefault();
      senddata({
        image: photo,
        title: {
          AZ: titleAz,
          EN: titleEn,
        },
        price: price,
        category: {
          AZ: categoryAz,
          EN: categoryEn,
        },
      });
    };
  return (
    <div className="product-form d-flex justify-content-center align-items-center">
            <form onSubmit={productFormSubmit}>
  <div className="mb-3">
    <label className="form-label">Photo of Product</label>
    <input type="text" className="form-control" placeholder='Enter URL of Photo' value={photo} onChange={e=>setPhoto(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Title</label>
    <input type="text" className="form-control" placeholder='Enter Title'value={getTitleForCurrentLang()}
            onChange={handleTitleChange}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Price</label>
    <input type="text" className="form-control" placeholder='Enter Price' value={price} onChange={e=>setPrice(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Category</label>
    <input type="text" className="form-control" placeholder='Enter Category'             value={getCategoryForCurrentLang()}
            onChange={handleCategoryChange}/>
  </div>
  <button type="submit" className="btn">{btn}</button>
</form>
    </div>
  )
}

export default ProductForm

