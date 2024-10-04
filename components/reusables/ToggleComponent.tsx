"use client";
import { useEffect, useState } from "react";
import { ChargeHistoryData, SolarData } from "@/utils/dataUtils";
import EvCharger from "@/public/icons/EvCharger";
import FilterButton from "./buttons/FilterButton";
import Event from "@/public/icons/Event";
import MiniToggle from "@/public/icons/MiniToggle";
import StatusButton from "./buttons/StatusButton";
import LinkIcon from "@/public/icons/LinkIcon";

function ToggleComponent({ title }: { title: string }) {
  const [openList, setOpenList] = useState(true);
  const [data, SetData] = useState<SolarDataType[] | ChargeHistoryDataType[]>(
    []
  );
  const [solar, setSolar] = useState(false);
  const [evCharger, setEvCharger] = useState(false);

  const openListEvents = () => {
    setOpenList(true);
  };

  const closeListEvents = () => {
    setOpenList(false);
  };

  useEffect(() => {
    switch (title) {
      case "EvCharger":
      case "EV Chargers":
        setEvCharger(true);
        SetData(ChargeHistoryData);
        break;
      case "Solar":
        setSolar(true);
        SetData(SolarData);
        break;
      default:
        break;
    }
  }, [title]);

  const onFilterClick = () => {};

  return (
    <div className="px-4 text-sm w-[100%] h-72">
      <div className="px-4 py-4 bg-tertiary rounded-xl">
        {/* header */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <h3>{title}</h3>
            <p className="text-textTertiary">{data.length}</p>
          </div>
          <div className="flex space-x-1">
            <FilterButton click={onFilterClick} />
            <div className="w-[64px] h-[32px] bg-buttonsPrimary rounded-lg col-span-8">
              <div className="relative flex shadow-lg">
                <div
                  className={`absolute rounded-lg ${
                    openList && "right-0"
                  } w-8 h-8 bg-buttonsSecondary`}
                ></div>
                <button
                  type="button"
                  onClick={closeListEvents}
                  className={`${
                    !openList && "text-textSecondary"
                  } flex h-8 w-8 z-10 flex-col items-center justify-center`}
                >
                  <Event color={openList} />
                </button>
                <button
                  type="button"
                  onClick={openListEvents}
                  className={`${
                    openList && "text-textSecondary"
                  } flex h-8 w-8 z-10 flex-col items-center justify-center`}
                >
                  <MiniToggle color={!openList} />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* body */}
        <div className="w-[100%] mt-3 space-y-1">
          {openList ? (
            data.map((event, index) => (
              <div key={index} className="h-20 rounded-lg bg-quaternary">
                <div className="flex items-center justify-between w-full h-full space-x-2">
                  <div className="min-w-[5px] rounded-l-lg bg-blue_custom h-[100%]"></div>
                  {evCharger && <EvCharger />}
                  <div className={`flex justify-between pr-3`}>
                    <div className="space-y-1">
                      <div className="flex items-end justify-between w-[33vw]">
                        <div className="flex space-x-1">
                          <p>{event.title[0]}</p>
                          {event.title[1] && (
                            <p className="text-textTertiary">
                              {event.title[1]}
                            </p>
                          )}
                        </div>
                        <StatusButton status={event.status[0]} />
                      </div>
                      <div className="flex items-center space-x-2 text-xs font-light">
                        {evCharger && (
                          <>
                            <p className="text-textTertiary">
                              {event.details[1]}
                            </p>
                            <div className="w-[3px] h-[3px] rounded-full bg-textTertiary"></div>
                          </>
                        )}
                        <p className="text-textTertiary">{event.details[0]}</p>
                      </div>
                      <div className="flex items-center justify-between flex-grow space-x-1 text-xs">
                        {event.info.map((info, index) => (
                          <div
                            key={index}
                            className={`flex items-center space-x-1`}
                          >
                            {solar && <LinkIcon />}
                            <p
                              className={`${
                                solar && "text-blue_custom"
                              } whitespace-nowrap`}
                            >
                              {info}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full h-96 rounded-lg bg-quaternary "></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ToggleComponent;
