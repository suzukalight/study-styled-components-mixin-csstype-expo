export type StyleSize =
  | "large"
  | "medium"
  | "small"
  | "x-large"
  | "x-small"
  | "xx-large"
  | "xx-small"
  | "xxx-large";

const fontSizeTable: { [key in StyleSize]?: string } = {
  small: "0.75rem",
  medium: "1rem",
  large: "1.25rem",
  "x-large": "1.5rem",
  "xx-large": "2rem",
  "xxx-large": "3rem",
};

export const fz = (size?: StyleSize) => (size ? fontSizeTable[size] : null);
