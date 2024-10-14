import Plus from "@/public/icons/Plus";
import { getHeaderIcon } from "@/utils/getHeaderIcon";
import SearchComponent from "./SearchComponent";
import ModalButton from "./buttons/ModalButton";

type ComponentsHeaderProps = {
  title: string;
  count?: number;
  note?: string;
};

function ComponentsHeader({ title, count, note }: ComponentsHeaderProps) {
  const checkAddBtn = () => {
    switch (title) {
      case "Tickets":
      case "Controls":
        return true;
      default:
        return false;
    }
  };

  const checkSearchBtn = () => {
    switch (title) {
      case "Tickets":
      case "Controls":
      case "Alarms":
        return true;
      default:
        return false;
    }
  };

  const checkModalBtn = () => {
    switch (title) {
      case "Power Curves":
        return false;
      default:
        return true;
    }
  };

  const checkFunctionalityExpandBtn = () => {
    switch (title) {
      case "Power Curves":
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="flex items-center justify-between px-6">
      <div className="flex items-center space-x-2">
        {getHeaderIcon({ title })}
        <h3 className="font-semibold sm:text-base ">{title}</h3>
        <p className="text-textTertiary">{note && note}</p>
        <p className="text-textTertiary">{count && count}</p>
      </div>
      {/* buttons */}
      <div className="flex items-center space-x-3 ease-linear">
        {checkSearchBtn() && <SearchComponent />}
        {checkAddBtn() && (
          <button className="p-3 rounded-lg bg-buttonsPrimary " type="button">
            <Plus />
          </button>
        )}
        {checkModalBtn() && <ModalButton title={title} />}
      </div>
    </div>
  );
}

export default ComponentsHeader;
