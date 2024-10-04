"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type PercentageBarProps = {
  startValue: number;
  endValue: number;
  title?: string;
  topLeft?: string;
  topRight?: string;
  bottomLeft?: string;
  bottomRight?: string;
};

function PercentageBar({
  startValue,
  endValue,
  title,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight
}: PercentageBarProps) {
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    const EmissionsPercentage = () => {
      const calculate = (startValue / endValue) * 100;
      return calculate.toFixed(0);
    };
    console.log(typeof EmissionsPercentage());
    setPercentage(Number(EmissionsPercentage()));
  }, [startValue, endValue]);

  return (
    <div className="w-full pt-6 space-y-2 text-sm">
      <p>{title}</p>
      <div className="flex items-center justify-between text-xs">
        <p>{topLeft}</p>
        <p>{topRight}</p>
      </div>
      <div className="h-2 bg-quaternary">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          // style={{ width: `${percentage}%` }}
          className="h-full bg-blue_custom"
        ></motion.div>
      </div>
      <div className="flex items-center justify-between text-xs">
        <p>{bottomLeft}</p>
        <p>{bottomRight}</p>
      </div>
    </div>
  );
}

export default PercentageBar;
