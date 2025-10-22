"use client";

import { useUIStore } from "@/atoms/uiAtom";
import { useSensorsStore } from "@/atoms/assetsAtom";

import { motion } from "framer-motion";
import ToggleButton from "../reusables/buttons/ToggleButton";
import HomeSensor from "./HomeSensor";
import LiveSensorItem from "./LiveSensorItem";

import PowerflowContainer from "@/HOCs/PowerflowContainer";

import BatteryIcon from "@/public/icons/BatteryIcon";
import EvCharger from "@/public/icons/EvCharger";
import GridIcon from "@/public/icons/GridIcon";
import HomeIcon from "@/public/icons/HomeIcon";
import LoadItemIcon from "@/public/icons/LoadItemIcon";
import Plus from "@/public/icons/Plus";
import SolarIcon from "@/public/icons/SolarIcon";
import { useEffect } from "react";

function Powerflow() {
  const flowMiniVersion = useUIStore((state) => state.flowMiniVersionState);
  const sensorsValues = useSensorsStore((state) => state.sensorsValuesState);
  const setSensorsValues = useSensorsStore((state) => state.setSensorsValuesState);
  
  useEffect(() => {
    setSensorsValues({
      wsConsValue: 2110,
      wsSolarValue: 4110,
      wsGridValue: 110,
      wsBattValue: -660,
      wsBattPercentValue: 65,
      wsCarValue: 8000,
      wsCarPercentValue: 80,
      wsBigLoad1Value: 0,
      wsBigLoad2Value: 500
    });
    // Only initialize on mount, sensors updated via store subscription
  }, [setSensorsValues]);

  const {
    isConnectedToStream,
    wsConsValue,
    wsGridValue,
    wsSolarValue,
    wsBattValue,
    wsBattPercentValue,
    wsCarValue,
    wsCarPercentValue,
    wsBigLoad1Value,
    wsBigLoad2Value,
    wsBigLoad3Value,
    wsBigLoad4Value,
    wsBigLoad5Value,
    wsBigLoad6Value,
    wsBigLoad7Value,
    wsBigLoad8Value,
    wsBigLoad9Value,
    wsBigLoad10Value
  } = sensorsValues;

  // const SENSORS = {
  //   GRID: sensorsUUIDs.gridUUID,
  //   SOLAR: sensorsUUIDs.solarUUID,
  //   WIND: sensorsUUIDs.windUUID, // to be added?
  //   HOME: sensorsUUIDs.consUUID,
  //   EV: sensorsUUIDs.carUUID,
  //   STORAGE: sensorsUUIDs.battUUID,
  //   BattPercent: sensorsUUIDs.battPercentUUID,
  //   BigLoad_01: sensorsUUIDs.bigLoad1UUID,
  //   BigLoad_02: sensorsUUIDs.bigLoad2UUID,
  //   BigLoad_03: sensorsUUIDs.bigLoad3UUID,
  //   BigLoad_04: sensorsUUIDs.bigLoad4UUID,
  //   BigLoad_05: sensorsUUIDs.bigLoad5UUID,
  //   BigLoad_06: sensorsUUIDs.bigLoad6UUID,
  //   BigLoad_07: sensorsUUIDs.bigLoad7UUID,
  //   BigLoad_08: sensorsUUIDs.bigLoad8UUID,
  //   BigLoad_09: sensorsUUIDs.bigLoad9UUID,
  //   BigLoad_10: sensorsUUIDs.bigLoad10UUID
  // };

  const HOME = [
    {
      name: "Home",
      // sensorId: SENSORS.HOME,
      value: wsConsValue,
      status: ["Active", "Inactive"],
      statusColor: ["#256494", "#afbac3"],
      icon: <HomeIcon />
    }
  ];

  const DEVICES = [
    {
      name: "EVcharger",
      // sensorId: SENSORS.EV,
      value: wsCarValue,
      startValue: wsCarValue,
      endValue: wsCarPercentValue,
      status: ["Charging", "Inactive"],
      icon: <EvCharger />
    },
    {
      name: "A/C",
      // sensorId: SENSORS.BigLoad_01,
      value: wsBigLoad1Value,
      status: ["Active", "Inactive"],

      icon: <LoadItemIcon />
    },
    {
      name: "Oven",
      // sensorId: SENSORS.BigLoad_02,
      value: wsBigLoad2Value,
      status: ["Active", "Inactive"],

      icon: <LoadItemIcon />
    },
    {
      name: "Big03",
      // sensorId: SENSORS.BigLoad_03,
      value: wsBigLoad3Value,
      status: ["Active", "Inactive"],

      icon: <LoadItemIcon />
    },
    {
      name: "Big04",
      // sensorId: SENSORS.BigLoad_04,
      value: wsBigLoad4Value,
      status: ["Active", "Inactive"],

      icon: <LoadItemIcon />
    },
    {
      name: "Big05",
      // sensorId: SENSORS.BigLoad_05,
      value: wsBigLoad5Value,
      status: ["Active", "Inactive"],
      icon: <LoadItemIcon />
    }
    // {
    //   name: "Big06",
    //   // sensorId: SENSORS.BigLoad_06,
    //   value: wsBigLoad6Value,
    //   status: ["Active", "Inactive"],
    //   icon: <LoadItemIcon />
    // },
    // {
    //   name: "Big07",
    //   // sensorId: SENSORS.BigLoad_07,
    //   value: wsBigLoad7Value,
    //   status: ["Active", "Inactive"],
    //   icon: <LoadItemIcon />
    // },
    // {
    //   name: "Big08",
    //   // sensorId: SENSORS.BigLoad_08,
    //   value: wsBigLoad8Value,
    //   status: ["Active", "Inactive"],
    //   icon: <LoadItemIcon />
    // },

    // {
    //   name: "Big09",
    //   // sensorId: SENSORS.BigLoad_09,
    //   value: wsBigLoad9Value,
    //   status: ["Active", "Inactive"],
    //   icon: <LoadItemIcon />
    // },
    // {
    //   name: "Big10",
    //   // sensorId: SENSORS.BigLoad_10,
    //   value: wsBigLoad10Value,
    //   status: ["Active", "Inactive"],
    //   icon: <LoadItemIcon />
    // }
  ];

  const POWER_SUPPLIES = [
    {
      name: "Grid",
      // sensorId: SENSORS.GRID,
      secondarySensorId: null,
      startValue: 110,
      endValue: null,
      value: wsGridValue,
      status: ["Active", "Inactive", "Selling"],
      icon: <GridIcon active={true} stop={false} />
    },
    {
      name: "Solar",
      // sensorId: SENSORS.SOLAR,
      secondarySensorId: null,
      startValue: 110,
      endValue: null,
      value: wsSolarValue,
      status: ["Generating", "Inactive"],
      icon: <SolarIcon />
    },
    {
      name: "Battery",
      name2: "battPercentUUID",
      // sensorId: SENSORS.STORAGE,
      // secondarySensorId: SENSORS.BattPercent,
      startValue: wsBattValue,
      endValue: wsBattPercentValue,
      value: wsBattValue,
      status: ["Charging", "Inactive", "Discharging"],
      icon: <BatteryIcon />
    }
    // {
    //   name: "Wind",
    //   // sensorId: SENSORS.WIND,
    //   secondarySensorId: null,
    //   startValue: 0,
    //   endValue: null,
    //   status: ["Generating", "Inactive"]
    //   // connected: isConnectedToStream/
    //   // value: wsWindValue, // to be added?
    // }
  ];

  const handleAddDevice = () => {};

  return (
    <PowerflowContainer>
      {/* <SensorsStreamController
        accessToken={mainState.cloudToken}
        webSocketUrl={mainState.wsBrokerUrl}
        sensors={mainState.streamingSensorsUUIDs}
        /> */}
      <div className="flex items-center justify-between px-5 py-2">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: !flowMiniVersion ? 1 : 0 }}
          onClick={handleAddDevice}
          className="flex items-center justify-center w-8 h-8 col-span-1 rounded-lg bg-buttonsPrimary"
        >
          <Plus />
        </motion.button>
        <div className="w-[64px] h-[32px] bg-buttonsPrimary rounded-lg col-span-8">
          <div className="relative flex shadow-lg">
            <ToggleButton />
          </div>
        </div>
      </div>

      <div
        className={`h-[60vh] md:h-[58vh] lg:h-[65vh] flex flex-col items-center overflow-y-scroll scrollbar-hide`}
      >
        {flowMiniVersion && (
          <div className={`flex items-center justify-center`}>
            <HomeSensor
              name={HOME[0].name}
              // sensorId={HOME[0].sensorId}
              value={HOME[0].value}
              status={HOME[0].status[0]}
              icon={HOME[0].icon}
            />
          </div>
        )}
        <div
          className={`${
            flowMiniVersion
              ? "space-y-2 pb-2"
              : "flex items-center justify-center gap-8 pt-2"
          } shadow-lg`}
        >
          {POWER_SUPPLIES.map((powerItem, index) => {
            return (
              <LiveSensorItem
                key={index + powerItem.name}
                name={powerItem.name}
                // sensorId={powerItem.sensorId}
                secondarySensorId={powerItem.secondarySensorId}
                startValue={powerItem.startValue}
                endValue={powerItem.endValue ?? undefined}
                value={powerItem.value}
                active={powerItem.status[0]}
                inactive={powerItem.status[1]}
                secondary={powerItem?.status[2]}
                icon={powerItem.icon}
                power={powerItem.value}
              />
            );
          })}
        </div>

        {/* Home Sensor */}
        {!flowMiniVersion && (
          <div className={`flex items-center justify-center py-10 z-0`}>
            <HomeSensor
              name={HOME[0].name}
              // sensorId={HOME[0].sensorId}
              value={HOME[0].value}
              status={HOME[0].status[0]}
              icon={HOME[0].icon}
            />
          </div>
        )}

        {/* Devices */}
        <div
          className={`${
            flowMiniVersion ? "space-y-2 pb-2" : "grid grid-cols-3  gap-8"
          } `}
        >
          {DEVICES.map((device, index) => {
            return (
              <LiveSensorItem
                key={index + device.name}
                name={device.name}
                // sensorId={device.sensorId}
                value={device.value}
                active={device.status[0]}
                inactive={device.status[1]}
                secondary={device?.status[2]}
                icon={device.icon}
                devices={device}
                // assets={assetState.assets}
              />
            );
          })}
        </div>
      </div>
    </PowerflowContainer>
  );
}

export default Powerflow;
