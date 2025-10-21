"use client";

import { useUIStore } from "@/atoms/uiAtom";
import ExpandComponentIcon from "@/public/icons/ExpandComponentIcon";

function ModalButton({ title }: { title: string }) {
  const setFullModalOpen = useUIStore((state) => state.setModalOpenState);
  const setRightModalOpen = useUIStore((state) => state.setRightmodalOpenState);
  const setModalType = useUIStore((state) => state.setModalTypeState);

  const whatModalToOpen = () => {
    switch (title) {
      case "EvCharger":
      case "Evcharger":
      case "Ev Charger":
      case "Ev charger":
        setModalType("EvCharger");
        setFullModalOpen(true);
        break;
      case "Car":
        setModalType("Car");
        setRightModalOpen(true);
        break;
      case "Optimiser":
        setModalType("Optimiser");
        setFullModalOpen(true);
        break;
      case "Powerflow":
        setModalType("Powerflow");
        setRightModalOpen(true);
        break;
      case "Controls":
        setModalType("Controls");
        setRightModalOpen(true);
        break;
      case "Tickets":
        setModalType("Tickets");
        setRightModalOpen(true);
        break;
      case "Alarms":
        setModalType("Alarms");
        setRightModalOpen(true);
        break;
      default:
        break;
    }
    console.log("modalType", title);
  };

  return (
    <button
      onClick={() => whatModalToOpen()}
      className="p-3 rounded-lg bg-buttonsPrimary"
      type="button"
    >
      <ExpandComponentIcon />
    </button>
  );
}

export default ModalButton;
