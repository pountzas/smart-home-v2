function CardItem({
  title,
  timeAgo,
  description,
  contributor,
  status
}: FakeData) {
  const checkStatus = (status: Status) => {
    switch (status) {
      case "New":
        return "text-blue_custom";
      case "Open":
        return "text-red_custom";
      case "Forgoten!":
        return "text-yellow_custom";
      default:
        return "text-textSecondary";
    }
  };

  return (
    <div className="h-[117px] flex justify-between py-4 pl-6 pr-9 border-b border-quaternary">
      <div className="flex flex-col items-start justify-evenly">
        <h2 className="text-lg">{title}</h2>
        <p className="text-">{timeAgo}</p>
        <p className="text-sm text-textSecondary ">{description}</p>
      </div>
      <div className="flex flex-col items-end justify-between py-2">
        <p className={`${checkStatus(status)}`}>{status}</p>
        {contributor && (
          <p className="p-2 text-sm rounded-full bg-quaternary ">
            {contributor}
          </p>
        )}
      </div>
    </div>
  );
}

export default CardItem;
