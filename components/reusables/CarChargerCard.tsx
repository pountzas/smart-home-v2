import PercentageBar from "./PercentageBar";
import CarScheduleCard from "./CarScheduleCard";
import StatusButton from "./buttons/StatusButton";
import ProgressCircle from "@/public/icons/ProgressCircle";
import CircleLoadLines from "@/public/icons/CircleLoadLines";
import Stop from "@/public/icons/Stop";
import Booster from "@/public/icons/Booster";

function CarChargerCard({ cars, carIndex }: CarDetailsTypes) {
  const { schedules } = cars[carIndex];

  const calculatePercentage = (value: number, max: number) => {
    return Math.round((value / max) * 100);
  };

  return (
    <div className="p-4 bg-tertiary rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <h4 className="">{cars[carIndex].car}</h4>
          <h4 className="text-textTertiary">EV Charger</h4>
        </div>
        <StatusButton status="Charging" />
      </div>
      {/* car charge info */}
      <div className="relative pt-4">
        <div className="flex flex-col items-center justify-center">
          <div className="z-10">
            <CircleLoadLines />
          </div>
          <div className="rotate-[130deg] absolute top-[40px]">
            <ProgressCircle
              progressColor={"#0094FF"}
              progressRemainingColor={"#16191B"}
              percent={calculatePercentage(
                cars[carIndex].carBalance[0],
                cars[carIndex].carBalance[1]
              )}
            />
          </div>
          <div className="absolute z-20 items-center">
            <div className="flex items-center justify-center space-x-1">
              <h4 className="text-2xl font-bold">
                {cars[carIndex].carBalance[0]}
              </h4>
              <h4 className="font-light text-textTertiary">kW</h4>
            </div>
            <h5 className="font-semibol">Dynamic Balancing</h5>
          </div>
          <div className="absolute flex items-center z-20 justify-center space-x-1 top-[260px] pl-44">
            <h4 className="text-xl font-semibold text-textTertiary">
              {cars[carIndex].carBalance[1]}
            </h4>
            <h4 className="font-light text-textSecondary">kW</h4>
          </div>
          <div className="flex items-center py-2 space-x-6">
            <button>
              <Stop fill="white" size={34} />
            </button>

            <button className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue_custom">
              <Booster />
            </button>
          </div>
        </div>

        <div className="pt-4 ">
          <h5 className="text-sm">Current Session</h5>
          <div className="grid grid-cols-3 gap-4 pt-2">
            <div className="bg-quaternary p-2 h-[66px] rounded-lg">
              <h5 className="">Charged</h5>
              <div className="flex items-center space-x-2">
                <p>2</p>
                <p className="text-textTertiary">kWh</p>
              </div>
            </div>
            <div className="bg-quaternary p-2 h-[66px] rounded-lg">
              <h5 className="">Charging Time</h5>
              <div className="flex items-center space-x-2">
                <p>2</p>
                <p className="text-textTertiary">h</p>
              </div>
            </div>
            <div className="bg-quaternary p-2 h-[66px] rounded-lg">
              <h5 className="">Cost</h5>
              <div className="flex items-center space-x-2">
                <p className="text-textTertiary">£</p>
                <p>2</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flex items-center justify-between pb-2">
            <h4 className="text-sm">Schedules</h4>
            {/* <AddButton click={null} /> */}
          </div>
          <div className="space-y-2">
            {schedules.map((item, index) => {
              return <CarScheduleCard key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
      <PercentageBar
        title={`Usage`}
        topLeft={`Off-Peak`}
        topRight={`${cars[carIndex].offPeakData[0]}%`}
        startValue={cars[carIndex].offPeakData[0]}
        endValue={cars[carIndex].offPeakData[1]}
      />
      <PercentageBar
        topLeft={`Mid-Peak`}
        topRight={`${cars[carIndex].midPeakData[0]}%`}
        startValue={cars[carIndex].midPeakData[0]}
        endValue={cars[carIndex].midPeakData[1]}
      />
      <PercentageBar
        topLeft={`Peak`}
        topRight={`${cars[carIndex].peakData[0]}%`}
        startValue={cars[carIndex].peakData[0]}
        endValue={cars[carIndex].peakData[1]}
      />
    </div>
  );
}

export default CarChargerCard;
