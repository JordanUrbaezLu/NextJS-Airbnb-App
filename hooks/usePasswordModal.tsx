import { create } from "zustand";

interface PasswordModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const usePasswordModal = create<PasswordModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
