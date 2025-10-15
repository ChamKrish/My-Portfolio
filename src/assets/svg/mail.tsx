import { SvgIcon } from "@mui/material";

interface IMailProps {
  color?: string;
  className?: string;
}

const Mail: React.FC<IMailProps> = (props) => {
  return (
    <SvgIcon
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.725 19.5H19.325V8.5625L12.125 13.25L4.925 8.5625V19.5H2.525V4.5H3.965L12.125 9.8125L20.285 4.5H21.725M21.725 2H2.525C1.193 2 0.125 3.1125 0.125 4.5V19.5C0.125 20.163 0.377856 20.7989 0.827944 21.2678C1.27803 21.7366 1.88848 22 2.525 22H21.725C22.3615 22 22.972 21.7366 23.4221 21.2678C23.8721 20.7989 24.125 20.163 24.125 19.5V4.5C24.125 3.83696 23.8721 3.20107 23.4221 2.73223C22.972 2.26339 22.3615 2 21.725 2Z"
        fill={props.color || "black"}
      />
    </SvgIcon>
  );
};

export default Mail;
