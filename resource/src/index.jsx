import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './sass/style.scss';
import configureStore from './manager/store/ConfigStore.js';
import { Provider } from 'react-redux';
import { getProductsFromDatabase } from './manager/actions/ProductAction.js';
import photo from './Additional/Ellipsis-1s-200px.gif'





const store = configureStore();



const result = (
  <Provider store={store}>
      <App />
  </Provider>
)


ReactDOM.render(<div className='d-flex justify-content-center align-items-center'><img src={photo} alt="" /></div>, document.getElementById('root'));

store.dispatch(getProductsFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
})