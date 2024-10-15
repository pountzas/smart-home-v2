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
      initial={{ width: flowMiniVersion ? "100%" : "100%" }}
      animate={{ width: flowMiniVersion ? "100%" : "100%" }}
      transition={{ duration: 0.4 }}
      className={`${flowMiniVersion && "col-span-2 sm:col-span-1"} `}
    >
      {children}
    </motion.div>
  );
}

export default PowerflowContainer;
