import { assets } from "@/utils/controlsUtils";
import ComponentsHeader from "../reusables/ComponentsHeader";
import ControlsItem from "./ControlsItem";

function Controls() {
  return (
    <>
      <div className="flex flex-col h-full pt-3 rounded-lg bg-secondary">
        <ComponentsHeader title="Controls" />
        {/* <ControlsList displayAssets={assets} /> */}
        <div className="flex flex-col w-full px-3 py-4 space-y-4">
          {assets.map((asset) => (
            <ControlsItem key={asset.id + asset.name} asset={asset} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Controls;
