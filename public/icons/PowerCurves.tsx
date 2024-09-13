function PowerCurves({ fill = "#0094FF ", size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 13.9925L6.125 8.36001L9.125 11.36L14.4425 5.38251L15.5 6.44001L9.125 13.61L6.125 10.61L1.625 15.1175L0.5 13.9925ZM1.625 10.6175L6.125 6.11001L9.125 9.11001L15.5 1.94001L14.4425 0.882507L9.125 6.86001L6.125 3.86001L0.5 9.49251L1.625 10.6175Z"
        fill={fill}
      />
    </svg>
  );
}

export default PowerCurves;
