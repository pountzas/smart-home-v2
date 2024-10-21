"use client";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";
import { rightmodalOpenState } from "@/atoms/uiAtom";
import { useEffect } from "react";

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
    <motion.div
      initial={{ x: rightmodalOpen ? 0 : "100%" }}
      animate={{ x: rightmodalOpen ? 0 : "100%" }}
      transition={{ duration: 0.4 }}
    >
      <div
        onClick={() => setRightModalOpen(false)}
        className="top-0 left-0 absolute z-[200] min-h-screen max-h-screen min-w-[100%] bg-primary opacity-70 blur-lg"
      ></div>
      {children}
    </motion.div>
  );
}

export default RightModalContainer;
