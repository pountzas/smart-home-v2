"use client";
import { modalTypeState } from "@/atoms/uiAtom";
import { useRecoilState } from "recoil";

type ChildrenProps = {
  children: React.ReactNode;
};
function FullModalPerformanceSummaryContainer({ children }: ChildrenProps) {
  const [modalType, setModalType] = useRecoilState(modalTypeState);

  return (
    <div
      className={`${
        modalType !== "Performance Summary" ? "hidden" : "block"
      }  `}
    >
      {children}
    </div>
  );
}

export default FullModalPerformanceSummaryContainer;
