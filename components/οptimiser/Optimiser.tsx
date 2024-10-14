import ComponentsHeader from "../reusables/ComponentsHeader";
import PercentageBar from "../reusables/PercentageBar";

function Optimiser() {
  return (
    <>
      <div className="h-full pt-5 pb-3 rounded-lg bg-secondary">
        <ComponentsHeader title="Optimiser" note="annually" />

        <div className="px-6">
          <PercentageBar
            title={`Savings`}
            topLeft={`Till Date`}
            topRight={`Predicted`}
            bottomLeft={`£40`}
            bottomRight={`£100`}
            startValue={40}
            endValue={100}
          />
          <PercentageBar
            title={`Total Cost`}
            topLeft={`Optimized`}
            topRight={`Default`}
            bottomLeft={`£61.94`}
            bottomRight={`£84.23`}
            startValue={61.94}
            endValue={84.23}
          />
        </div>
      </div>
    </>
  );
}

export default Optimiser;
