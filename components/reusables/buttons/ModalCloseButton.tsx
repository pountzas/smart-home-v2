"use client";
import Close from "@/public/icons/Close";
import { useUIStore } from "@/atoms/uiAtom";

function ModalCloseButton() {
  const setRightmodalOpen = useUIStore((state) => state.setRightmodalOpenState);
  return (
    <button className="px-2" onClick={() => setRightmodalOpen(false)}>
      <Close />
    </button>
  );
}

export default ModalCloseButton;
