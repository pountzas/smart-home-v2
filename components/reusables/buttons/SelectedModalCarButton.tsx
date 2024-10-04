"use client";

import { selectedModalCarState } from "@/atoms/uiAtom";
import { useRecoilState } from "recoil";

type SelectedModalCarButtonProps = {
  car: {
    car: string;
  };
  index: number;
};
function SelectedModalCarButton({ car, index }: SelectedModalCarButtonProps) {
  const [selectedModalCar, setSelectedModalCar] = useRecoilState(
    selectedModalCarState
  );
  return (
    <button
      key={index}
      onClick={() => setSelectedModalCar(index)}
      className={`h-full px-8 ${
        selectedModalCar === index
          ? "border-b-2 border-blue_custom"
          : "text-textTertiary"
      }`}
    >
      {car.car}
    </button>
  );
}

export default SelectedModalCarButton;
