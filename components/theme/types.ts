export type ThemeColors = {
  primary: string;
  primaryContrast: string;
  secondary: string;
  secondaryContrast: string;
  accent: string;
  accentContrast: string;
  background: string;
  text: string;
  textMuted: string;
  border: string;
};

export type Theme = {
  name: string;
  colors: ThemeColors;
};

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  availableThemes: Theme[];
};
