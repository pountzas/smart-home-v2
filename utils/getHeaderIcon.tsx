import Tickets from "@/public/icons/Tickets";
import Controls from "@/public/icons/Controls";
import Alarms from "@/public/icons/Alarms";
import Optimiser from "@/public/icons/Optimiser";
import PowerCurves from "@/public/icons/PowerCurves";
import EvCharger from "@/public/icons/EvCharger";

type HeaderIconProps = {
  title: string;
};

export const getHeaderIcon = ({ title }: HeaderIconProps) => {
  switch (title) {
    case "Tickets":
      return <Tickets size={18} fill={"#0094FF"} />;
    case "Controls":
      return <Controls size={18} fill={"#0094FF"} />;
    case "Alarms":
      return <Alarms size={18} fill={"#0094FF"} />;
    case "Optimiser":
      return <Optimiser size={18} fill={"#0094FF"} />;
    case "Power Curves":
      return <PowerCurves size={18} fill={"#0094FF"} />;
    case "EvCharger":
      return <EvCharger size={18} fill={"#0094FF"} />;
    default:
      return null;
  }
};
