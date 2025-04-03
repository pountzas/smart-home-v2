"use client";

import { CarsModalCardData } from "@/utils/evChargerUtils";
import ComponentsHeader from "../reusables/ComponentsHeader";
import StatsVerticalGraph from "../reusables/StatsVerticalGraph";
import { modalOpenState } from "@/atoms/uiAtom";
import { useRecoilState } from "recoil";

function Graphs() {
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenState);
  return (
    <div className="flex flex-col rounded-lg bg-secondary mb-4 py-3">
      <ComponentsHeader title="Power Curves" note="Spot Values" />

      <div className="p-2">
        {!modalOpen && <StatsVerticalGraph cars={CarsModalCardData} />}
      </div>
    </div>
  );
}

export default Graphs;
