import create from 'zustand'
import { persist } from 'zustand/middleware'

const productInitialState = {
 title: '',
 author: '',
 price: 0,
 description: '',
 bookImage: '',
 stock: 0,
}

export const useProductStore = create(set => ({
 ...productInitialState,
 setStock: (stock) => set({ stock }),
 setAuthor: author => set({ author }),
 setBookImage: (bookImage) => set({ bookImage }),
 setDescription: description => set({ description }),
 setTitle: title => set({ title }),
 setPrice: price => set({ price }),
 resetProductStore: () => set(productInitialState),
}))

export const useAuthStore = create(persist(set => ({
 isUserLoggedIn: false,
 token: null,
 logUser: isUserLoggedIn => set({ isUserLoggedIn }),
 setToken: token => set({ token }),
})))



