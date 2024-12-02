type GridIconProps = {
  active: boolean;
  stop: boolean;
};
function GridIcon({ active, stop }: GridIconProps) {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill={active && !stop ? "white" : "#8390AA"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4325 13.3283H5.80385V14.661H4.85627C4.85627 14.1612 4.89052 13.6501 4.84536 13.1458C4.80799 12.7251 4.95904 12.5213 5.34758 12.338C7.28868 11.4191 9.21109 10.463 11.1452 9.53042C11.3398 9.43686 11.42 9.33265 11.4037 9.1212C11.3842 8.86638 11.399 8.60928 11.399 8.33013H5.79995V9.60496H4.85627C4.85627 8.96298 4.8477 8.32937 4.86717 7.69651C4.8695 7.61512 5.00576 7.51092 5.10309 7.463C6.82151 6.61868 8.54382 5.78122 10.2653 4.94299C10.5784 4.79086 10.8984 4.65014 11.1997 4.47824C11.2923 4.42499 11.3982 4.27743 11.3866 4.18691C11.3289 3.729 11.5174 3.41714 11.8553 3.10604C12.739 2.29139 13.5838 1.43643 14.445 0.5982C14.5127 0.532024 14.5836 0.46889 14.73 0.333496C14.8055 0.443029 14.8608 0.559407 14.948 0.644599C15.8527 1.53379 16.7567 2.4245 17.677 3.29924C17.8771 3.4894 17.9916 3.67956 17.9387 3.94274C17.867 4.29416 18.0438 4.45085 18.3529 4.59918C20.3158 5.53781 22.2662 6.50078 24.226 7.44626C24.4168 7.5383 24.4954 7.63718 24.4892 7.85092C24.4721 8.42825 24.4838 9.00634 24.4838 9.6042H23.5517V8.32176H17.9426C17.9426 8.64808 17.9278 8.97744 17.9535 9.30299C17.9597 9.37905 18.092 9.46577 18.1855 9.5114C20.1904 10.4949 22.1962 11.4777 24.2089 12.4467C24.4277 12.5525 24.4954 12.6711 24.4892 12.8978C24.4736 13.4835 24.4838 14.0699 24.4838 14.6701H23.5603V13.3359H17.8826C17.948 13.911 17.9262 14.4929 18.0874 15.0223C19.186 18.6171 20.3259 22.2004 21.4432 25.7899C21.511 26.009 21.599 26.0812 21.8403 26.0805C24.001 26.0698 26.1625 26.0744 28.3239 26.0744H28.6665V28.3335H0.666504V26.0744H0.995861C3.16666 26.0744 5.33745 26.0706 7.50825 26.0805C7.73249 26.0812 7.82593 26.0158 7.89055 25.8097C9.03201 22.148 10.1922 18.4915 11.3134 14.8245C11.4535 14.3666 11.3959 13.8516 11.4325 13.3306V13.3283ZM19.2685 26.0592L19.281 26.0151C17.7822 25.2346 16.2841 24.4519 14.7798 23.6814C14.7043 23.6426 14.5587 23.6814 14.4683 23.7278C13.5309 24.207 12.5973 24.6953 11.6638 25.1814C11.1281 25.4606 10.5939 25.7412 9.98582 26.0592H19.2685ZM16.9825 7.38541V5.13315H12.3521V7.38541H16.9825ZM16.9934 10.1496H12.3567V12.392H16.9934V10.1496ZM11.3297 20.1345H18.0134C16.8727 19.2385 15.7795 18.3805 14.6723 17.5103C13.5644 18.3797 12.4712 19.2385 11.3305 20.1345H11.3297ZM8.92145 25.621C10.5418 24.7684 12.0897 23.9545 13.6889 23.1132C12.5226 22.4902 11.4146 21.8985 10.2778 21.2907C9.82621 22.7321 9.38628 24.1378 8.92145 25.621ZM20.417 25.6172C19.9545 24.1401 19.5138 22.7337 19.0622 21.293C17.9223 21.9023 16.8143 22.494 15.6557 23.1132C17.2566 23.9545 18.7998 24.7661 20.417 25.6165V25.6172ZM14.6669 1.65321C13.8984 2.40472 13.1486 3.1319 12.4104 3.8682C12.3427 3.93514 12.3435 4.06749 12.3077 4.18767H17.0503C16.9934 4.04847 16.9778 3.9146 16.9023 3.8393C16.1751 3.11593 15.437 2.40244 14.6677 1.65245L14.6669 1.65321ZM12.0998 15.4581C11.698 16.739 11.3079 17.9842 10.9178 19.2294L10.9754 19.259C11.9495 18.4847 12.9236 17.7104 13.9225 16.9163C13.3113 16.4272 12.7219 15.9556 12.1006 15.4581H12.0998ZM18.3692 19.2157L18.4214 19.1761C18.0305 17.9477 17.6397 16.7192 17.2387 15.4589C16.608 15.9655 16.0217 16.4363 15.4222 16.9178C16.4289 17.7028 17.3991 18.4588 18.37 19.2157H18.3692ZM11.8919 21.0747C11.955 21.1234 11.969 21.1378 11.9861 21.1462C12.5747 21.4581 13.1634 21.7707 13.7536 22.0803C14.0526 22.237 14.3554 22.51 14.6552 22.5085C14.9667 22.5062 15.2797 22.2415 15.5864 22.0818C16.1984 21.7631 16.8065 21.4375 17.4925 21.0747H11.8919ZM16.9926 8.32632H12.3567V9.20259H16.9926V8.32632ZM16.9903 14.2167V13.3344H12.3528V14.2167H16.9903ZM7.41404 7.33521L7.43039 7.37476H11.3842V5.40013C10.0427 6.05429 8.72835 6.69475 7.41481 7.33521H7.41404ZM17.948 7.37628H21.9182L21.9299 7.33445C20.6109 6.6917 19.2911 6.04972 17.9472 5.39557V7.37704L17.948 7.37628ZM11.3834 10.4112C10.0395 11.0669 8.7229 11.7089 7.33462 12.3866H11.3834V10.4112ZM17.948 12.3882H21.9182L21.9299 12.3463C20.6109 11.7036 19.2911 11.0616 17.9472 10.4074V12.3889L17.948 12.3882ZM13.1914 15.1516C13.6773 15.5372 14.1032 15.8803 14.5369 16.2127C14.5898 16.253 14.7159 16.2781 14.7572 16.2469C15.2104 15.9031 15.6534 15.5456 16.1509 15.1516H13.1914Z"
        fill="#FEFEFE"
      />
    </svg>
  );
}

export default GridIcon;
