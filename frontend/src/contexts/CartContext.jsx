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

  // decrement qty product
  const decrementQtyProduct = (product) => {
    setCart((prevProducts) => {
      return prevProducts.map((item) => {
        if (item._id === product._id) {
          return {
            ...item,
            qty: Math.max(1, item.qty - 1),
          };
        } else {
          return item;
        }
      });
    });
  };

  // increment qty product
  const incrementQtyProduct = (product) => {
    setCart((prevProducts) => {
      return prevProducts.map((item) => {
        if (item._id === product._id) {
          return {
            ...item,
            qty: Math.min(product.countInStock, item.qty + 1),
          };
        } else {
          return item;
        }
      });
    });
  };

  // remove product from cart
  const removeProductFromCart = (product) => {
    setCart((prevProducts) =>
      prevProducts.filter((item) => item._id !== product._id),
    );
  };

  let value = {
    cart,
    addToCart,
    existingProduct,
    decrementQtyProduct,
    incrementQtyProduct,
    removeProductFromCart,
  };

  return <CartContext value={value}>{children}</CartContext>;
};

export { CartContext, CartProvider };
