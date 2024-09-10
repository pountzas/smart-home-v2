"use client";

import { useState } from "react";
import {
  CarsModalCardData,
  CostData,
  EmissionsData,
  MidPeakData,
  PeakData,
  UsageData
} from "@/utils/evChargerUtils";
function EvCharger() {
  const [emissions, setEmissions] = useState(EmissionsData);
  const [cost, setCost] = useState(CostData);
  const [usage, setUsage] = useState(UsageData);
  const [midPeak, setMidPeak] = useState(MidPeakData);
  const [peak, setPeak] = useState(PeakData);
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="pt-5 pb-3 space-y-1 rounded-lg bg-secondary">
        <ComponentsHeader
          title="EvCharger"
          expandClick={null}
          count={CarsModalCardData.length}
          open={() => setModal(true)}
          onClose={() => setModal(false)}
        />
        <div className="px-6">
          <PercentageBar
            title={`Total Emissions`}
            topLeft={`Optimized`}
            topRight={`default`}
            bottomLeft={`£${emissions[0]}`}
            bottomRight={`£${emissions[1]}`}
            startValue={emissions[0]}
            endValue={emissions[1]}
          />
          <PercentageBar
            title={`Total Cost`}
            topLeft={`Till Date`}
            topRight={`Predicted`}
            bottomLeft={`${cost[0]}Kg of CO2`}
            bottomRight={`${cost[1]}Kg of CO2`}
            startValue={cost[0]}
            endValue={cost[1]}
          />
          <div className="pt-4">
            {CarsModalCardData.map((item, index) => (
              <CarExpandCard key={index} item={item} />
            ))}
          </div>
          <PercentageBar
            title={`Usage`}
            topLeft={`Off-Peak`}
            topRight={`${usage[0]}%`}
            startValue={usage[0]}
            endValue={usage[1]}
          />
          <PercentageBar
            topLeft={`Mid-Peak`}
            topRight={`${midPeak[0]}%`}
            startValue={midPeak[0]}
            endValue={midPeak[1]}
          />
          <PercentageBar
            topLeft={`Peak`}
            topRight={`${peak[0]}%`}
            startValue={peak[0]}
            endValue={peak[1]}
          />
        </div>
      </div>
      <FullModal
        open={modal}
        onClose={() => setModal(false)}
        cars={CarsModalCardData}
        modalTitle="EV Chargers"
      />
    </>
  );
}

export default EvCharger;
