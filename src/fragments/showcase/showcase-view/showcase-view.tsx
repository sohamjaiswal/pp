import React from "react";
import { IShowcaseViewProps } from "./showcase-view.types";

import "./showcase-view.scss";

export const ShowcaseView = ({ items }: IShowcaseViewProps) => {
  return <div className="showcaseView">{items}</div>;
};
