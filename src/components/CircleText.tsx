import clsx from "clsx";

type Props = {
  textColor?: string;
  backgroundColor?: string;
  className?: string;
};

export default function CircleText({
  textColor = "#050505",
  backgroundColor = "#ffdd00",
  className,
}: Props) {
  return (
    <div
      className={clsx(
        "circle-text animate-spin-slow origin-center overflow-hidden rounded-full",
        className,
      )}
    >
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <circle cx="50" cy="50" r="50" fill={backgroundColor} />
        <path
          id="circlePath"
          fill="none"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
        />
        <text>
          <textPath
            href="#circlePath"
            fill={textColor}
            startOffset="0%"
            className="text-[11px] font-black uppercase tracking-widest"
          >
            Big Shock Energy • Big Shock Energy •
          </textPath>
        </text>
      </svg>
    </div>
  );
}
