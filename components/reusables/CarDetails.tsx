import Edit from "@/public/icons/Edit";

function CarDetails({ cars, carIndex }: CarDetailsTypes) {
  return (
    <div className="grid w-full grid-cols-4 gap-4 p-4 text-sm h-fit bg-tertiary rounded-xl">
      <div className="flex flex-col space-y-2">
        <div>
          <h4 className="text-textTertiary">Name</h4>
          <p className="text-bold">{cars[carIndex].car}</p>
        </div>
        <div>
          <h4 className="text-textTertiary">Location</h4>
          <p className="text-bold">Jinko</p>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div>
          <h4 className="text-textTertiary">Manufacturer</h4>
          <p className="text-bold">Jinko</p>
        </div>
        <div>
          <h4 className="text-textTertiary">Capacity</h4>
          <p className="text-bold">Jinko</p>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div>
          <h4 className="text-textTertiary">Serial Number</h4>
          <p className="text-bold">Jinko</p>
        </div>
        <div>
          <h4 className="text-textTertiary">Model Number</h4>
          <p className="text-bold">Jinko</p>
        </div>
      </div>
      <div className="flex flex-col items-end space-y-2">
        <button className="p-2 rounded-lg bg-buttonsPrimary">
          <Edit />
        </button>
        <div className="text-xs text-right text-textTertiary">
          <p>Last Online</p>
          <p>28/10/22</p>
          <p>13:22:47</p>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
