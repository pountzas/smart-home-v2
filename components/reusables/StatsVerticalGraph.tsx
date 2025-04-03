"use client";
import Info from "@/public/icons/Info";
import VerticalBar from "./VerticalBar";
import { selectedModalCarState } from "@/atoms/uiAtom";
import { useRecoilState } from "recoil";

function StatsVerticalGraph({ cars }: CarDetailsTypes) {
  const [selectedModalCar, setSelectedModalCar] = useRecoilState(
    selectedModalCarState
  );

  const lineValues = [100, 75, 50, 25, 0];
  const dateValues = ["1/11", "6/11", "11/11", "16/11", "21/11", "26/11"];
  return (
    <div className="px-4 pb-4">
      <div className="p-4 space-y-2 rounded-xl bg-tertiary">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* title */}
            <h2>Charge Stats</h2>
            {/* secondary */}
            <h3 className="text-textTertiary">Monthly</h3>
          </div>
          <Info size={20} fill={"#0094FF"} />
        </div>

        <div className="flex items-center space-x-3 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-5 rounded-full h-[4px] bg-lightBlue_custom"></div>
            <h5>Balanced</h5>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-5 rounded-full h-[4px] bg-blue_custom"></div>
            <h5>Boost</h5>
          </div>
        </div>

        <div>
          {/* LineChart */}
          <div className="relative flex pt-2">
            <div className="absolute text-lg -rotate-90 top-[40%] -left-16 whitespace-nowrap">
              Consumption kWh
            </div>

            {/* measurment lines values */}
            <div className="absolute z-0 flex flex-col justify-between w-full h-full pl-6 text-right ">
              {lineValues.map((value, i) => {
                return (
                  <div
                    className="flex items-center justify-between w-full space-x-1 text-xs text-textSecondary"
                    key={value + i}
                  >
                    <p>{value}</p>
                    <div className="w-[100%] h-[2px] bg-textSecondary"></div>
                  </div>
                );
              })}
            </div>

            <div className="absolute z-10 h-[400px] w-full flex items-end justify-between pl-12 pr-2 pt-80">
              {cars[selectedModalCar].balanced.map((value, i) => {
                return (
                  <VerticalBar
                    value={value}
                    index={i}
                    color={"bg-lightBlue_custom"}
                    key={i}
                  />
                );
              })}
            </div>

            <div className=" h-[400px] z-0 w-full flex items-end justify-between pl-12 pr-2 pt-80">
              {cars[selectedModalCar].boosted.map((value, i) => {
                return (
                  <VerticalBar
                    value={value}
                    index={i}
                    key={i}
                    color={"bg-blue_custom"}
                  />
                );
              })}
            </div>
          </div>

          {/* dates */}
          <div className="flex items-center justify-between pt-2 pb-3 text-sm pl-9">
            {dateValues.map((date, i) => {
              return (
                <div
                  className="flex items-center justify-center w-full h-full"
                  key={date + i}
                >
                  <p className="text-textTertiary">{date}</p>
                </div>
              );
            })}
            <div>
              <p className="text-textTertiary">26/11</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsVerticalGraph;
