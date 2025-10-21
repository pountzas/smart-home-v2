"use client";

import { useUIStore } from "@/atoms/uiAtom";
import ArrowLeft from "@/public/icons/ArrowLeft";

import { motion } from "framer-motion";

function ArrowCloseButton() {
  const setModalOpen = useUIStore((state) => state.setModalOpenState);
  const setRightModalOpen = useUIStore((state) => state.setRightmodalOpenState);

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
