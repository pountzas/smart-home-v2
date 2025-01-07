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
  return (
    <main className=" w-full">
      <div className="flex flex-col items-center justify-between w-full bg-primary">
        <div className="grid gap-4 grid-rows-7 w-full">
          <div className="row-span-1 w-full">
            <IndexHeader />
          </div>

          <HomeComponentsContainer>
            <Powerflow />

            <HomeComponentsContainerRight>
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
            </HomeComponentsContainerRight>
          </HomeComponentsContainer>
        </div>
      </div>
      <FullModal />
      <RightModal />
    </main>
  );
}
