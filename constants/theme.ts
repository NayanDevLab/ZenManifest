export const COLORS = {
  background: {
    DEFAULT: '#1a0a2e',
    secondary: '#2d1454',
    tertiary: '#3d1f6b',
  },
  surface: {
    DEFAULT: '#251135',
    elevated: '#3d1f6b',
  },
  primary: {
    DEFAULT: '#8B5CF6',
    light: '#a78bfa',
    lighter: '#c4b5fd',
    dark: '#7c3aed',
  },
  secondary: {
    DEFAULT: '#ec4899',
    light: '#f472b6',
    dark: '#be185d',
  },
  text: {
    primary: '#ffffff',
    secondary: '#d1d5db',
    muted: '#9ca3af',
  },
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  border: '#3d1f6b',
} as const;

export const GRADIENTS = {
  primaryPurple: {
    colors: ['#c4b5fd', '#8B5CF6', '#7c3aed'] as string[],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
  background: {
    colors: ['#1a0a2e', '#2d1454'] as string[],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  },
  card: {
    colors: ['#251135', '#2d1454'] as string[],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  '2xl': 32,
  '3xl': 48,
} as const;

export const FONT_SIZE = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
} as const;

export const BORDER_RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  pill: 9999,
} as const;

export const ANIMATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

export const Z_INDEX = {
  base: 0,
  fab: 50,
  header: 100,
  modal: 1000,
} as const;

// Goal categories with their display color
export const GOAL_CATEGORIES = [
  { key: 'health', label: 'Health', color: COLORS.success },
  { key: 'wealth', label: 'Wealth', color: COLORS.warning },
  { key: 'career', label: 'Career', color: COLORS.primary.light },
  { key: 'relationships', label: 'Relationships', color: COLORS.secondary.DEFAULT },
  { key: 'spiritual', label: 'Spiritual', color: COLORS.primary.lighter },
] as const;

export type GoalCategory = (typeof GOAL_CATEGORIES)[number]['key'];
