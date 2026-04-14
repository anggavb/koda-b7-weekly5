import { create } from "zustand";

const useLogoutStore = create((set) => ({
  modalLogout: false,
  toggleModalLogout: () => set(state => ({ modalLogout: !state.modalLogout })),
}));

export default useLogoutStore;
