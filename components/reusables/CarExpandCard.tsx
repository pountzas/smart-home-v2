import { useState } from "react";
import ExpandButton from "./buttons/ExpandButton";
import StatusButton from "./buttons/StatusButton";

function CarExpandCard({ item }: { item: CarCardData }) {
  const [openCarInfo, setOpenCarInfo] = useState(false);

  const setExpandState = () => {
    setOpenCarInfo(!openCarInfo);
  };

  return (
    <>
      <div className="py-2 space-y-1">
        <div
          key={item.id}
          className="w-full p-4 text-xs rounded-lg bg-quaternary"
        >
          <div className="">
            <ExpandButton
              onclick={setExpandState}
              open={openCarInfo}
              title={item.car}
              secondary={item.owner}
            />
          </div>
          {openCarInfo && (
            <div className="grid w-full grid-cols-3 p-4 text-xs bg-quaternary rounded-xl">
              <div>
                <p className="text-textTertiary">{item.block1[0]}</p>
                <p>{item.block1[1]}</p>
                <div className="pt-2">
                  <p className="text-textTertiary">{item.block4[0]}</p>
                  <p>{item.block4[1]}</p>
                </div>
              </div>
              <div>
                <p className="text-textTertiary">{item.block2[0]}</p>
                <p>{item.block2[1]}</p>
                <div className="pt-2">
                  <p className="text-textTertiary">{item.block5[0]}</p>
                  <p>{item.block5[1]}</p>
                </div>
              </div>
              <div>
                <p className="text-textTertiary">{item.block3[0]}</p>
                <StatusButton status={item.block3[1]} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CarExpandCard;
