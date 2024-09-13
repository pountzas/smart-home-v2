function Tickets({ fill = "#0094FF ", size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM13.595 5.84L11.51 6.7025C11.1275 5.6825 10.325 4.8725 9.2975 4.4975L10.16 2.4125C11.735 3.0125 12.9875 4.265 13.595 5.84ZM8 10.25C6.755 10.25 5.75 9.245 5.75 8C5.75 6.755 6.755 5.75 8 5.75C9.245 5.75 10.25 6.755 10.25 8C10.25 9.245 9.245 10.25 8 10.25ZM5.8475 2.405L6.725 4.49C5.69 4.865 4.8725 5.6825 4.49 6.7175L2.405 5.8475C3.0125 4.265 4.265 3.0125 5.8475 2.405ZM2.405 10.1525L4.49 9.29C4.8725 10.325 5.6825 11.135 6.7175 11.51L5.84 13.595C4.265 12.9875 3.0125 11.735 2.405 10.1525ZM10.16 13.595L9.2975 11.51C10.325 11.1275 11.135 10.3175 11.51 9.2825L13.595 10.16C12.9875 11.735 11.735 12.9875 10.16 13.595Z"
        fill={fill}
      />
    </svg>
  );
}

export default Tickets;
