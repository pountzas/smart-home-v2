import CarDetails from "../reusables/CarDetails";
import CarChargerCard from "../reusables/CarChargerCard";
import CarIllustrationCard from "../reusables/CarIllustrationCard";
import ToggleComponent from "../reusables/ToggleComponent";
import StatsVerticalGraph from "../reusables/StatsVerticalGraph";
import FullModalContainer from "@/HOCs/FullModalContainer";
import SelectedModalCarButton from "../reusables/buttons/SelectedModalCarButton";
import { CarsModalCardData } from "@/utils/evChargerUtils";
import ArrowCloseButton from "../reusables/buttons/ArrowCloseButton";
import ModalTitle from "../reusables/ModalTitle";

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
        {/* {modalTitle === "Performance Summary" &&
          <>
            <div className="w-full p-4">

              <div className="flex items-center w-full mb-3 text-white h-7">
                <SummaryPeriod onDateTypeSwitch={onDateTypeSwitch} dateType={dateType} />
                {dateType != "LT" &&
                  <SummaryDate onChangeDate={changeDate} date={date} dateType={dateType} />
                }
              </div>
              <div className="grid w-full grid-cols-7 gap-1 md:gap-2 xl:gap-4">
                {data.length > 0
                  ?
                  data.map((item, index) => {
                    return <SummaryItem isFetchingData={isFetchingData} key={"summaryItem" + index} item={item} index={index} />;
                  })
                  :
                  [0, 1, 2, 3, 4, 5, 6].map((item, index) => {
                    return <SummaryItem isFetchingData={isFetchingData} key={"summaryItem" + index} item={item} index={index} />;
                  })
                }
              </div>
            </div>

          </>
        } */}

        {/* car tabs */}
        {CarsModalCardData && (
          <div className="min-h-[44px] border-b border-borderSecondary flex items-end">
            {CarsModalCardData.map((car, index: number) => {
              return (
                <SelectedModalCarButton car={car} index={index} key={index} />
              );
            })}
          </div>
        )}
        {/* content */}
        <div className="grid grid-cols-2 pt-4 overflow-y-scroll scrollbar-hide ">
          {/* right side */}
          <div className="overflow-y-scroll scrollbar-hide max-h-[96%] overscroll-contain">
            <div className="pl-4 space-y-4">
              {/* {modalTitle === "Performance Summary" &&
                <>
                  <div className="pr-4">
                    <KPISummaryBarGraph
                      mode={"Energy"}
                      startDate={startDate}
                      endDate={endDate}
                      dateType={dateType}
                      date={date}
                    />
                  </div>

                </>
              } */}

              {CarsModalCardData && (
                <>
                  {/* Car info */}
                  <CarDetails cars={CarsModalCardData} />
                  {/* car charger */}
                  <CarChargerCard cars={CarsModalCardData} />
                  {/* car illustration */}
                  <CarIllustrationCard cars={CarsModalCardData} />
                </>
              )}
            </div>
          </div>
          {/* left side */}
          <div className="overflow-y-scroll scrollbar-hide max-h-[96%] overscroll-contain">
            {/* {modalTitle === "Performance Summary" &&
              <>
                <div className="pr-4 mb-4">
                  <KPISummaryBarGraph
                    mode={"Efficiency"}
                    startDate={startDate}
                    endDate={endDate}
                    dateType={dateType}
                    date={date}
                  />
                </div>

              </>
            } */}

            {CarsModalCardData && (
              <>
                {/* <div className="p-4">
                  <div className="flex items-center mb-3 h-7">
                    <SummaryPeriod onDateTypeSwitch={onDateTypeSwitch} dateType={dateType} />
                    {dateType != "LT" &&
                      <SummaryDate onChangeDate={changeDate} date={date} dateType={dateType} />
                    }
                  </div>
                </div> */}
                <StatsVerticalGraph cars={CarsModalCardData} />

                <div>
                  <ToggleComponent title={"EvCharger"} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </FullModalContainer>
  );
}

export default FullModal;
