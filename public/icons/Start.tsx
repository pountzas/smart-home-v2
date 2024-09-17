function Start({ fill = "#000000 ", size = 14 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.20065 9.59999L9.31398 7.26666C9.49399 7.13333 9.49399 6.86666 9.31398 6.73333L6.20065 4.4C5.98065 4.23333 5.66732 4.39333 5.66732 4.66666V9.33333C5.66732 9.60666 5.98065 9.76666 6.20065 9.59999ZM7.00065 0.333328C3.32065 0.333328 0.333984 3.31999 0.333984 7C0.333984 10.68 3.32065 13.6667 7.00065 13.6667C10.6807 13.6667 13.6673 10.68 13.6673 7C13.6673 3.31999 10.6807 0.333328 7.00065 0.333328ZM7.00065 12.3333C4.06065 12.3333 1.66732 9.93999 1.66732 7C1.66732 4.06 4.06065 1.66666 7.00065 1.66666C9.94065 1.66666 12.334 4.06 12.334 7C12.334 9.93999 9.94065 12.3333 7.00065 12.3333Z"
        fill={fill}
      />
    </svg>
  );
}

export default Start;
