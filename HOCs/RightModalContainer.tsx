"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useUIStore } from "@/atoms/uiAtom";

type ChildrenProps = {
  children: React.ReactNode;
};

function RightModalContainer({ children }: ChildrenProps) {
  const rightmodalOpen = useUIStore((state) => state.rightmodalOpenState);
  const setRightModalOpen = useUIStore((state) => state.setRightmodalOpenState);

  const escKeyDown = (e: KeyboardEvent) => {
    if (e.key === "27" || e.key === "Escape") {
      setRightModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escKeyDown);
    return () => {
      document.removeEventListener("keydown", escKeyDown);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: rightmodalOpen ? 0 : 0 }}
        animate={{ opacity: rightmodalOpen ? 0.7 : 0 }}
        onClick={() => setRightModalOpen(false)}
        className={`${
          !rightmodalOpen && "hidden"
        } top-0 right-0 z-50 absolute w-full h-screen bg-secondary blur-3xl`}
      ></motion.div>
      <motion.div
        initial={{ x: rightmodalOpen ? 0 : "100%" }}
        animate={{ x: rightmodalOpen ? 0 : "100%" }}
        transition={{ duration: 0.4 }}
        className={`absolute top-0 right-0 rounded-l-xl overscroll-contain min-h-screen max-h-screen min-w-[40vw] max-w-[40vw] z-10  bg-secondary flex flex-col`}
      >
        {children}
      </motion.div>
    </>
  );
}

export default RightModalContainer;
