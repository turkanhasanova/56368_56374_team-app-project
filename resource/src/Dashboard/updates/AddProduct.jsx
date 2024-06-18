import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProductForm from '../ProductForm';
import { addProductToDatabase } from '../../manager/actions/ProductAction';
import React from 'react';


const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  return (
    <div className='add-product d-flex justify-content-center align-items-center flex-column'>
      <div className='text-center my-4 mb-4'><h1>Add Product</h1></div>
      <ProductForm btn="Add" senddata={(i) =>{
        dispatch(addProductToDatabase(i))
        navigate('/admin')
      }}/>
    </div>
  )
}

export default AddProduct
