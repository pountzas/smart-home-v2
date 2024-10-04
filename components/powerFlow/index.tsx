"use client";
import { useRecoilState } from "recoil";
import { flowMiniVersionState } from "@/atoms/uiAtom";
import Plus from "@/public/icons/Plus";
import MiniToggle from "@/public/icons/MiniToggle";
import FlowToggle from "@/public/icons/FlowToggle";
import { motion } from "framer-motion";

function Powerflow() {
  const [flowMiniVersion, setFlowMiniVersion] =
    useRecoilState(flowMiniVersionState);

  const handleAddDevice = () => {};

  const openMiniFlow = () => {
    !flowMiniVersion && setFlowMiniVersion(true);
  };

  const closeMiniFlow = () => {
    flowMiniVersion && setFlowMiniVersion(false);
  };
  return (
    <div className={`${flowMiniVersion && "col-span-2 sm:col-span-1"} `}>
      <div
        className={`${
          flowMiniVersion ? "flex flex-col items-center justify-start" : ""
        } object-contain rounded-lg bg-secondary pt-2`}
      >
        {/* <SensorsStreamController
        accessToken={mainState.cloudToken}
        webSocketUrl={mainState.wsBrokerUrl}
        sensors={mainState.streamingSensorsUUIDs}
      /> */}
        <div className="flex items-center justify-between px-5 py-2">
          <motion.button
            initial={{ opacity: flowMiniVersion ? 0 : 1 }}
            animate={{ opacity: !flowMiniVersion ? 1 : 0 }}
            onClick={handleAddDevice}
            className="z-10 flex items-center justify-center w-8 h-8 col-span-1 rounded-lg bg-buttonsPrimary"
          >
            <Plus />
          </motion.button>
          <div className="w-[64px] h-[32px] bg-buttonsPrimary rounded-lg col-span-8">
            <div className="relative flex shadow-lg">
              <div
                className={`absolute rounded-lg ${
                  flowMiniVersion && "right-0"
                } w-8 h-8 bg-buttonsSecondary`}
              ></div>
              <button
                type="button"
                onClick={closeMiniFlow}
                className={`${
                  !flowMiniVersion && "text-textSecondary"
                } flex h-8 w-8 z-10 flex-col  items-center justify-center`}
              >
                <FlowToggle fill={flowMiniVersion ? "black" : "white"} />
              </button>
              <button
                type="button"
                onClick={openMiniFlow}
                className={`${
                  flowMiniVersion && "text-textSecondary"
                } flex h-8 w-8 z-10 flex-col  items-center justify-center`}
              >
                <MiniToggle color={!flowMiniVersion} />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`h-[60vh] md:h-[58vh] lg:h-[65vh] flex flex-col items-center overflow-y-scroll scrollbar-hide`}
        >
          {flowMiniVersion && (
            <div className={`flex items-center justify-center`}>
              {/* <HomeSensor
              name={HOME[0].name}
              sensorId={HOME[0].sensorId}
              value={HOME[0].value}
              status={HOME[0].status}
              icon={HOME[0].icon}
            /> */}
            </div>
          )}
          <div
            className={`${
              flowMiniVersion
                ? "space-y-2 pb-2"
                : "flex items-center justify-center z-[30] gap-8 pt-2"
            } shadow-lg`}
          >
            {/* {POWER_SUPPLIES.map((powerItem, index) => {
            return (
              <LiveSensorItem
                key={index}
                name={powerItem.name}
                sensorId={powerItem.sensorId}
                secondarySensorId={powerItem.secondarySensorId}
                startValue={powerItem.startValue}
                endValue={powerItem.endValue}
                value={powerItem.value}
                active={powerItem.status[0]}
                inactive={powerItem.status[1]}
                secondary={powerItem?.status[2]}
                icon={powerItem.icon}
                power={powerItem}
              />
            );
          })} */}
          </div>

          {/* Home Sensor */}
          {!flowMiniVersion && (
            <div className={`flex items-center justify-center py-10 z-0`}>
              {/* <HomeSensor
              name={HOME[0].name}
              sensorId={HOME[0].sensorId}
              value={HOME[0].value}
              status={HOME[0].status}
              icon={HOME[0].icon}
            /> */}
            </div>
          )}

          {/* Devices */}
          <div
            className={`${
              flowMiniVersion ? "space-y-2 pb-2" : "grid grid-cols-3 z-30 gap-8"
            } `}
          >
            {/* {DEVICES.map((device, index) => {
            return (
              <LiveSensorItem
                key={index}
                name={device.name}
                sensorId={device.sensorId}
                value={device.value}
                active={device.status[0]}
                inactive={device.status[1]}
                secondary={device?.status[2]}
                icon={device.icon}
                devices={device}
                // assets={assetState.assets}
              />
            );
          })} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Powerflow;
