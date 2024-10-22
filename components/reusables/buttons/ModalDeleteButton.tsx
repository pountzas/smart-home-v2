import Bin from "@/public/icons/Bin";
import { modalTypeState } from "@/atoms/uiAtom";
import { useRecoilState } from "recoil";

function ModalDeleteButton() {
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  return (
    <>
      {modalType === "Power" && (
        <button
          className={`w-[40px] lg:w-[86px] h-[40px] rounded-lg bg-buttonsPrimary p-2 flex items-center space-x-2 justify-center`}
          type="button"
        >
          <Bin />
          <p className="hidden lg:block">Delete</p>
        </button>
      )}
    </>
  );
}

export default ModalDeleteButton;
