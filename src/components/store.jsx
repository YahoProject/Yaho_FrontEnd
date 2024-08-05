
import {create} from 'zustand';

const useStore = create((set) => ({
  name: null,
  token: null,
  setName: (name) => set({ name }),
  setToken: (token) => set({ token })
}));

export default useStore;
