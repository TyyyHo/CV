import clsx from "clsx/lite";

// combine classnames
export const cn = (...inputs: (string | undefined)[]): string => {
  return clsx(...inputs);
};
