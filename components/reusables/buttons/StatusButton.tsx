type StatusButtonProps = {
  status:
    | "Not Started"
    | "In Progress"
    | "Completed"
    | "Attachment"
    | "Fully Charged"
    | "Static Load"
    | "Dynamic Load"
    | "User Mode"
    | "ok"
    | "OK"
    | "Ok"
    | "Charging"
    | string;
};

function StatusButton({ status }: StatusButtonProps) {
  const getColor = () => {
    switch (status) {
      case "Not Started":
        return "bg-[#DDE3E7]";
      case "In Progress":
        return "bg-[#0094FF]";
      case "Completed":
        return "bg-[#027062]";
      case "Attachment":
        return "bg-blue-400";
      case "Fully Charged":
        return "bg-[#008192]";
      case "Static Load":
        return "bg-[#008675]";
      case "Dynamic Load":
        return "bg-[#008192]";
      case "User Mode":
        return "bg-[#7A59FA]";
      case "ok":
      case "OK":
      case "Ok":
        return "bg-blue_custom";
      case "Charging":
        return "bg-[#0094FF]";
      default:
        return null;
    }
  };

  return (
    <div
      className={`${getColor()} text-xs whitespace-nowrap p-1 rounded-lg w-fit h-fit`}
    >
      {status}
    </div>
  );
}

export default StatusButton;
