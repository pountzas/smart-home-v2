"use client";
import { useUIStore } from "@/atoms/uiAtom";

function ModalTitle() {
  const modalType = useUIStore((state) => state.modalTypeState);
  return <h2>{modalType}</h2>;
}

export default ModalTitle;
