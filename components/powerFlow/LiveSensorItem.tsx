"use client";

import {
  flowMiniVersionState,
  rightmodalOpenState,
  modalTypeState
} from "@/atoms/uiAtom";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";
import DetailsIcon from "@/public/icons/DetailsIcon";
import DeviceInfo from "@/public/icons/DeviceInfoIcon";
import LostSignalIcon from "@/public/icons/LostSignalIcon";
import { sensorsUUIDsState, sensorsValuesState } from "@/atoms/assetsAtom";
import { useState } from "react";

type LiveSensorItemProps = {
  active: string;
  devices?: any;
  icon: React.ReactNode;
  inactive: string;
  name: string;
  power?: number;
  secondary: string;
  secondarySensorId?: string | null;
  sensorId?: string;
  startValue?: number;
  status?: string;
  value: number;
  endValue?: number;
};
function LiveSensorItem({
  active,
  devices,
  endValue,
  icon,
  inactive,
  name,
  power,
  secondary,
  secondarySensorId,
  sensorId,
  startValue,
  status,
  value
}: LiveSensorItemProps) {
  const [flowMiniVersion, setFlowMiniVersion] =
    useRecoilState(flowMiniVersionState);
  const [modal, setModal] = useRecoilState(rightmodalOpenState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  const [sensorsValues, setSensorsValues] = useRecoilState(sensorsValuesState);
  const [sensorsUUIDs, setSensorsUUIDs] = useRecoilState(sensorsUUIDsState);

  const [late, setLate] = useState(false);
  const [negative, setNegative] = useState(false);
  const [type, setType] = useState("");

  const openModal = () => {
    setModal(true);
    setModalType(name);
    // mainDispatch({
    //   activeGraphGen: false,
    //   activeGraphBatt: false,
    //   activeGraphCons: false,
    //   activeGraphExp: false,
    //   activeGraphImp: false
    // });
  };
  return (
    <>
      <div
        onClick={() => {
          openModal();
        }}
        className={`${
          !late
            ? active
              ? `anim-direction-right border-[1px]`
              : negative
              ? `anim-direction-left border-[1px]`
              : ``
            : "border-grid border-[1px] animate-pulse"
        }
      
      ${flowMiniVersion ? `h-[64px]` : `h-[140px]`}
      z-0 flex w-[85px] sm:w-[114.67px] flex-col justify-between cursor-pointer bg-tertiary p-1 shadow-md`}
      >
        {!flowMiniVersion && (
          <div className="flex items-start justify-end pt-1 pr-1 space-x-3 text-textPrimary">
            <DetailsIcon />
            <DeviceInfo />
          </div>
        )}

        <div
          className={`${
            flowMiniVersion
              ? "items-center space-x-1 sm:space-x-2 pt-[11px]"
              : "flex-col items-start"
          } bottom-0 flex  pl-1 text-sm`}
        >
          <div className="flex items-start space-x-1 ">
            <div className={`${late && "animate-pulse"}`}>{icon}</div>
            {!flowMiniVersion && secondarySensorId != null && (
              <p>{endValue}%</p>
            )}
          </div>
          <div className={`${flowMiniVersion && "flex flex-col-reverse"}`}>
            <div
              className={`${
                flowMiniVersion && "text-xs"
              } flex justify-between `}
            >
              <p
                className={`${
                  flowMiniVersion && " w-[50px] sm:w-[60px]"
                } overflow-hidden whitespace-nowrap text-ellipsis`}
              >
                {name}
              </p>
            </div>
            {!late ? (
              <p
                className={`${
                  flowMiniVersion ? "text-xs" : "2xl:text-lg font-semibold"
                } whitespace-nowrap`}
              >
                {value > 0 ? value : value * -1} kW
              </p>
            ) : (
              <LostSignalIcon />
            )}
          </div>
          {!flowMiniVersion && !late ? (
            value > 0.06 ? (
              <p className={`${name == "Grid" ? "text-grid" : "text-active"}`}>
                {active}
              </p>
            ) : value < 0 ? (
              <p
                className={`${name == "Battery" && "text-secondary"} ${
                  name == "Grid" && "text-active"
                }`}
              >
                {secondary}
              </p>
            ) : (
              <p className={`text-inactive`}>{inactive}</p>
            )
          ) : (
            !flowMiniVersion && <p className="text-grid">No Signal</p>
          )}
        </div>
      </div>
    </>
  );
}

export default LiveSensorItem;
