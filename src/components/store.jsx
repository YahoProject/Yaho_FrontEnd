
import {create} from 'zustand';

const useStore = create((set) => ({
  code: null,
  token: null,
  setCode: (code) => set({ code }),
  setToken: (token) => set({ token })
}));

export default useStore;
