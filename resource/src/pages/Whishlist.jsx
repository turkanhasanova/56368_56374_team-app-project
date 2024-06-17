import React from 'react';
import LangContext from '../context/LangContext';
import { useContext } from 'react';
import TopPage from '../Additional/TopPage';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useWishlist } from 'react-use-wishlist';
import { ModeContext } from '../context/ModeContext';
import Header from './Header';
import Footer from './Footer';
import { useCart } from 'react-use-cart';



const Whishlist = ({user}) => {
  const [Lang] = useContext(LangContext);
  const [mode] = useContext(ModeContext);
  const products = useSelector(p => p)
  const { items, isWishlistEmpty, removeWishlistItem, totalWishlistItems } = useWishlist();
  const { addItem} = useCart();


  return (
    <>

      <div className={mode}>

        <Header user={user}/>
        <div className='wishlist'>
          <div className='container'>
            <TopPage page={Lang === 'AZ' ? "Istək Siyahısı" : "Wishlist"} title={Lang === 'AZ' ? "Istək Siyahısı" : "Wishlist"} />
            {isWishlistEmpty ? <h1 className='text-center'>{Lang === "AZ" ? "İstək siyahısı boşdur" : "No Product"}</h1> :
              <>
                <h5>Total items:({totalWishlistItems})</h5>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">{Lang === "AZ" ? "Şəkil" : "Image"}</th>
                      <th scope="col">{Lang === "AZ" ? "Başlıq" : "Title"}</th>
                      <th scope="col">{Lang === "AZ" ? "Qiymət" : "Price"}</th>
                      <th scope="col">{Lang === "AZ" ? "Sil" : "Delete"}</th>
                      <th scope="col">{Lang === "AZ" ? "Səbətə Əlavə Et" : "Add to Cart"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, count) => (
                      <tr key={item.id}>
                        <th scope="row">{count + 1}</th>
                        <td><img src={item.image} alt="" width={100} /></td>
                        <td>{Lang === 'AZ' ? item.title.AZ : item.title.EN}</td>
                        <td>{item.price}</td>
                        <td><i className="fa-regular fa-circle-xmark fa-xl" onClick={() => removeWishlistItem(item.id)}></i></td>
                        <td>
                    <i
                      className="fa-solid fa-cart-shopping fa-xl"
                      onClick={() => {
                        addItem(item); // Add the item to the cart when removing from wishlist
                      }}
                    ></i>
                  </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            }
          </div>
        </div>
        <Footer />
      </div>

    </>
  )
}

export default Whishlist