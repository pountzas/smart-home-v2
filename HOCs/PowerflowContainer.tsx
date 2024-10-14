"use client";

import { flowMiniVersionState } from "@/atoms/uiAtom";
import { useRecoilState } from "recoil";

type ChildrenProps = {
  children: React.ReactNode;
};

function PowerflowContainer({ children }: ChildrenProps) {
  const [flowMiniVersion, setFlowMiniVersion] =
    useRecoilState(flowMiniVersionState);
  return (
    <div className={`${flowMiniVersion && "col-span-2 sm:col-span-1"} `}>
      {children}
    </div>
  );
}

export default PowerflowContainer;
