import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LangContext from '../context/LangContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { removeProductFromDatabase } from '../manager/actions/ProductAction';


const Dashboard = () => {
  const products = useSelector(p=>p);
  const blogs = useSelector(i=>i);
  const [Lang, SetLang] = useContext(LangContext);
  const dispatch = useDispatch();

  return (
    <div className='admin'>
      <div className='container'>
        <div className='title'>
          <h2 className='text-center'>Admin Panel</h2>
          <Link to="/admin/add"><button className='btn' type='button'>{Lang === 'AZ' ? "Məhsul Əlavə Et" : "Add Product"}</button></Link>
        </div>

        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Photo</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {Array.isArray(products) && products.map((item,count)=>(
          <tr key={count}>
          <th scope="row">{count+1}</th>
          <td><img src={item.image} width={100} alt="" /></td>
          <td>{Lang === "AZ" ? item.title.AZ : item.title.EN}</td>
          <td>{item.price}</td>
          <td><Link to={`/admin/edit/${item.id}`}><button className='btn edit' type='button'>{Lang === 'AZ' ? "Redaktə Et" : "Edit"}</button></Link></td>
          <td><button className='btn remove' type='button' onClick={()=>{dispatch(removeProductFromDatabase(item.id))}}>{Lang === 'AZ' ? "Sil" : "Delete"}</button></td>
        </tr>
    ))}
  </tbody>
</table>
      </div>
    </div>
  )
}

export default Dashboard