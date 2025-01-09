"use client";
import { flowMiniVersionState } from "@/atoms/uiAtom";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type ChildrenProps = {
  children: React.ReactNode;
};
function HomeComponentsContainerRight({ children }: ChildrenProps) {
  const [miniVersion, setMiniVersion] = useState(false);
  const [flowMiniVersion, setFlowMiniVersion] =
    useRecoilState(flowMiniVersionState);

  useEffect(() => {
    setMiniVersion(flowMiniVersion);
  }, [flowMiniVersion]);

  return (
    <div
      className={`${
        !miniVersion
          ? "2xl:col-span-2"
          : "col-span-5 col-start-3 sm:col-span-3 md:col-span-4 lg:col-span-6 2xl:col-span-9"
      } w-full grid overflow-y-scroll scrollbar-hide object-contain h-[65vh] lg:h-[72vh]`}
    >
      {children}
    </div>
  );
}

export default HomeComponentsContainerRight;
