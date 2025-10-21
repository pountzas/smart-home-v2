"use client";
import { useUIStore } from "@/atoms/uiAtom";

type ChildrenProps = {
  children: React.ReactNode;
};
function FullModalEvChargerContainer({ children }: ChildrenProps) {
  const modalType = useUIStore((state) => state.modalTypeState);
  return (
    <div className={`${modalType !== "EvCharger" ? "hidden" : "block"}  `}>
      {children}
    </div>
  );
}

export default FullModalEvChargerContainer;
