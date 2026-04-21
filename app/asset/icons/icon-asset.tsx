import { Flower } from "lucide-react";

const ICONS = {
  bag: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 1.16667L1.75 3.5V11.6667C1.75 11.9761 1.87292 12.2728 2.09171 12.4916C2.3105 12.7104 2.60725 12.8333 2.91667 12.8333H11.0833C11.3928 12.8333 11.6895 12.7104 11.9083 12.4916C12.1271 12.2728 12.25 11.9761 12.25 11.6667V3.5L10.5 1.16667H3.5Z"
        stroke="white"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.75 3.5H12.25"
        stroke="white"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33329 5.83333C9.33329 6.45217 9.08746 7.04566 8.64988 7.48325C8.21229 7.92083 7.6188 8.16667 6.99996 8.16667C6.38112 8.16667 5.78763 7.92083 5.35004 7.48325C4.91246 7.04566 4.66663 6.45217 4.66663 5.83333"
        stroke="white"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  arrowRight: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.91663 7H11.0833M11.0833 7L7.58329 3.5M11.0833 7L7.58329 10.5"
        stroke="white"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  menu: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12H21M3 6H21M3 18H21"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  close: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

// Generic Icon component
type IconProps = {
  name: keyof typeof ICONS;
};

const Icon = ({ name }: IconProps) => {
  return ICONS[name] || null;
};

export default Icon;
