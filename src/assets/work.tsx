interface IWorkProps {
  color?: string;
}

const Work: React.FC<IWorkProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={18}
      fill="none"
      {...props}
    >
      <path
        fill={props.color ?? "#000"}
        d="M24 3v15H0V3h7.5V1.5c0-.21.04-.406.117-.585.078-.18.184-.336.317-.47.132-.132.293-.241.48-.327A1.27 1.27 0 0 1 9 0h6c.21 0 .406.04.586.118.18.078.336.183.469.316.133.133.242.293.328.48.086.188.125.383.117.586V3H24ZM9 3h6V1.5H9V3ZM1.5 4.5v2.168L9 10.407V9h6v1.407l7.5-3.739V4.5h-21Zm9 6V12h3v-1.5h-3Zm12 6V8.333L15 12.094v1.407H9v-1.407L1.5 8.333V16.5h21Z"
      />
    </svg>
  );
};

export default Work;
