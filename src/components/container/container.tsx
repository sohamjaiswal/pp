import React from "react";
import { IContainerProps } from "./container.types";
import "./container.scss";

export const Container = ({ children, ...props }: IContainerProps) => {
  const className = ["container", props.className].join(" ");
  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
};
