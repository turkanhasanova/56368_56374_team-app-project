import {db } from '../../firebase/firebaseConfig';


export const addProduct = (product) =>({
    type:"ADD_PRODUCT",
    product
  });

  export const addProductToDatabase = (productData = {}) => {
    return async (dispatch) => {
      const { image = '', title = '', price = '', category = '' } = productData;
      const product = { image, title, price, category };
  
      try {
        const docRef = await db.collection('products').add(product);
        dispatch(addProduct({
          id: docRef.id,
          ...product,
        }));
      } catch (error) {
        console.error('Error adding product: ', error);
      }
    };
  }
  

  export const deleteProduct = (id) => ({
    type:"DELETE_PRODUCT",
    id
  });

  export const removeProductFromDatabase = (id) => {
    return async (dispatch) => {
      try {
        await db.collection('products').doc(id).delete();
        dispatch(deleteProduct(id));
      } catch (error) {
        console.error('Error deleting product: ', error);
      }
    };
  }

  export const editProduct = (id,update) => ({
    type:"EDIT_PRODUCT",
    id,
    update
  })

  export const editProductFromDatabase = (id, updates) => {
    return async (dispatch) => {
      try {
        await db.collection('products').doc(id).update(updates);
        dispatch(editProduct(id, updates));
      } catch (error) {
        console.error('Error updating product: ', error);
      }
    };
  }
  

export const getProducts = (products) =>({
  type:"GET_PRODUCTS",
  products
})

export const getProductsFromDatabase = () => {
    return async (dispatch) => {
      try {
        const querySnapshot = await db.collection('products').get();
        const products = [];
  
        querySnapshot.forEach((doc) => {
          products.push({
            id: doc.id,
            ...doc.data(),
          });
        });
  
        dispatch(getProducts(products));
      } catch (error) {
        console.error('Error getting products: ', error);
      }
    };
  }
