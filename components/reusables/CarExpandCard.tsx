"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ExpandButton from "./buttons/ExpandButton";
import StatusButton from "./buttons/StatusButton";

function CarExpandCard({ item }: { item: CarCardData }) {
  const [openCarInfo, setOpenCarInfo] = useState(false);

  const setExpandState = () => {
    setOpenCarInfo(!openCarInfo);
  };

  return (
    <motion.div
      initial={{ height: 55 }}
      animate={{ height: openCarInfo ? "auto" : 55 }}
      transition={{ duration: 0.1 }}
      key={item.id}
      className="w-full flex flex-col py-4 items-center justify-between text-xs rounded-lg bg-quaternary my-2 px-4"
    >
      <ExpandButton
        onclick={setExpandState}
        open={openCarInfo}
        title={item.car}
        secondary={item.owner}
      />
      {openCarInfo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid w-full grid-cols-3 p-4 text-xs bg-quaternary rounded-xl"
        >
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
        </motion.div>
      )}
    </motion.div>
  );
}

export default CarExpandCard;
