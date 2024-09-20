import Expand from "@/public/icons/Expand";

type ExpandButtonProps = {
  onclick: () => void;
  title: string;
  secondary?: string;
  open?: boolean;
};

function ExpandButton({ onclick, title, secondary }: ExpandButtonProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center space-x-1">
        <div className="flex items-center space-x-2">
          {secondary && (
            <div className="w-2 h-2 rounded-full bg-blue_custom"></div>
          )}
          <h3>{title}</h3>
        </div>
        <h3 className="text-textTertiary">{secondary}</h3>
      </div>

      <button
        onClick={onclick}
        type="button"
        className={`${!onclick && "rotate-180"} p-2`}
      >
        <Expand />
      </button>
    </div>
  );
}

export default ExpandButton;
