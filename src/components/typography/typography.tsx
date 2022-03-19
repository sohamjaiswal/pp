import React from "react";

import "./typography.scss";
import { ITypographyProps } from "./typography.types";

export const Typography = ({
  label,
  bold,
  italic,
  size,
  colour = "#fff",
  className = "",
  ...props
}: ITypographyProps) => {
  const modifiers = [italic ? "italic" : null, bold ? "bold" : null].join(" ");
  const fSize = size ? `${1 * size}rem` : "1rem";
  const useClassName = ["typography", modifiers, className].join(" ");
  return (
    <div {...props} className={useClassName}>
      <span
        style={{
          fontSize: fSize,
          color: colour,
        }}
      >
        {label}
      </span>
    </div>
  );
};
