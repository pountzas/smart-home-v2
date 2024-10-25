"use client";
import { modalTypeState } from "@/atoms/uiAtom";
import { useRecoilState } from "recoil";

type ChildrenProps = {
  children: React.ReactNode;
};
function FullModalEvChargerContainer({ children }: ChildrenProps) {
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  return (
    <div className={`${modalType !== "EvCharger" ? "hidden" : "block"}  `}>
      {children}
    </div>
  );
}

export default FullModalEvChargerContainer;
