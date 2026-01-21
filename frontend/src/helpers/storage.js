let cartStorageName = 'shopping_cart';

export const CartStorage = {
  save(data) {
    localStorage.setItem(cartStorageName, JSON.stringify(data));
  },

  get() {
    let local = localStorage.getItem(cartStorageName);
    if (local) {
      return JSON.parse(local);
    } else {
      return [];
    }
  },
};
