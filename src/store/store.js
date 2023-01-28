import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
const hashStore = (set) => ({
     hash: '',
     phone: 0,
     email: '',
     isAuth: false,
     userName: '',
     userAvatar: '',
     isActivated: false,

     saveHash: (hash) => set((state) => ({ hash: hash })),
     savePhone: (phone) => set((state) => ({ phone: phone })),
     saveEmail: (email) => set((state) => ({ email: email })),
     saveisAuth: (value) => set((state) => ({ isAuth: value })),
     saveUserAvatar: (detail) => set((state) => ({ userAvatar: detail })),
     saveUserName: (detail) => set((state) => ({ userName: detail })),
     saveisActivated: (value) => set((state) => ({ isActivated: value })),
})

const useHashStore = create(
     devtools(
          persist(
               hashStore,
               {
                    name: 'hashStore',
                    // getStorage: () => localStorage,
               }
          )
     ))

export default useHashStore