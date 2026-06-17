import Svg, { Circle, Path, Rect } from "react-native-svg";

export type IconName =
  | "plus"
  | "arrow"
  | "arrowLeft"
  | "sparkle"
  | "heart"
  | "moon"
  | "star"
  | "flame"
  | "chevronRight"
  | "check"
  | "close"
  | "pencil"
  | "bell"
  | "calendar"
  | "play"
  | "mic"
  | "image"
  | "target"
  | "lock"
  | "chart"
  | "eye"
  | "book"
  | "info"
  | "quote"
  | "home"
  | "ftba"
  | "practice"
  | "vision"
  | "profile";

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export function Icon({ name, size = 18, color = "#fff", strokeWidth = 1.6 }: IconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {renderGlyph(name, color)}
    </Svg>
  );
}

function renderGlyph(name: IconName, color: string) {
  switch (name) {
    case "plus":
      return <Path d="M12 5v14M5 12h14" />;
    case "arrow":
      return <Path d="M5 12h14M13 6l6 6-6 6" />;
    case "arrowLeft":
      return <Path d="M19 12H5M11 18l-6-6 6-6" />;
    case "sparkle":
      return <Path d="M12 3l1.6 5.6L19 10l-5.4 1.4L12 17l-1.6-5.6L5 10l5.4-1.4L12 3z" />;
    case "heart":
      return (
        <Path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 000-7.6z" />
      );
    case "moon":
      return <Path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />;
    case "star":
      return <Path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-7z" />;
    case "flame":
      return (
        <Path d="M12 2s4 4 4 9a4 4 0 01-8 0c0-2 2-3 2-3s-2 5 1 7c-3 0-5-2-5-5 0-5 6-8 6-8z" />
      );
    case "chevronRight":
      return <Path d="M9 6l6 6-6 6" />;
    case "check":
      return <Path d="M5 13l4 4L19 7" />;
    case "close":
      return <Path d="M6 6l12 12M18 6L6 18" />;
    case "pencil":
      return <Path d="M4 20h4l11-11-4-4L4 16v4z" />;
    case "bell":
      return <Path d="M18 16V11a6 6 0 10-12 0v5l-2 2h16l-2-2zM10 21h4" />;
    case "calendar":
      return <Path d="M3 6h18v15H3zM3 10h18M8 3v5M16 3v5" />;
    case "play":
      return <Path d="M6 4l14 8-14 8V4z" />;
    case "mic":
      return (
        <>
          <Rect x={9} y={3} width={6} height={12} rx={3} />
          <Path d="M5 11a7 7 0 0014 0M12 18v3" />
        </>
      );
    case "image":
      return (
        <>
          <Rect x={3} y={4} width={18} height={16} rx={2} />
          <Circle cx={9} cy={10} r={2} />
          <Path d="M3 17l5-5 4 4 3-3 6 6" />
        </>
      );
    case "target":
      return (
        <>
          <Circle cx={12} cy={12} r={9} />
          <Circle cx={12} cy={12} r={5} />
          <Circle cx={12} cy={12} r={1.5} fill={color} />
        </>
      );
    case "lock":
      return (
        <>
          <Rect x={5} y={11} width={14} height={9} rx={2} />
          <Path d="M8 11V8a4 4 0 018 0v3" />
        </>
      );
    case "chart":
      return <Path d="M3 21V3M3 17l5-4 4 3 8-7" />;
    case "eye":
      return (
        <>
          <Path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
          <Circle cx={12} cy={12} r={3} />
        </>
      );
    case "book":
      return (
        <Path d="M4 4h7a4 4 0 014 4v13H8a4 4 0 01-4-4V4zM20 4h-7a4 4 0 00-4 4v13h7a4 4 0 004-4V4z" />
      );
    case "info":
      return (
        <>
          <Circle cx={12} cy={12} r={9} />
          <Path d="M12 8v.01M12 12v4" />
        </>
      );
    case "quote":
      return <Path d="M7 7h4v4H7zM7 11l-2 5M13 7h4v4h-4zM13 11l-2 5" />;
    case "home":
      return <Path d="M3 11L12 3l9 8v9a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1v-9z" />;
    case "ftba":
      return <Path d="M12 4v16M4 12h16M6 6l12 12M18 6L6 18" />;
    case "practice":
      return (
        <Path d="M12 2a4 4 0 014 4c0 3-4 6-4 6s-4-3-4-6a4 4 0 014-4zM5 22c1-5 4-7 7-7s6 2 7 7" />
      );
    case "vision":
      return <Path d="M3 6h18v12H3zM3 10h18M9 6v12" />;
    case "profile":
      return <Path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c1-4 4-6 8-6s7 2 8 6" />;
    default:
      return null;
  }
}
