import React, { Component } from "react";
import { ModeContext, ModeProvider} from './context/ModeContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./Dashboard/Dashboard";
import Privacy from "./pages/Privacy";
import ShippingReturns from "./pages/ShippingReturns";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Faq from "./pages/Faq";
import Whishlist from "./pages/Whishlist";
import { LangProvider } from "./context/LangContext";
import AddProduct from "./Dashboard/updates/AddProduct";
import EditProduct from "./Dashboard/updates/EditProduct";
import { CartProvider } from "react-use-cart";
import ProductDetails from "./pages/ProductDetails";
import Payment from "./pages/Payment";
import { WishlistProvider } from "react-use-wishlist";
import { db, auth } from "./firebase/firebaseConfig";
import Home from "./pages/Home";


class App2 extends Component {
  static contextType = ModeContext;

  state = {
    user: null,
}

componentDidMount() {
  const mode = this.context;
  // getting user info for navigation bar
  auth.onAuthStateChanged(user => {
      if (user) {
          db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
              this.setState({
                  user: snapshot.data().Email
              })
          })
      }
      else {
          this.setState({
              user: null
          })
      }
  })

}

render() {
  const mode = this.context;
  return (
    <div className={mode}>
      <BrowserRouter>
      <CartProvider>
      <WishlistProvider>
      <Routes>
        <Route path='/' element={<Home user={this.state.user}/>}></Route>
        <Route path='/admin' element={<Dashboard />}></Route>
        <Route path='/shop' element={<Shop user={this.state.user}/>}></Route>
        <Route path='/about' element={<About user={this.state.user}/>}></Route>
        <Route path='/contact' element={<Contact user={this.state.user}/>}></Route>
        <Route path='/privacy' element={<Privacy user={this.state.user}/>}></Route>
        <Route path='/shipping-and-returns' element={<ShippingReturns user={this.state.user}/>}></Route>
        <Route path='/login' element={<Login user={this.state.user}/>}></Route>
        <Route path='/register' element={<Register user={this.state.user}/>}></Route>
        <Route path='/cart' element={<Cart user={this.state.user}/>}></Route>
        <Route path='/wishlist' element={<Whishlist user={this.state.user}/>}></Route>
        <Route path='/admin/add' element={<AddProduct />}></Route>
        <Route path='/admin/edit/:id' element={<EditProduct />}></Route>
        <Route path='/productdetails/:id' element={<ProductDetails user={this.state.user}/>}></Route>
        <Route path='/faq' element={<Faq user={this.state.user}/>}></Route>
        <Route path='/payment' element={<Payment user={this.state.user}/>}></Route>
      </Routes>
      </WishlistProvider>
      </CartProvider>
      </BrowserRouter>
      </div>
  );
}
}
const App = () => {
  
  return (
      <ModeProvider>
        <LangProvider>
      <App2 />
      </LangProvider>
      </ModeProvider>
  )
}

export default App;
