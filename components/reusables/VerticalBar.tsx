import { motion } from "framer-motion";

type VerticalBarProps = {
  value: number;
  index: number;
  color: "bg-blue_custom" | "bg-lightBlue_custom";
};
function VerticalBar({ value, index, color }: VerticalBarProps) {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: value * 4 }}
      transition={{ delay: 0.03 * index }}
      key={index}
      className={`w-[1.2%] ${color} bottom-0 rounded-t-full shadow-lg`}
    ></motion.div>
  );
}

export default VerticalBar;
