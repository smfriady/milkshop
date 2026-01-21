import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('Error Cart Context');
  }
  return context;
};
