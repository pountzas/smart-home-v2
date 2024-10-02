import { motion } from "framer-motion";

type ProgressCircleProps = {
  percent: number;
  progressRemainingColor: string;
  progressColor?: string;
};
const ProgressCircle = ({
  progressRemainingColor = "rgb(255, 255, 255, 0.1)",
  percent = 0,
  progressColor = "rgb(83, 202, 255, 0.5)"
}: ProgressCircleProps) => {
  const setStrokeDasharray = () => {
    let value = percent;
    if (value < 0) value = 0;
    if (value > 100) value = 100;
    return [(value * 157) / 128, 157 - (value * 157) / 128];
  };

  const hideLowPortion = () => {
    return 124;
  };

  return (
    <svg
      className="rotate-[130deg]"
      height="250px"
      width="250px"
      viewBox="0 0 58 58"
      style={{ justifyContent: "center" }}
    >
      <circle
        strokeWidth={"5px"}
        stroke={progressRemainingColor}
        fill="transparent"
        cx="29"
        cy="29"
        r={25}
        strokeDasharray={hideLowPortion()}
        style={{ transform: "rotate(-2deg)", transformOrigin: "center" }}
      />

      <circle
        fill="transparent"
        cx="29"
        cy="29"
        r={22.6}
        strokeDasharray={hideLowPortion()}
      />

      <motion.circle
        // initial={{ rotate: 230 }}
        animate={{ strokeDasharray: setStrokeDasharray().toString() }}
        transition={{ duration: 0.5 }}
        strokeWidth={"2.5px"}
        stroke={progressColor}
        fill="transparent"
        cx="29"
        cy="29"
        r={25}
      />
    </svg>
  );
};

export default ProgressCircle;
