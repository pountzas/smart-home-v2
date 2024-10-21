"use client";
import Close from "@/public/icons/Close";
import { rightmodalOpenState } from "@/atoms/uiAtom";
import { useRecoilState } from "recoil";

function ModalCloseButton() {
  const [rightmodalOpen, setRightmodalOpen] =
    useRecoilState(rightmodalOpenState);
  return (
    <button className="px-2" onClick={() => setRightmodalOpen(false)}>
      <Close />
    </button>
  );
}

export default ModalCloseButton;
