import { flowMiniVersionState } from "@/atoms/uiAtom";
import Powerflow from "@/components/powerFlow";
import Image from "next/image";
import { useRef } from "react";
import { useRecoilState } from "recoil";

export default function Home() {
  const [flowMiniVersion, setFlowMiniVersion] =
    useRecoilState(flowMiniVersionState);
  const controlsRef = useRef(null);
  const optimiserRef = useRef(null);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid gap-4 grid-rows-7 ">
        <div className="row-span-1">
          {/* <IndexHeader controlsRef={controlsRef} optimiserRef={optimiserRef} /> */}
        </div>
        <div
          className={`grid grid-rows-1 row-span-6 object-contain gap-4 px-4 text-textPrimary ${
            flowMiniVersion
              ? "grid-cols-7 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 2xl:grid-cols-10"
              : "lg:grid-cols-2 2xl:grid-cols-3"
          }`}
        >
          <div className={`${flowMiniVersion && "col-span-2 sm:col-span-1"} `}>
            <Powerflow />
          </div>
          <div
            className={`${
              flowMiniVersion
                ? "col-span-5 col-start-3 sm:col-span-3 md:col-span-4 lg:col-span-6 2xl:col-span-9"
                : "2xl:col-span-2"
            } grid overflow-y-scroll scrollbar-hide object-contain h-[65vh] lg:h-[72vh]`}
          >
            <div>
              {/* <Graphs /> */}
              <div className="grid grid-cols-1 gap-4 pt-4 2xl:grid-cols-2">
                <div ref={null}>{/* <EvCharger /> */}</div>
                <div ref={optimiserRef}>{/* <Optimiser /> */}</div>
                <div ref={controlsRef}>{/* <Controls /> */}</div>
                {/* <Alarms /> */}
                {/* <Tickets /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
