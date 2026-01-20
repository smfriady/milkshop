import { createContext, useEffect, useState } from 'react';
import { CartStorage } from '../helpers/storage';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // state untuk menyimpan data product
  const [cart, setCart] = useState(() => CartStorage.get());

  useEffect(() => {
    CartStorage.save(cart);
  }, [cart]);

  // add to cart
  const addToCart = (product) => {
    setCart((prevProduct) => {
      let isExistingProduct = prevProduct.find(
        (item) => item._id === product._id,
      );

      if (isExistingProduct) {
        return prevProduct;
      }
      return [...prevProduct, { ...product, qty: 1 }];
    });
  };

  // product existing
  const existingProduct = (product) => {
    let isExistingProduct = cart.find((item) => item._id === product._id);
    if (isExistingProduct) {
      return true;
    } else {
      return false;
    }
  };

  let value = { cart, addToCart, existingProduct };

  return <CartContext value={value}>{children}</CartContext>;
};

export { CartContext, CartProvider };
