"use client";

import { useRecoilState } from "recoil";
import { modalOpenState } from "@/atoms/uiAtom";
import ExpandComponentIcon from "@/public/icons/ExpandComponentIcon";

function ModalButton() {
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenState);
  return (
    <button
      onClick={() => setModalOpen(true)}
      className="p-3 rounded-lg bg-buttonsPrimary"
      type="button"
    >
      <ExpandComponentIcon />
    </button>
  );
}

export default ModalButton;
