import { atom } from "recoil";

export const flowMiniVersionState = atom({
  key: "flowMiniVersionState",
  default: false
});

export const selectedModalCarState = atom({
  key: "selectedModalCarState",
  default: 1
});

export const modalOpenState = atom({
  key: "modalOpenState",
  default: false
});

export const rightmodalOpenState = atom({
  key: "rightmodalOpenState",
  default: false
});

export const fullModalTypeState = atom({
  key: "fullModalTypeState",
  default: "none"
});
