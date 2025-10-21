import { useUIStore } from "@/atoms/uiAtom";
import PercentageBar from "./PercentageBar";
import CarExpandCard from "./CarExpandCard";
import { CarsModalCardData } from "@/utils/evChargerUtils";

const EmissionsData = [90.3, 121.1];

const EvInfoCards = [
  {
    primary: "Total Charged",
    secondary: "612 kWh"
  },
  {
    primary: "Total Cost",
    secondary: "£ 170"
  },
  {
    primary: "Charging Time",
    secondary: "20 h 51m"
  },
  {
    primary: "Total Charges",
    secondary: "12"
  }
];

function DeviceDetails() {
  const modalType = useUIStore((state) => state.modalTypeState);

  const getDeviceType = () => {
    switch (modalType) {
      case "Power":
        return true;
      case "Solar":
        return true;
      case "Battery":
        return true;
      case "EVcharger":
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="">
      {getDeviceType() ? (
        <div className="p-4">
          <h3 className="pt-2 text-sm font-semibold pl-">Device Details</h3>
          <div
            className={`text-xs space-y-6 grid items-end justify-start ${
              getDeviceType() ? "grid-cols-2" : "grid-cols-3"
            }`}
          >
            {getDeviceType() && (
              <div className="flex flex-col h-[30px] pl-4">
                <h4 className="text-textTertiary">Name</h4>
                <p className="text-bold">Jinko</p>
              </div>
            )}
            <div className={`flex flex-col h-[30px] pl-4`}>
              <h4 className="text-textTertiary">Manufacturer</h4>
              <p className="text-bold">Jinko Solar</p>
            </div>
            {getDeviceType() && (
              <div className="flex flex-col h-[30px] pl-4">
                <h4 className="text-textTertiary">Status</h4>
                <p className="w-8 py-1 pl-2 text-bold bg-blue_custom rounded-xl">
                  ok
                </p>
              </div>
            )}
            {getDeviceType() && (
              <div className="flex flex-col h-[30px] pl-4">
                <h4 className="text-textTertiary">Device Type</h4>
                <p className="text-bold">Solar Array</p>
              </div>
            )}
            <div className={`flex flex-col h-[30px] pl-4`}>
              <h4 className="text-textTertiary">Model</h4>
              <p className="text-bold">350W Tiger</p>
            </div>
            {getDeviceType() && (
              <div className="flex flex-col h-[30px] pl-4">
                <h4 className="text-textTertiary">Flow Visible</h4>
                <p className="text-bold"></p>
              </div>
            )}
            {getDeviceType() && (
              <div className="flex flex-col h-[30px] pl-4">
                <h4 className="text-textTertiary">Parent Device</h4>
                <p className="text-bold"></p>
              </div>
            )}
            <div className={`flex flex-col h-[30px] pl-4`}>
              <h4 className="text-textTertiary">Serial Number</h4>
              <p className="text-bold"></p>
            </div>
            {getDeviceType() && (
              <>
                <div className={`flex flex-col h-[30px] pl-4`}>
                  <h4 className="text-textTertiary">Installation Date</h4>
                  <p className="text-bold"></p>
                </div>
                <div className={`flex flex-col h-[30px] pl-4`}>
                  <h4 className="text-textTertiary">Annual Heat Consumption</h4>
                  <p className="text-bold"></p>
                </div>
                <div className={`flex flex-col h-[30px] pl-4`}>
                  <h4 className="text-textTertiary">
                    Annual Cooling Consumption
                  </h4>
                  <p className="text-bold"></p>
                </div>
              </>
            )}
            {getDeviceType() && (
              <div className="flex flex-col h-[30px] pl-4">
                <h4 className="text-textTertiary">Detachable</h4>
                <p className="text-bold"></p>
              </div>
            )}
          </div>
          {getDeviceType() && (
            <div className="p-2 space-y-1">
              <div className="grid w-full grid-cols-3 p-4 text-xs bg-quaternary rounded-xl">
                <>
                  <div>
                    <p className="text-textTertiary">DC Capacity</p>
                    <p className="text-bold">4.2 kWp</p>
                  </div>
                  <div>
                    <p className="text-textTertiary">Storage Capacity</p>
                    <p className="text-bold">6.2 kWh</p>
                  </div>
                </>
              </div>

              <div className="grid w-full grid-cols-3 p-4 text-xs bg-quaternary rounded-xl">
                <>
                  <div>
                    <p className="text-textTertiary">Number</p>
                    <p className="text-bold">50</p>
                  </div>
                  <div>
                    <p className="text-textTertiary">C-rate</p>
                    <p className="text-bold">3 kWh</p>
                  </div>
                </>
              </div>
            </div>
          )}

          {getDeviceType() && (
            <>
              {CarsModalCardData.map((item, index) => (
                <CarExpandCard key={index} item={item} />
              ))}
              <div>
                <div className="grid grid-cols-2 gap-4 py-2 xl:grid-cols-4">
                  {EvInfoCards.map((item, index) => (
                    <div
                      key={index}
                      className="w-full h-full p-4 text-[8px] rounded-lg lg:text-xs bg-quaternary space-y-1"
                    >
                      <p className="font-light">{item.primary}</p>
                      <p className="font-bold whitespace-nowrap">
                        {item.secondary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <h3>......</h3>
      )}
      {getDeviceType() && ( // Emissions
        <div className="px-4 py-2 border-t border-borderSecondary">
          <PercentageBar
            title={`Total Emissions`}
            topLeft={`Till Date`}
            topRight={`Predicted`}
            bottomLeft={`${EmissionsData[0]}Kg of CO2`}
            bottomRight={`${EmissionsData[1]}Kg of CO2`}
            startValue={EmissionsData[0]}
            endValue={EmissionsData[1]}
          />
        </div>
      )}
    </div>
  );
}

export default DeviceDetails;
