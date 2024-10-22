"use client";

import { useRecoilState } from "recoil";
import {
  modalOpenState,
  rightmodalOpenState,
  modalTypeState
} from "@/atoms/uiAtom";
import ExpandComponentIcon from "@/public/icons/ExpandComponentIcon";

function ModalButton({ title }: { title: string }) {
  const [fullModalOpen, setFullModalOpen] = useRecoilState(modalOpenState);
  const [rightModalOpen, setRightModalOpen] =
    useRecoilState(rightmodalOpenState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);

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
    console.log("modalType", modalType);
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
