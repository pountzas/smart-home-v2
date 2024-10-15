import {
  CarsModalCardData,
  CostData,
  EmissionsData,
  MidPeakData,
  PeakData,
  UsageData
} from "@/utils/evChargerUtils";
import ComponentsHeader from "../reusables/ComponentsHeader";
import PercentageBar from "../reusables/PercentageBar";
import CarExpandCard from "../reusables/CarExpandCard";
function EvCharger() {
  return (
    <div className="pt-5 pb-3 space-y-1 rounded-lg bg-secondary">
      <ComponentsHeader title="EvCharger" count={CarsModalCardData.length} />
      <div className="px-6">
        <PercentageBar
          title={`Total Emissions`}
          topLeft={`Optimized`}
          topRight={`default`}
          bottomLeft={`£${EmissionsData[0]}`}
          bottomRight={`£${EmissionsData[1]}`}
          startValue={EmissionsData[0]}
          endValue={EmissionsData[1]}
        />
        <PercentageBar
          title={`Total Cost`}
          topLeft={`Till Date`}
          topRight={`Predicted`}
          bottomLeft={`${CostData[0]}Kg of CO2`}
          bottomRight={`${CostData[1]}Kg of CO2`}
          startValue={CostData[0]}
          endValue={CostData[1]}
        />
        <div className="pt-4">
          {CarsModalCardData.map((item, index) => (
            <CarExpandCard key={index} item={item} />
          ))}
        </div>
        <PercentageBar
          title={`Usage`}
          topLeft={`Off-Peak`}
          topRight={`${UsageData[0]}%`}
          startValue={UsageData[0]}
          endValue={UsageData[1]}
        />
        <PercentageBar
          topLeft={`Mid-Peak`}
          topRight={`${MidPeakData[0]}%`}
          startValue={MidPeakData[0]}
          endValue={MidPeakData[1]}
        />
        <PercentageBar
          topLeft={`Peak`}
          topRight={`${PeakData[0]}%`}
          startValue={PeakData[0]}
          endValue={PeakData[1]}
        />
      </div>
    </div>
  );
}

export default EvCharger;
