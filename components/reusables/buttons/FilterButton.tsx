import Filter from "@/public/icons/Filter";

type FilterButtonProps = {
  click: () => void;
};

function FilterButton({ click }: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={click}
      className="rounded-lg bg-buttonsPrimary"
    >
      <Filter />
    </button>
  );
}

export default FilterButton;
