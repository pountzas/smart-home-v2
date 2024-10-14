"use client";
import { useRecoilState } from "recoil";
import { modalTypeState } from "@/atoms/uiAtom";

function ModalTitle() {
  const [modalType] = useRecoilState(modalTypeState);
  return <h2>{modalType}</h2>;
}

export default ModalTitle;
