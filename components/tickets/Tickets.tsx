import CardItem from "../reusables/CardItem";
import ComponentsHeader from "../reusables/ComponentsHeader";

const fakeData: FakeData[] = [
  {
    title: "Warning",
    timeAgo: "1 hour ago",
    description: "solar panel broken",
    contributor: "VS",
    status: "New"
  },
  {
    title: "Warning",
    timeAgo: "2 days ago",
    description: "hub is not working",
    contributor: "JD",
    status: "Open"
  },
  {
    title: "Warning",
    timeAgo: "2 days ago",
    description: "Wind turbine is to loud",
    contributor: "JD",
    status: "Open"
  },
  {
    title: "Error",
    timeAgo: "3 decades ago",
    description: "I can't put gas to my EV",
    contributor: "NP",
    status: "Forgoten!"
  }
];
function Tickets() {
  return fakeData.length > 0 ? (
    <div className="pt-5 pb-3 rounded-lg bg-secondary">
      <ComponentsHeader title="Tickets" count={fakeData.length} />
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

export default Tickets;
