import { Clock } from "@/public/icons/Clock";
import { Scheduling } from "@/public/icons/Scheduling";

type ControlsItemProps = {
  asset: AssetTypes;
};

function ControlsItem({ asset }: ControlsItemProps) {
  return (
    <div className="bg-quaternary p-2 rounded-lg">
      <div className="flex flex-row justify-between mx-2 my-1 ">
        <div className="flex border-2 rounded-md border-green_custom">
          <span className="px-3 py-1 font-sans text-[12px] text-green_custom font-semibold bg-secondary rounded-md">
            User
          </span>
        </div>
        <div className="flex flex-row">
          <div className="flex mr-2 border-2 rounded-lg border-blue_custom">
            <span className="px-3 py-1 font-sans text-[12px] text-textPrimary">
              Manual
            </span>
          </div>
          <div className="flex items-center rounded-lg bg-[#0F66FB]">
            <span className="px-3 py-1 font-sans text-[12px] text-textPrimary">
              1
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mx-2 my-1">
        <div className="flex flex-col">
          <span className="font-sans text-[12px] font-semibold text-textPrimary">
            {/* {asset?.userData?.type} */}
            type
          </span>
          <span className="font-sans text-[12px] font-semibold text-textPrimary">
            {/* {asset?.userData?.label} */}
            label
          </span>
          <span className="font-sans text-[12px] font-semibold text-textPrimary">
            Primary Control Mode
          </span>
        </div>
        <div className="flex flex-row">
          <span className="font-sans text-[12px] font-semibold text-textPrimarytextPrimary">
            Devices:
          </span>
          {/* icons */}
        </div>
      </div>
      <div className="flex flex-row justify-between mx-2 my-1">
        <span className="font-sans text-[12px] font-normal text-textTertiary">
          Start Date 10/16/2024 12:00 PM
          {/* {"Start Date " +
            `${moment(asset?.toggleData?.time).format("DD/MM/YYYY hh:mm a")}`} */}
        </span>
        <div className="flex items-center space-x-2 ">
          <Clock />
          <button type="button">
            <Scheduling />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ControlsItem;
