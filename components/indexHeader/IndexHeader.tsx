"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Expand from "@/public/icons/Expand";
import Info from "@/public/icons/Info";
import Tickets from "@/public/icons/Tickets";
import CheckCircle from "@/public/icons/CheckCircle";
import DataSettings from "@/public/icons/DataSettings";
import Location from "@/public/icons/Location";
import Summary from "../summary/Summary";

function IndexHeader() {
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);

  return (
    <div className="bg-secondary w-full border-y-[1px] border-tertiary grid grid-rows-1 gap-4 px-4 text-textPrimary grid-cols-2 md:grid-cols-5 xl:grid-cols-3 min-h-[18vh] border-b-[0.5px] space-y-4">
      <div className="relative flex flex-col justify-center p-4 md:col-span-2 xl:col-span-1">
        <div className="flex items-center flex-auto pb-2 space-x-3">
          {/* name section */}
          <CheckCircle />
          <h1 className="max-w-sm overflow-hidden text-2xl text-textPrimary whitespace-nowrap text-ellipsis">
            Address
          </h1>
          {/* <button
            type="button"
            className={`btn btn-primary ${
              showAccountDropdown ? "rotate-180 lg:pr-4" : "lg:pl-4"
            }`}
            // style={showAccountDropdown ? {transform: "rotate(180deg)"} : {}}
            onClick={() => setShowAccountDropdown(!showAccountDropdown)}
          >
            <Expand />
          </button> */}
          <button type="button" className="btn btn-primary lg:pl-9">
            <DataSettings />
          </button>
        </div>
        {showAccountDropdown && (
          <div className="absolute flex flex-col border border-white top-12 bg-primary text-textPrimary">
            <input className="text-black" />
          </div>
        )}
        <div className="grid grid-cols-3 text-textPrimary md:gap-2 xl:gap-6 whitespace-nowrap">
          <button
            type="button"
            className="whitespace-nowrap text-xs  rounded-lg border mb-2"
          >
            UK ZONE A
          </button>
          <button
            type="button"
            className="whitespace-nowrap text-xs  rounded-lg border mb-2"
          >
            Optimiser
          </button>
          <button
            type="button"
            className="whitespace-nowrap text-xs  rounded-lg border mb-2"
          >
            Controls
          </button>
        </div>
        <div className="grid grid-cols-3 text-textPrimary md:gap-2 xl:gap-6 whitespace-nowrap">
          {/* informations section */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center pb-2 space-x-2">
              <Location />
              <h2 className="">Location</h2>
            </div>
            <div className="w-full text-sm text-textPrimary">
              <p className="overflow-hidden whitespace-nowrap text-ellipsis">
                Street
              </p>
              <p className="overflow-hidden whitespace-nowrap text-ellipsis">
                Box Office
              </p>
              <p className="overflow-hidden whitespace-nowrap text-ellipsis">
                City & country
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center pb-2 space-x-2">
              <Info size={13} />
              <h2 className="text-textPrimary">Extras</h2>
            </div>
            <div className="text-sm">
              <p>Capacity</p>
              <p className="font-semibold text-textQuaternary">4.2Wp</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center pb-2 space-x-2">
              <Info size={20} />
              <p>Alarms</p>
            </div>
            <div className="flex items-center space-x-2">
              <Tickets size={20} />
              <p>Tickets</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-3 xl:col-span-2">
        <Summary />
      </div>
    </div>
  );
}

export default IndexHeader;
