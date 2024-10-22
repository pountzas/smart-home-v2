import Edit from "@/public/icons/Edit";

function ModalEditButton() {
  return (
    <button
      className={`w-[40px] lg:w-[86px] h-[40px] rounded-lg bg-buttonsPrimary p-2 flex items-center space-x-2 justify-center`}
      type="button"
    >
      <Edit />
      <p className="hidden lg:block">Edit</p>
    </button>
  );
}

export default ModalEditButton;
