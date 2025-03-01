import clsx from "clsx/lite";

// combine classnames
export const cn = (...inputs: string[]): string => {
  return clsx(...inputs);
};
