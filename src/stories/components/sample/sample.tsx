import React from "react";
import { ISampleProps } from "./sample.types";
import "./sample.scss";

export const Sample = ({ label, ...props }: ISampleProps) => {
  return (
    <button {...props} className="sample">
      {label}
    </button>
  );
};
