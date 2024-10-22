"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { rightmodalOpenState } from "@/atoms/uiAtom";
import { useRecoilState } from "recoil";

type ChildrenProps = {
  children: React.ReactNode;
};

function RightModalContainer({ children }: ChildrenProps) {
  const [rightmodalOpen, setRightModalOpen] =
    useRecoilState(rightmodalOpenState);

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
        initial={{ x: rightmodalOpen ? 0 : "100%" }}
        animate={{ x: rightmodalOpen ? 0 : "100%" }}
        transition={{ duration: 0.4 }}
        className={`absolute top-0 right-0 rounded-l-xl overscroll-contain min-h-screen max-h-screen min-w-[40vw] max-w-[40vw] z-10  bg-secondary flex flex-col`}
      >
        {children}
      </motion.div>
      <div
        onClick={() => setRightModalOpen(false)}
        className={`${
          !rightmodalOpen && "hidden"
        } top-0 left-0 absolute min-h-screen max-h-screen min-w-[100%] bg-primary opacity-70 blur-lg`}
      ></div>
    </>
  );
}

export default RightModalContainer;
