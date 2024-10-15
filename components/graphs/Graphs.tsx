import ComponentsHeader from "../reusables/ComponentsHeader";

function Graphs() {
  return (
    <div className="h-[500px] flex flex-col rounded-lg bg-secondary mb-4 py-3">
      <ComponentsHeader title="Power Curves" note="Spot Values" />
      {/* <GraphsScreenContainer
        date={null}
        dataFetching={dataFetching}
        goToPrevDate={() => decrdate()}
        goToNextDate={() => incrdate()}
      /> */}
    </div>
  );
}

export default Graphs;
