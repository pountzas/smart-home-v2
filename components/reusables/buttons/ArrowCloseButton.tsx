"use client";

import { modalOpenState } from "@/atoms/uiAtom";
import ArrowLeft from "@/public/icons/ArrowLeft";
import { useRecoilState } from "recoil";

import { motion } from "framer-motion";

function ArrowCloseButton() {
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenState);
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => setModalOpen(false)}
      className="pl-8"
    >
      <ArrowLeft size={16} />
    </motion.button>
  );
}

export default ArrowCloseButton;
