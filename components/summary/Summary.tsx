import React from "react";
import SummaryItem from "./SummaryItem";

function Summary() {
  return (
    <div className="grid mb-4 ">
      {/* <div className="flex justify-between">
        <div className="flex items-center mb-3 h-7">
          <SummaryPeriod
          onDateTypeSwitch={onDateTypeSwitch}
          dateType={dateType}
          />

          <SummaryDate
          onChangeDate={changeDate}
          date={date}
          dateType={dateType}
          />
        </div>
        <div className="flex items-center h-7">
          <a
            className="flex items-center h-full px-2 ml-3 rounded-md bg-buttonsPrimary"
            // onClick={() => setShowSummaryDetails(true)}
          >
            <span className="text-[12px] font-bold">View More</span>
          </a>
        </div>
      </div> */}
      <div className="grid grid-cols-4 gap-1 md:gap-2 xl:gap-4 w-[96%]">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => {
          return (
            <SummaryItem
              isFetchingData={true}
              key={"summaryItem" + index}
              item={item}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Summary;
