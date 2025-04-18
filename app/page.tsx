import HomeComponentsContainer from "@/HOCs/HomeComponentsContainer";
import HomeComponentsContainerRight from "@/HOCs/HomeComponentsContainerRight";
import Alarms from "@/components/alarms/Alarms";
import Controls from "@/components/controls/Controls";
import EvCharger from "@/components/evCharger/EvCharger";
import Graphs from "@/components/graphs/Graphs";
import IndexHeader from "@/components/indexHeader/IndexHeader";
import FullModal from "@/components/modals/FullModal";
import RightModal from "@/components/modals/RightModal";
import Powerflow from "@/components/powerFlow";
import Tickets from "@/components/tickets/Tickets";
import Optimiser from "@/components/οptimiser/Optimiser";

export default function Home() {
  const miniVersion = false;
  return (
    <main className=" w-full relative">
      <div className="flex flex-col items-center justify-between w-full bg-primary">
        <div className="grid gap-4 grid-rows-7 w-full">
          <div className="row-span-1 w-full">
            <IndexHeader />
          </div>

          <HomeComponentsContainer>
            {/* <div
            className={`w-full justify-between grid grid-rows-1 row-span-6 object-contain gap-4 px-4 text-textPrimary ${
              !miniVersion
                ? "lg:grid-cols-2 2xl:grid-cols-3"
                : "grid-cols-7 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 2xl:grid-cols-10"
            }`}
          > */}
            <Powerflow />

            <HomeComponentsContainerRight>
              {/* <div
                className={`${
                  !miniVersion
                    ? "2xl:col-span-2"
                    : "col-span-5 col-start-3 sm:col-span-3 md:col-span-4 lg:col-span-6 2xl:col-span-9"
                } w-full grid overflow-y-scroll scrollbar-hide object-contain h-[65vh] lg:h-[72vh]`}
              > */}
              <Graphs />
              <div className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
                <div ref={null}>
                  <EvCharger />
                </div>
                <div>
                  <Optimiser />
                </div>
                {/* <div ref={controlsRef}> */}
                <Controls />
                {/* </div> */}
                <Alarms />
                <Tickets />
              </div>
              {/* </div> */}
            </HomeComponentsContainerRight>
            {/* </div> */}
          </HomeComponentsContainer>
        </div>
      </div>
      <FullModal />
      <RightModal />
    </main>
  );
}
