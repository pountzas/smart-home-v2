"use client";

import { useUIStore } from "@/atoms/uiAtom";

type SelectedModalCarButtonProps = {
  car: {
    car: string;
  };
  index: number;
};
function SelectedModalCarButton({ car, index }: SelectedModalCarButtonProps) {
  const selectedModalCar = useUIStore((state) => state.selectedModalCarState);
  const setSelectedModalCar = useUIStore((state) => state.setSelectedModalCarState);

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
