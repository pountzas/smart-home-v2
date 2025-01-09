"use client";
import Info from "@/public/icons/Info";
import VerticalBar from "./VerticalBar";
import { selectedModalCarState } from "@/atoms/uiAtom";
import { useRecoilState } from "recoil";

function StatsVerticalGraph({ cars }: CarDetailsTypes) {
  const [selectedModalCar, setSelectedModalCar] = useRecoilState(
    selectedModalCarState
  );
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

            {/* measurment lines */}
            <div className="absolute z-0 flex flex-col justify-between w-full h-full pl-6 text-right ">
              <div className="flex items-center justify-between w-full space-x-1 text-xs text-textSecondary">
                <p>100</p>
                <div className="w-[100%] h-[2px] bg-textSecondary"></div>
              </div>
              <div className="flex items-center justify-between w-full space-x-1 text-xs text-textSecondary">
                <p>75</p>
                <div className="w-[100%] h-[2px] bg-textSecondary"></div>
              </div>
              <div className="flex items-center justify-between w-full space-x-1 text-xs text-textSecondary">
                <p>50</p>
                <div className="w-[100%] h-[2px] bg-textSecondary"></div>
              </div>
              <div className="flex items-center justify-between w-full space-x-1 text-xs text-textSecondary">
                <p>25</p>
                <div className="w-[100%] h-[2px] bg-textSecondary"></div>
              </div>
              <div className="flex items-center justify-between w-full space-x-1 text-xs text-textSecondary">
                <p>0</p>
                <div className="w-[100%] h-[2px] bg-textSecondary"></div>
              </div>
            </div>

            <div className="absolute z-20 h-[400px] w-full flex items-end justify-between pl-12 pr-2 pt-80">
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

            <div className=" h-[400px] z-10 w-full flex items-end justify-between pl-12 pr-2 pt-80">
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
            <div>
              <p className="text-textTertiary">1/11</p>
            </div>
            <div>
              <p className="text-textTertiary">6/11</p>
            </div>
            <div>
              <p className="text-textTertiary">11/11</p>
            </div>
            <div>
              <p className="text-textTertiary">16/11</p>
            </div>
            <div>
              <p className="text-textTertiary">21/11</p>
            </div>
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
