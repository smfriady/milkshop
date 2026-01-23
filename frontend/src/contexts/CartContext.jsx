import { createContext, useEffect, useMemo, useState } from 'react';
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

  // update input product quantity
  const updateInputProductQty = (product, inputUser) => {
    setCart((prevProduct) => {
      return prevProduct.map((item) => {
        if (product._id === item._id) {
          if (inputUser === '') return { ...item, qty: '' };
          let newQty = parseInt(inputUser);
          if (isNaN(newQty)) return { ...item, qty: '' };

          newQty = Math.min(item.countInStock, Math.max(1, newQty));
          return { ...item, qty: newQty };
        }
        return item;
      });
    });
  };

  // validate on blur event
  const validateOnBlur = (product) => {
    setCart((prevProduct) => {
      return prevProduct.map((item) => {
        if (product._id === item._id) {
          if (item.qty === '' || item.qty < 1) {
            return { ...item, qty: 1 };
          }
        }
        return item;
      });
    });
  };

  // cart summary
  const cartSummary = useMemo(() => {
    const subtotal = cart.reduce((acc, product) => {
      const productQty = parseInt(product.qty) || 0;

      acc[product._id] = product.price * productQty;

      return acc;
    }, {});
    const total = cart.reduce((acc, product) => {
      const productQty = parseInt(product.qty) || 0;

      return acc + product.price * productQty;
    }, 0);

    return {
      ...subtotal,
      total: total,
    };
  }, [cart]);

  let value = {
    cart,
    addToCart,
    existingProduct,
    decrementQtyProduct,
    incrementQtyProduct,
    removeProductFromCart,
    updateInputProductQty,
    validateOnBlur,
    cartSummary,
  };

  return <CartContext value={value}>{children}</CartContext>;
};

export { CartContext, CartProvider };
