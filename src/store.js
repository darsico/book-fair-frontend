import create from 'zustand';
import { persist } from 'zustand/middleware';

const productInitialState = {
  title: 'Book Title',
  author: 'Author Name',
  price: 0,
  description: 'This is a description',
  bookImage: '',
  stock: 1,
};

export const useProductStore = create((set) => ({
  ...productInitialState,
  setStock: (stock) => set({ stock }),
  setAuthor: (author) => set({ author }),
  setBookImage: (bookImage) => set({ bookImage }),
  setDescription: (description) => set({ description }),
  setTitle: (title) => set({ title }),
  setPrice: (price) => set({ price }),
  resetProductStore: () => set(productInitialState),
  setIsOpenCart: (isOpenCart) => set({ isOpenCart }),
  isOpenCart: false,
}));

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      setCart: (data) =>
        set((state) => {
          const doesProductExist = state.cart.find((item) => item.bookId === data.bookId);

          if (doesProductExist) {
            return {
              cart: state.cart.map((item) => {
                if (item.bookId === data.bookId) {
                  return {
                    ...item,
                    quantity: item.quantity + 1,
                  };
                }
                return item;
              }),
            };
          }
          return {
            cart: [...state.cart, data],
          };
        }),

      clearCart: () => set(() => ({ cart: [] })),

      removeCart: (id) => set((state) => ({ ...state, cart: state.cart.filter((element) => element.bookId !== id) })),

      clearCart: () => set(() => ({ cart: [] })),

      getSubtotal: () => {
        const cart = get().cart;
        let subTotal = cart.reduce((acc, item) => acc + item.quantity * item.price, 0) || 0;
        return subTotal;
      },

      decreaseOne: (id) =>
        set((state) => {
          let itemToDelete = state.cart.find((item) => item.bookId === id); // get the item to delete
          return itemToDelete.quantity > 1
            ? {
              ...state,
              cart: state.cart.map((item) => (item.bookId === id ? { ...item, quantity: item.quantity - 1 } : item)),
            }
            : { ...state, cart: state.cart.filter((item) => item.bookId !== id) };
        }),
      increaseOne: (id) =>
        set((state) => {
          return {
            ...state,
            cart: state.cart.map((item) => (item.bookId === id ? { ...item, quantity: item.quantity + 1 } : item)),
          };
        }),
    }),
    { name: 'cart', storage: typeof window !== 'undefined' ? window.localStorage : dummyStorageApi }
  )
);
