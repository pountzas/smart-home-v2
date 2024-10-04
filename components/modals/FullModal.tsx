"use client";
import { modalOpenState, selectedModalCarState } from "@/atoms/uiAtom";
import ArrowLeft from "@/public/icons/ArrowLeft";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import CarDetails from "../reusables/CarDetails";
import CarChargerCard from "../reusables/CarChargerCard";
import CarIllustrationCard from "../reusables/CarIllustrationCard";
import ToggleComponent from "../reusables/ToggleComponent";
import StatsVerticalGraph from "../reusables/StatsVerticalGraph";
import { motion } from "framer-motion";

type FullModalProps = {
  open: boolean;
  onClose: () => void;
  props?: any;
  cars?: CarCardData[];
  modalTitle: string;
};

function FullModal({ open, onClose, props, cars, modalTitle }: FullModalProps) {
  const [selectedModalCar, setSelectedModalCar] = useRecoilState(
    selectedModalCarState
  );
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenState);

  const [carIndex, setCarIndex] = useState(0);
  const [title, setTitle] = useState(modalTitle);
  const [isMounted, setIsMounted] = useState(false);

  const escKeyDown = (e: KeyboardEvent) => {
    if (e.key === "27" || e.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    setCarIndex(selectedModalCar);
  }, [selectedModalCar]);

  const setCarState = (index: number) => {
    setSelectedModalCar(index);
  };

  const closeModal = () => {
    // setActiveGraphCons(true);
    // setActiveGraphExp(true);
    // setActiveGraphImp(true);
    // setActiveGraphBatt(true);
    // setActiveGraphGen(true);
    onClose();
  };

  useEffect(() => {
    setModalOpen(true);
    setIsMounted(true);
    document.addEventListener("keydown", escKeyDown);
    return () => {
      setModalOpen(false);
      setIsMounted(false);
      document.removeEventListener("keydown", escKeyDown);
      setSelectedModalCar(0);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <motion.div
        initial={{ x: open ? 0 : "100%" }}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ duration: 0.4 }}
        className="absolute top-0 right-0 min-h-screen max-h-screen min-w-[100vw] max-w-[100vw] z-[500] bg-secondary flex"
      >
        <div
          className={`absolute top-0 right-0 overscroll-contain min-h-screen max-h-screen w-full z-[400] bg-secondary flex flex-col`}
        >
          {/* title */}
          <div className="flex items-center w-full min-h-[72px] space-x-2 border-b border-borderSecondary">
            <button onClick={closeModal} className="pl-8">
              <ArrowLeft size={16} />
            </button>
            <h2>{title}</h2>
            <h3 className="text-textTertiary">Site address</h3>
          </div>

          {/* Summary */}
          {/* {title === "Performance Summary" &&
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
          {cars && (
            <div className="min-h-[44px] border-b border-borderSecondary flex items-end">
              {cars.map((car, index: number) => {
                return (
                  <button
                    key={index}
                    onClick={() => setCarState(index)}
                    className={`h-full px-8 ${
                      carIndex === index
                        ? "border-b-2 border-blue_custom"
                        : "text-textTertiary"
                    }`}
                  >
                    {car.car}
                  </button>
                );
              })}
            </div>
          )}
          {/* content */}
          <div className="grid grid-cols-2 pt-4 overflow-y-scroll scrollbar-hide ">
            {/* right side */}
            <div className="overflow-y-scroll scrollbar-hide max-h-[96%] overscroll-contain">
              <div className="pl-4 space-y-4">
                {/* {title === "Performance Summary" &&
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

                {cars && (
                  <>
                    {/* Car info */}
                    <CarDetails cars={cars} carIndex={carIndex} />

                    {/* car charger */}
                    <CarChargerCard cars={cars} carIndex={carIndex} />

                    {/* car illustration */}
                    <CarIllustrationCard cars={cars} carIndex={carIndex} />
                  </>
                )}
              </div>
            </div>
            {/* left side */}
            <div className="overflow-y-scroll scrollbar-hide max-h-[96%] overscroll-contain">
              {/* {title === "Performance Summary" &&
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

              {cars && (
                <>
                  {/* <div className="p-4">
                  <div className="flex items-center mb-3 h-7">
                    <SummaryPeriod onDateTypeSwitch={onDateTypeSwitch} dateType={dateType} />
                    {dateType != "LT" &&
                      <SummaryDate onChangeDate={changeDate} date={date} dateType={dateType} />
                    }
                  </div>
                </div> */}
                  <StatsVerticalGraph cars={cars} carIndex={carIndex} />

                  <div>
                    <ToggleComponent title={"EvCharger"} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default FullModal;
