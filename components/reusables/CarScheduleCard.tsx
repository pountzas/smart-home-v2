import Edit from "@/public/icons/Edit";
import Start from "@/public/icons/Start";
import Stop from "@/public/icons/Stop";

function CarScheduleCard({
  item,
  key
}: {
  item: [number, string, string, string, string];
  key: number;
}) {
  return (
    <div
      key={key}
      className="grid items-center w-full grid-cols-5 px-4 py-3 rounded-lg bg-quaternary"
    >
      <div className="flex items-center space-x-1">
        <p className="text-2xl">{item[0]}</p>
        <div className="text-[10px] text-textTertiary whitespace-nowrap">
          <p>{item[1]}</p>
          <p>{item[2]}</p>
        </div>
      </div>
      <div></div>
      <div className="flex items-center space-x-2 text-xs">
        <Start fill="white" />
        <p className="text-textTertiary">Start</p>
        <p className="font-bold">{item[3]}</p>
      </div>
      <div className="flex items-center space-x-2 text-xs">
        <Stop fill="white" />
        <p className="text-textTertiary">End</p>
        <p className="font-bold">{item[4]}</p>
      </div>
      <div className="flex justify-end">
        <button className="p-2 rounded-lg">
          <Edit />
        </button>
      </div>
    </div>
  );
}

export default CarScheduleCard;
