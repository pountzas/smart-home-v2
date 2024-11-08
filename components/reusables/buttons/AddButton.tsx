import Add from "@/public/icons/Add";

type AddButtonProps = {
  click?: null | (() => void);
};

function AddButton({ click }: AddButtonProps) {
  return (
    <button
      type="button"
      // onClick={click}
      className="rounded-lg bg-buttonsPrimary"
    >
      <Add />
    </button>
  );
}

export default AddButton;
