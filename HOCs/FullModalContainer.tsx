"use client";

import { useEffect } from "react";

import { motion } from "framer-motion";
import { modalOpenState } from "@/atoms/uiAtom";
import { useRecoilState } from "recoil";
import { ChildrenProps } from "@/typings";

export default function FullModalContainer({ children }: ChildrenProps) {
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenState);

  const escKeyDown = (e: KeyboardEvent) => {
    if (e.key === "27" || e.key === "Escape") {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escKeyDown);
    return () => {
      setModalOpen(false);
      document.removeEventListener("keydown", escKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ x: modalOpen ? 0 : "100%" }}
      animate={{ x: modalOpen ? 0 : "100%" }}
      transition={{ duration: 0.4 }}
      className="absolute top-0 right-0 min-h-screen max-h-screen w-full z-[500] bg-secondary text-white flex flex-col"
    >
      {children}
    </motion.div>
  );
}
