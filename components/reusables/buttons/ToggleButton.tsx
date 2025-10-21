import { useUIStore } from "@/atoms/uiAtom";
import FlowToggle from "@/public/icons/FlowToggle";
import MiniToggle from "@/public/icons/MiniToggle";
import { motion } from "framer-motion";

function ToggleButton() {
  const flowMiniVersion = useUIStore((state) => state.flowMiniVersionState);
  const setFlowMiniVersion = useUIStore((state) => state.setFlowMiniVersionState);
  const modal = useUIStore((state) => state.modalOpenState);

  const openMiniFlow = () => {
    !flowMiniVersion && setFlowMiniVersion(true);
  };

  const closeMiniFlow = () => {
    flowMiniVersion && setFlowMiniVersion(false);
  };
  return (
    <>
      <div
        className={` ${
          flowMiniVersion && "right-0"
        } absolute rounded-lg w-8 h-8 bg-buttonsSecondary`}
      ></div>
      <button
        type="button"
        onClick={closeMiniFlow}
        className={`${!flowMiniVersion && "text-textSecondary"} ${
          modal && "hidden"
        } flex h-8 w-8 z-[1] flex-col items-center justify-center`}
      >
        <FlowToggle fill={flowMiniVersion ? "#373D42" : "white"} />
      </button>
      <button
        type="button"
        onClick={openMiniFlow}
        className={`${flowMiniVersion && "text-textSecondary"}  ${
          modal && "hidden"
        } flex h-8 w-8 z-[1] flex-col items-center justify-center`}
      >
        <MiniToggle color={!flowMiniVersion} />
      </button>
    </>
  );
}

export default ToggleButton;
