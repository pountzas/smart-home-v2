import { flowMiniVersionState } from "@/atoms/uiAtom";
import FlowToggle from "@/public/icons/FlowToggle";
import MiniToggle from "@/public/icons/MiniToggle";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";

function ToggleButton() {
  const [flowMiniVersion, setFlowMiniVersion] =
    useRecoilState(flowMiniVersionState);
  const openMiniFlow = () => {
    !flowMiniVersion && setFlowMiniVersion(true);
  };

  const closeMiniFlow = () => {
    flowMiniVersion && setFlowMiniVersion(false);
  };
  return (
    <>
      <div
        className={`absolute rounded-lg ${
          flowMiniVersion && "right-0"
        } w-8 h-8 bg-buttonsSecondary`}
      ></div>
      <button
        type="button"
        onClick={closeMiniFlow}
        className={`${
          !flowMiniVersion && "text-textSecondary"
        } flex h-8 w-8 z-[1] flex-col items-center justify-center`}
      >
        <FlowToggle fill={flowMiniVersion ? "#373D42" : "white"} />
      </button>
      <button
        type="button"
        onClick={openMiniFlow}
        className={`${
          flowMiniVersion && "text-textSecondary"
        } flex h-8 w-8 z-[1] flex-col items-center justify-center`}
      >
        <MiniToggle color={!flowMiniVersion} />
      </button>
    </>
  );
}

export default ToggleButton;
