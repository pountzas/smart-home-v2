"use client";
import { flowMiniVersionState } from "@/atoms/uiAtom";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";

type ChildrenProps = {
  children: React.ReactNode;
};
function HomeComponentsContainerRight({ children }: ChildrenProps) {
  const [flowMiniVersion, setFlowMiniVersion] =
    useRecoilState(flowMiniVersionState);

  return (
    <div
      className={`${
        flowMiniVersion
          ? "col-span-5 col-start-3 sm:col-span-3 md:col-span-4 lg:col-span-6 2xl:col-span-9"
          : "2xl:col-span-2"
      } w-full grid overflow-y-scroll scrollbar-hide object-contain h-[65vh] lg:h-[72vh]`}
    >
      {children}
    </div>
  );
}

export default HomeComponentsContainerRight;
