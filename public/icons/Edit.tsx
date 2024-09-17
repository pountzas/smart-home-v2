function Edit({ fill = "#DDE3E7 ", size = 15 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.25 11.9375V14.75H3.0625L11.3575 6.455L8.545 3.6425L0.25 11.9375ZM14.0575 3.75501L11.245 0.942505L9.3475 2.84751L12.16 5.66L14.0575 3.75501Z"
        fill={fill}
      />
    </svg>
  );
}

export default Edit;
