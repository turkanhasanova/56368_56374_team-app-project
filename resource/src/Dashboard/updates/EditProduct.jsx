import React from 'react';
import ProductForm from '../ProductForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editProductFromDatabase } from '../../manager/actions/ProductAction';

const EditProduct = () => {
  const {id} = useParams();
  const products = useSelector(p=>p);
  const selectproduct = products.find(i=>i.id.toString() === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className='add-product d-flex justify-content-center align-items-center flex-column'>
    <div className='text-center my-4 mb-4'><h1>Edit Product</h1></div>
    <ProductForm btn="Edit" editproduct={selectproduct} senddata={(i) =>{
      dispatch(editProductFromDatabase(selectproduct.id,i))
      navigate('/admin')
    }}/>
  </div>
  )
}

export default EditProduct
