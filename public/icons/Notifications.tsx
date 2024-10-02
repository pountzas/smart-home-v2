function Notifications({ fill = "#0094FF ", size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} fill="none">
      <path
        fill={fill}
        d="M10 0C4.475 0 0 4.475 0 10s4.475 10 10 10 10-4.475 10-10S15.525 0 10 0Z"
      />
    </svg>
  );
}

export default Notifications;
