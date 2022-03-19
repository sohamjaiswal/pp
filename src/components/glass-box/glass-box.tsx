import React from "react";

import "./glass-box.scss";
import { IGlassBoxProps } from "./glass-box.types";

export const GlassBox = ({ children }: IGlassBoxProps) => {
  return <div className="glassBox">{children}</div>;
};
