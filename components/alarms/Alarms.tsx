import CardItem from "../reusables/CardItem";
import ComponentsHeader from "../reusables/ComponentsHeader";

const fakeData: FakeData[] = [
  {
    title: "Alarm",
    timeAgo: "1 hour ago",
    description: "description",
    contributor: "VS",
    status: "New"
  },
  {
    title: "Alarm",
    timeAgo: "2 days ago",
    description: "Wind turbine went super-sonic",
    contributor: "JD",
    status: "Open"
  },
  {
    title: "Alarm",
    timeAgo: "3 decades ago",
    description: "No power",
    contributor: "NP",
    status: "Forgoten!"
  }
];

function Alarms() {
  return fakeData.length > 0 ? (
    <div className="pt-5 pb-3 rounded-lg bg-secondary">
      <ComponentsHeader title="Alarms" count={fakeData.length} />

      {fakeData.map((data, index) => (
        <CardItem
          key={index}
          title={data.title}
          timeAgo={data.timeAgo}
          description={data.description}
          contributor={data.contributor}
          status={data.status}
        />
      ))}
    </div>
  ) : null;
}

export default Alarms;
