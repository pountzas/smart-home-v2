import React from "react";

type SummaryItemProps = {
  item: any;
  isFetchingData: boolean;
  index: number;
};

function SummaryItem({ item, isFetchingData, index }: SummaryItemProps) {
  return (
    <div
      className={`flex w-[100%] overscroll-contain rounded-lg bg-tertiary h-[60px] space-x-3 items-center justify-center"}`}
    >
      {isFetchingData ? (
        <div className="flex flex-col items-start justify-center w-full h-full py-[16px] pl-4 space-y-1 x-4">
          <div className="h-4 w-[90%] bg-gradient-to-r from-transparent via-textSecondary to-transparent rounded-full anim-loader transition-all"></div>
          <div className="h-4 w-[45%] bg-gradient-to-r from-transparent via-textSecondary to-transparent rounded-full anim-loader transition-all"></div>
        </div>
      ) : (
        <>
          <div className="ml-2 ">
            <div className="hidden lg:block">{/* <SummaryIcon /> */}</div>
          </div>
          <div className="flex flex-col ml-2 overflow-hidden overflow-ellipsis">
            <span className="truncate text-[10px] lg:text-xs font-normal text-textPrimary">
              {item.name}
            </span>
            <div className="flex flex-row items-center">
              {item?.name?.includes("Savings") && (
                <>
                  <span className="text-[8px] md:text-xs text-[#BBC7CE] font-semibold">
                    {item.unit}
                  </span>
                  <span>&nbsp;</span>
                </>
              )}
              <span className="text-[8px] font-bold md:text-sm xl:text-lg">
                {item?.total?.toFixed(2) ?? 0}
              </span>
              {!item?.name?.includes("Savings") && (
                <>
                  <span>&nbsp;</span>
                  <span className="text-[8px] md:text-xs text-[#BBC7CE] md:font-semibold">
                    {item.unit}
                  </span>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SummaryItem;
