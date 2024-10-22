"use client";

import { useRecoilState } from "recoil";
import { rightmodalOpenState, modalTypeState } from "../../atoms/uiAtom";
import Plus from "@/public/icons/Plus";
import Edit from "@/public/icons/Edit";
import RightModalContainer from "@/HOCs/RightModalContainer";
import Bin from "@/public/icons/Bin";
import ModalCloseButton from "../reusables/buttons/ModalCloseButton";
import ModalAddButton from "../reusables/buttons/ModalAddButton";
import ModalEditButton from "../reusables/buttons/ModalEditButton";
import ModalDeleteButton from "../reusables/buttons/ModalDeleteButton";
function RightModal() {
  const [rightmodalOpen, setRightmodalOpen] =
    useRecoilState(rightmodalOpenState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);

  const setDeviceDetails = () => {
    switch (modalType) {
      case "Solar":
      // case "Grid":
      case "Battery":
      case "EVcharger":
      case "Big01":
      case "Big02":
      case "Big03":
      case "Big04":
      case "Big05":
      case "Big06":
      case "Big07":
      case "Big08":
      case "Big09":
      case "Big10":
        return true;
      default:
        return false;
    }
  };

  const setSchedules = () => {
    switch (modalType) {
      case "Solar":
      // case "Grid":
      case "Battery":
        // case "EVcharger":
        return true;
      default:
        return false;
    }
  };

  const setGraphType = () => {
    switch (modalType) {
      case "Solar":
      case "Grid":
      case "Battery":
      case "EVcharger":
        return true;
      default:
        return false;
    }
  };

  const setModalToggle = () => {
    switch (modalType) {
      case "Solar":
      // case "Battery":
      case "EVcharger":
        return true;
      default:
        return false;
    }
  };

  const setModalToggleTitle = () => {
    switch (modalType) {
      case "Solar":
        return "Events";
      case "EVcharger":
        return "Charge History";
      default:
        return "";
    }
  };

  const setBigLoads = () => {
    switch (modalType) {
      case "Big01":
      case "Big02":
      case "Big03":
      case "Big04":
      case "Big05":
      case "Big06":
      case "Big07":
      case "Big08":
      case "Big09":
      case "Big10":
        return true;
      default:
        return false;
    }
  };
  return (
    <RightModalContainer>
      {/* <div
        onClick={closeModal}
        className="top-0 left-0 absolute z-[200] min-h-screen max-h-screen min-w-[100%] bg-primary opacity-70 blur-lg"
      ></div> */}
      <div
        className={`absolute top-0 right-0 rounded-l-xl overscroll-contain min-h-screen max-h-screen min-w-[40vw] max-w-[40vw] z-[200] bg-secondary flex flex-col`}
      >
        {/* topbar */}
        <section className="flex items-center justify-between p-2 rounded-tl-xl bg-tertiary text-white">
          <div className="flex items-start p-2 space-x-3">
            {/* {props?.power && props.icon} */}
            <h2>{modalType !== "" && modalType}</h2>
          </div>
          <div className="flex items-center p-2 space-x-3 ">
            {/* buttons */}
            <ModalAddButton />
            <ModalEditButton />
            <ModalDeleteButton />
            <ModalCloseButton />
          </div>
        </section>

        {/* {setBigLoads() && <BigLoads devices={devices} props={props} />} */}

        <div className="mb-4 overflow-y-scroll scrollbar-hide">
          {setDeviceDetails() && (
            <section>
              {/* device detais */}
              {/* <DeviceDetails props={props} /> */}
            </section>
          )}
          {setSchedules() && (
            <section>
              {/* Schedules */}
              {/* <Schedules props={props} /> */}
            </section>
          )}
          {setGraphType() && (
            <section>
              {/* Graphs */}
              {/* <ModalGraph name={modalType} /> */}
            </section>
          )}
          {setModalToggle() && (
            <section>
              {/* Events & History Charging */}
              {/* <ModalToggleComponent
                props={props}
                title={setModalToggleTitle()}
              /> */}
            </section>
          )}
        </div>
      </div>
    </RightModalContainer>
  );
}

export default RightModal;
