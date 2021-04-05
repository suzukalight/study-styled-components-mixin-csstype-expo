export const colorPalettes = {
  black: "#1b2021",
  white: "#f7f3e9",
  red: "#ce1212",
  orange: "#e48900",
  yellow: "#f7ea00",
  green: "#289672",
  sky: "#8fd5e1",
  blue: "#150e56",
  indigo: "#150e56",
  brown: "#7b113a",
};

export type ThemeColorKeys =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary";

export type ThemeColors = { [key in ThemeColorKeys]: string };

export const themeColors: ThemeColors = {
  primary: colorPalettes.indigo,
  secondary: colorPalettes.brown,
  tertiary: colorPalettes.blue,
  quaternary: colorPalettes.sky,
};
