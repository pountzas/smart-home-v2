"use client";

import { flowMiniVersionState } from "@/atoms/uiAtom";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";

type ChildrenProps = {
  children: React.ReactNode;
};

function PowerflowContainer({ children }: ChildrenProps) {
  const [flowMiniVersion, setFlowMiniVersion] =
    useRecoilState(flowMiniVersionState);
  return (
    <motion.div
      className={`${
        flowMiniVersion ? "flex flex-col items-center justify-start" : ""
      } object-contain rounded-lg bg-secondary pt-2`}
    >
      {children}
    </motion.div>
  );
}

export default PowerflowContainer;
