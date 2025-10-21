import { create } from "zustand";

interface UIStore {
  flowMiniVersionState: boolean;
  setFlowMiniVersionState: (value: boolean) => void;
  
  selectedModalCarState: number;
  setSelectedModalCarState: (value: number) => void;
  
  modalOpenState: boolean;
  setModalOpenState: (value: boolean) => void;
  
  rightmodalOpenState: boolean;
  setRightmodalOpenState: (value: boolean) => void;
  
  modalTypeState: string;
  setModalTypeState: (value: string) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  flowMiniVersionState: false,
  setFlowMiniVersionState: (value: boolean) => set({ flowMiniVersionState: value }),
  
  selectedModalCarState: 1,
  setSelectedModalCarState: (value: number) => set({ selectedModalCarState: value }),
  
  modalOpenState: false,
  setModalOpenState: (value: boolean) => set({ modalOpenState: value }),
  
  rightmodalOpenState: false,
  setRightmodalOpenState: (value: boolean) => set({ rightmodalOpenState: value }),
  
  modalTypeState: "none",
  setModalTypeState: (value: string) => set({ modalTypeState: value }),
}));
