import CarChargerCard from "../reusables/CarChargerCard";
import CarDetails from "../reusables/CarDetails";
import CarIllustrationCard from "../reusables/CarIllustrationCard";
import ModalTitle from "../reusables/ModalTitle";
import StatsVerticalGraph from "../reusables/StatsVerticalGraph";
import ToggleComponent from "../reusables/ToggleComponent";

import ArrowCloseButton from "../reusables/buttons/ArrowCloseButton";
import SelectedModalCarButton from "../reusables/buttons/SelectedModalCarButton";

import { CarsModalCardData } from "@/utils/evChargerUtils";

import FullModalContainer from "@/HOCs/FullModalContainer";
import FullModalEvChargerContainer from "@/HOCs/FullModalEvChargerContainer";
import FullModalPerformanceSummaryContainer from "@/HOCs/FullModalPerformanceSummaryContainer";

function FullModal() {
  return (
    <FullModalContainer>
      <div
        className={`absolute top-0 right-0 overscroll-contain min-h-screen max-h-screen w-full z-[400] bg-secondary flex flex-col`}
      >
        <div className="flex items-center w-full min-h-[72px] space-x-2 border-b border-borderSecondary">
          <ArrowCloseButton />

          <ModalTitle />
          <h3 className="text-textTertiary">Site address</h3>
        </div>
        {/* Summary */}
        <FullModalPerformanceSummaryContainer>
          <div className="w-full p-4">
            <div className="flex items-center w-full mb-3 text-white h-7">
              {/* <SummaryPeriod onDateTypeSwitch={onDateTypeSwitch} dateType={dateType} />
                {dateType != "LT" &&
                  <SummaryDate onChangeDate={changeDate} date={date} dateType={dateType} />
                } */}
            </div>
            <div className="grid w-full grid-cols-7 gap-1 md:gap-2 xl:gap-4">
              {/* {data.length > 0
                  ?
                  data.map((item, index) => {
                    return <SummaryItem isFetchingData={isFetchingData} key={"summaryItem" + index} item={item} index={index} />;
                  })
                  :
                  [0, 1, 2, 3, 4, 5, 6].map((item, index) => {
                    return <SummaryItem isFetchingData={isFetchingData} key={"summaryItem" + index} item={item} index={index} />;
                  })
                } */}
            </div>
          </div>
        </FullModalPerformanceSummaryContainer>

        {/* car tabs */}
        <FullModalEvChargerContainer>
          <div className="min-h-[44px] border-b border-borderSecondary flex items-end">
            {CarsModalCardData.map((car, index: number) => {
              return (
                <SelectedModalCarButton car={car} index={index} key={index} />
              );
            })}
          </div>
        </FullModalEvChargerContainer>

        {/* content */}
        <div className="grid grid-cols-2 pt-4 overflow-y-scroll scrollbar-hide ">
          {/* right side */}
          <div className="overflow-y-scroll scrollbar-hide max-h-[96%] overscroll-contain">
            <div className="pl-4 space-y-4">
              <FullModalPerformanceSummaryContainer>
                <div className="pr-4">
                  {/* <KPISummaryBarGraph
                      mode={"Energy"}
                      startDate={startDate}
                      endDate={endDate}
                      dateType={dateType}
                      date={date}
                    /> */}
                </div>
              </FullModalPerformanceSummaryContainer>

              <FullModalEvChargerContainer>
                {/* Car info */}
                <CarDetails cars={CarsModalCardData} />
                {/* car charger */}
                <CarChargerCard cars={CarsModalCardData} />
                {/* car illustration */}
                <CarIllustrationCard cars={CarsModalCardData} />
              </FullModalEvChargerContainer>
            </div>
          </div>
          {/* left side */}
          <div className="overflow-y-scroll scrollbar-hide max-h-[96%] overscroll-contain">
            <FullModalPerformanceSummaryContainer>
              <div className="pr-4 mb-4">
                {/* <KPISummaryBarGraph
                    mode={"Efficiency"}
                    startDate={startDate}
                    endDate={endDate}
                    dateType={dateType}
                    date={date}
                  /> */}
              </div>
            </FullModalPerformanceSummaryContainer>

            <FullModalEvChargerContainer>
              <div className="p-4">
                <div className="flex items-center mb-3 h-7">
                  {/* <SummaryPeriod onDateTypeSwitch={onDateTypeSwitch} dateType={dateType} />
                    {dateType != "LT" &&
                      <SummaryDate onChangeDate={changeDate} date={date} dateType={dateType} />
                    } */}
                </div>
              </div>
              <StatsVerticalGraph cars={CarsModalCardData} />

              <div>
                <ToggleComponent title={"EvCharger"} />
              </div>
            </FullModalEvChargerContainer>
          </div>
        </div>
      </div>
    </FullModalContainer>
  );
}

export default FullModal;
