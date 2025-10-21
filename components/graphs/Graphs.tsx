"use client";

import { CarsModalCardData } from "@/utils/evChargerUtils";
import ComponentsHeader from "../reusables/ComponentsHeader";
import StatsVerticalGraph from "../reusables/StatsVerticalGraph";
import { useUIStore } from "@/atoms/uiAtom";

function Graphs() {
  const modalOpen = useUIStore((state) => state.modalOpenState);

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
