import Alarms from "@/components/alarms/Alarms";
import EvCharger from "@/components/evCharger/EvCharger";
import IndexHeader from "@/components/indexHeader/IndexHeader";
import Powerflow from "@/components/powerFlow";
import Tickets from "@/components/tickets/Tickets";

export default function Home() {
  let flowMiniVersion = false;
  return (
    <main className="flex flex-col items-center justify-between w-full bg-primary">
      <div className="grid gap-4 grid-rows-7 w-full">
        <div className="row-span-1 w-full">
          <IndexHeader />
        </div>
        <div
          className={`w-full justify-between grid grid-rows-1 row-span-6 object-contain gap-4 px-4 text-textPrimary ${
            flowMiniVersion
              ? "grid-cols-7 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 2xl:grid-cols-10"
              : "lg:grid-cols-2 2xl:grid-cols-3"
          }`}
        >
          <Powerflow />

          <div
            className={`${
              flowMiniVersion
                ? "col-span-5 col-start-3 sm:col-span-3 md:col-span-4 lg:col-span-6 2xl:col-span-9"
                : "2xl:col-span-2"
            } w-full grid overflow-y-scroll scrollbar-hide object-contain h-[65vh] lg:h-[72vh]`}
          >
            {/* <Graphs /> */}
            <div className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
              <div ref={null}>
                <EvCharger />
              </div>
              {/* <div ref={optimiserRef}><Optimiser /></div> */}
              {/* <div ref={controlsRef}><Controls /></div> */}
              <Alarms />
              <Tickets />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
