import { createContext, useEffect, useState } from 'react';
import { CartStorage } from '../helpers/storage';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // state untuk menyimpan data product
  const [cart, setCart] = useState(() => CartStorage.get());

  useEffect(() => {
    CartStorage.save(cart);
  }, [cart]);

  let value = { cart };

  return <CartContext value={value}>{children}</CartContext>;
};

export { CartContext, CartProvider };
