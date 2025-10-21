import { useSensorsStore } from "@/atoms/assetsAtom";
import { useUIStore } from "@/atoms/uiAtom";
import AnimationArrowsIcon from "@/public/icons/AnimationArrowsIcon";
import LostSignalIcon from "@/public/icons/LostSignalIcon";
import { useState } from "react";

type HomeSensorProps = {
  name: string;
  sensorId?: string;
  value: number | undefined;
  status?: string;
  icon: React.ReactNode;
};
function HomeSensor({ name, sensorId, value, status, icon }: HomeSensorProps) {
  const flowMiniVersion = useUIStore((state) => state.flowMiniVersionState);
  const sensorsValues = useSensorsStore((state) => state.sensorsValuesState);

  const [late, setLate] = useState(false);
  const [stop, setStop] = useState(true);

  const [battPositive, setBattPositive] = useState(true);
  const [battNegative, setBattNegative] = useState(false);
  const [gridPositive, setGridPositive] = useState(true);
  const [gridNegative, setGridNegative] = useState(false);
  const [solarPositive, setSolarPositive] = useState(true);
  const [carPositive, setCarPositive] = useState(true);
  const [big1Positive, setBig1Positive] = useState(false);
  const [big2Positive, setBig2Positive] = useState(true);

  const { wsConsValue } = sensorsValues;

  const colors = {
    gridAnimPos: "",
    gridAnimNeg: "",
    gridAnimPos2: "",
    gridAnimNeg2: "",

    solarAnim: "#008675",
    solarAnim2: "#00A590",
    battAnimPos: "",
    battAnimNeg: "",
    battAnimPos2: "",
    battAnimNeg2: ""
  };
  return (
    <div
      className={`${
        flowMiniVersion
          ? "pb-2"
          : " h-[188px] w-[293px] flex flex-col items-center justify-center"
      } relative cursor-pointer`}
    >
      {/* animation arrows*/}

      {!flowMiniVersion && (
        <div className="z-0">
          <div className="flex justify-between">
            {/* grid */}
            <div
              className={`${
                gridPositive && "anim-border-top-right anim-direction-left"
              } ${
                gridNegative && "anim-border-top-right anim-direction-right"
              } h-[123px] w-[92px] relative`}
            >
              <div
                className={`absolute translate-x-[-10px] translate-y-[-3px] z-[200]`}
              >
                {gridPositive && (
                  <AnimationArrowsIcon
                    // className="z-[200]"
                    color1={colors.gridAnimPos}
                    color2={colors.gridAnimPos2}
                  />
                )}
                {gridNegative && (
                  <div className="transform rotate-180 z-[200]">
                    <AnimationArrowsIcon
                      color1={colors.gridAnimNeg}
                      color2={colors.gridAnimNeg2}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className={`h-[123px] w-[55px]`}></div>
            {/* solar */}
            <div
              className={`${
                solarPositive && "anim-direction-left  anim-border-line"
              } w-[59px] h-[80px] relative`}
            >
              <div
                className={`absolute translate-x-[-10px] translate-y-[-3px] z-[200]`}
              >
                {solarPositive && (
                  <AnimationArrowsIcon
                    color1={colors.solarAnim}
                    color2={colors.solarAnim2}
                  />
                )}
              </div>
            </div>
            {/* battery */}
            <div
              className={`${
                battPositive && "anim-border-top-left anim-direction-left"
              }
      ${battNegative && "anim-border-top-left anim-direction-right"}
      h-[123px] w-[92px] relative`}
            >
              <div
                className={`absolute z-[200] ${
                  battNegative &&
                  "right-0 translate-x-[10px] translate-y-[-3px]"
                }
          ${
            battPositive &&
            " bottom-0 rotate-[270deg] translate-x-[10px] translate-y-[13px]"
          }`}
              >
                {battNegative && (
                  <AnimationArrowsIcon
                    color1={colors.battAnimPos}
                    color2={colors.battAnimPos2}
                  />
                )}
                {battPositive && (
                  <AnimationArrowsIcon
                    color1={colors.battAnimNeg}
                    color2={colors.battAnimNeg2}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="h-[25px]"></div>
          <div className="flex items-end">
            {/* car */}
            <div
              className={`${
                carPositive && "anim-border-bottom-right anim-direction-left"
              } h-[123px] w-[92px] relative`}
            >
              <div
                className={`absolute rotate-[90deg] right-0 translate-x-[-10px] translate-y-[-13px]`}
              >
                {carPositive && <AnimationArrowsIcon color1={``} color2={``} />}
              </div>
            </div>
            <div className={`h-[123px] w-[55px]`}></div>
            {/* big load 1 */}
            <div
              className={`${
                big1Positive && "anim-direction-left  anim-border-line"
              } w-[59px] h-[80px] relative`}
            >
              <div
                className={`absolute translate-x-[-10px] translate-y-[10px]`}
              >
                {big1Positive && (
                  <AnimationArrowsIcon color1={``} color2={``} />
                )}
              </div>
            </div>
            {/* big load 2 */}
            <div
              className={`${
                big2Positive && "anim-border-bottom-left anim-direction-right"
              } h-[123px] w-[92px] relative`}
            >
              <div
                className={`absolute rotate-[270deg] translate-x-[10px] translate-y-[-12px]`}
              >
                {big2Positive && (
                  <AnimationArrowsIcon color1={``} color2={``} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`${
          flowMiniVersion
            ? !late
              ? "anim-direction-right border-[1px]"
              : "border-[1px] border-grid"
            : late
            ? "bg-grid animate-pulse rounded-full absolute z-0 p-1"
            : "bg-gradient-to-br from-homePrimary via-homeSecondary to-homeTertiary rounded-full absolute z-0 p-1"
        } `}
      >
        <div
          className={`${
            flowMiniVersion
              ? "h-[64px] w-[85px] sm:w-[114.67px] pl-2"
              : "h-[132px] w-[132px] items-center"
          } flex  flex-col  justify-center rounded-full bg-secondary`}
        >
          <div
            className={`${
              flowMiniVersion
                ? "flex items-center justify-start space-x-2 sm:space-x-3"
                : "flex flex-col items-center justify-center space-y-1 text-sm"
            } `}
          >
            <div className="flex items-start space-x-1 ">
              {icon}

              {/* {secondarySensorId != null && <p>{endValue}%</p>} */}
            </div>

            <div
              className={`${
                flowMiniVersion ? "text-xs" : "flex flex-col items-center"
              }`}
            >
              {!late ? (
                <p
                  className={`${
                    flowMiniVersion ? "text-xs" : "text-lg font-semibold"
                  }`}
                >
                  {wsConsValue > 0
                    ? wsConsValue > 800
                      ? (wsConsValue / 1000).toFixed(1)
                      : wsConsValue.toFixed(0)
                    : 0}{" "}
                  {wsConsValue > 800 ? "kW" : "watt"}
                </p>
              ) : (
                <LostSignalIcon />
              )}

              <div className="flex justify-between">
                <p>{name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSensor;
