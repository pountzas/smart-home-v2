"use client";

import { modalOpenState, rightmodalOpenState } from "@/atoms/uiAtom";
import ArrowLeft from "@/public/icons/ArrowLeft";
import { useRecoilState } from "recoil";

import { motion } from "framer-motion";

function ArrowCloseButton() {
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenState);
  const [rightModalOpen, setRightModalOpen] =
    useRecoilState(rightmodalOpenState);

  const closeModals = () => {
    setModalOpen(false);
    setRightModalOpen(false);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => closeModals()}
      className="pl-8"
    >
      <ArrowLeft size={16} />
    </motion.button>
  );
}

export default ArrowCloseButton;
