"use client";
import { flowMiniVersionState } from "@/atoms/uiAtom";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";

type ChildrenProps = {
  children: React.ReactNode;
};
function HomeComponentsContainer({ children }: ChildrenProps) {
  const [flowMiniVersion, setFlowMiniVersion] =
    useRecoilState(flowMiniVersionState);

  return (
    <div
      className={`w-full justify-between grid grid-rows-1 row-span-6 object-contain gap-4 px-4 text-textPrimary ${
        flowMiniVersion
          ? "grid-cols-7 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 2xl:grid-cols-10"
          : "lg:grid-cols-2 2xl:grid-cols-3"
      }`}
    >
      {children}
    </div>
  );
}

export default HomeComponentsContainer;
