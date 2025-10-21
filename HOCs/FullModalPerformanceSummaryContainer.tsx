"use client";
import { useUIStore } from "@/atoms/uiAtom";

type ChildrenProps = {
  children: React.ReactNode;
};
function FullModalPerformanceSummaryContainer({ children }: ChildrenProps) {
  const modalType = useUIStore((state) => state.modalTypeState);

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
