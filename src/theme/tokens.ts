// Raw token values for contexts that can't use NativeWind classes
// (SVG fills/strokes, LinearGradient colors, shadow colors). Keep in sync
// with the color/radius scale in tailwind.config.js.

export const colors = {
  canvas: "#0c0816",
  ink: "#f6f1ff",
  inkDim: "rgba(246, 241, 255, 0.7)",
  inkSoft: "rgba(246, 241, 255, 0.45)",
  onBright: "#2a1248",
  pink: "#f0abfc",
  pinkDeep: "#e879f9",
  violet: "#a78bfa",
  lilac: "#c4b5fd",
  indigo: "#818cf8",
  sky: "#7dd3fc",
  rose: "#fda4af",
  gold: "#fcd34d",
  panel: "rgba(255, 255, 255, 0.04)",
  panelLine: "rgba(255, 255, 255, 0.08)",
  hairline: "rgba(255, 255, 255, 0.07)",
} as const;

export const radii = {
  field: 12,
  row: 14,
  tile: 16,
  card: 18,
  fab: 20,
  glass: 22,
  tabbar: 28,
  full: 999,
} as const;

// 135deg diagonal gradient pairs, as [start, end] for expo-linear-gradient
export const gradients = {
  primary: [colors.pink, colors.violet],
  wealth: [colors.gold, colors.pink],
  release: [colors.violet, "#4c1d95"],
  pinkIndigo: [colors.pink, colors.indigo],
  goldRose: [colors.gold, colors.rose],
  lilacSky: [colors.lilac, colors.sky],
} as const;

// FTBA — Feel / Think / Believe / Act hue map, reused for step nodes,
// section cards, and goal categories that mirror this palette.
export const ftbaHues = {
  feel: colors.rose,
  think: colors.pink,
  believe: colors.lilac,
  act: colors.gold,
} as const;

// Goal/FTBA category accent colors (vision board, FTBA list filters, etc.)
export const categoryColors = {
  wealth: colors.gold,
  health: "#86efac",
  love: colors.rose,
  career: colors.pink,
  spirit: colors.lilac,
} as const;

export const shadows = {
  glow: {
    shadowColor: colors.pink,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.6,
    shadowRadius: 30,
    elevation: 10,
  },
} as const;
