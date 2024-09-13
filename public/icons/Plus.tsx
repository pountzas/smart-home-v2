function Plus({ fill = "#DDE3E7 ", size = 10 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.99992 5.66667H5.66659V9C5.66659 9.36667 5.36659 9.66667 4.99992 9.66667C4.63325 9.66667 4.33325 9.36667 4.33325 9V5.66667H0.999919C0.633252 5.66667 0.333252 5.36667 0.333252 5C0.333252 4.63334 0.633252 4.33334 0.999919 4.33334H4.33325V1C4.33325 0.633336 4.63325 0.333336 4.99992 0.333336C5.36659 0.333336 5.66659 0.633336 5.66659 1V4.33334H8.99992C9.36659 4.33334 9.66659 4.63334 9.66659 5C9.66659 5.36667 9.36659 5.66667 8.99992 5.66667Z"
        fill={fill}
      />
    </svg>
  );
}

export default Plus;
